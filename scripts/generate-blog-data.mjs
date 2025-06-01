import * as fs from "fs";
import graymatter from "gray-matter";
import * as path from "path";
(async () => {
    const cwd = process.cwd();
    if (fs.existsSync(path.join(cwd, "public", "blog-resources"))) {
        fs.rmSync(path.join(cwd, "public", "blog-resources"), { recursive: true, force: true });
    }
    fs.mkdirSync(path.join(cwd, "public", "blog-resources"), { recursive: true });
    let imageCnt = 0;
    let imageImport = "";
    let blogData = `export const blogData: {
    [key: string]: {
        title: string;
        date: string;
        author: string;
        topic: string;
        thumbnail: StaticImageData;
        thumbnailPath: string;
        images: {
            [key: string]: StaticImageData;
        };
        twitterEmbedded: boolean;
        description: string;
        content: string;
    };
} = {\n`;
    let resourceSize = "export const resourceSize: { [key: string]: number } = {\n";
    const removeAlt = /^(!\[([^\]]+)\]\(([^)]+)\))\s*\r?\n([^\r\n]+)\s*$/gm;
    const tweetLinkPattern = /^\[(https?:\/\/(?:x\.com|twitter\.com)\/[a-zA-Z0-9_]+\/status\/\d+)\]\(\1\)$/;
    for (const round of await fs.promises.readdir(path.join(cwd, "src/blogs"))) {
        if (
            !fs.statSync(path.join(cwd, "src/blogs", round)).isDirectory() ||
            (!Number.isInteger(Number(round)) && round !== "test")
        )
            continue;
        const folderPath = path.join(cwd, "src/blogs", round);
        for (const index of await fs.promises.readdir(folderPath)) {
            if (!fs.statSync(path.join(folderPath, index)).isDirectory()) {
                console.log(`WARNING: ${path.join(folderPath, index)} is not a directory`);
                continue;
            }
            let thumbnail = undefined;
            const images = [];
            for (const file of await fs.promises.readdir(path.join(folderPath, index))) {
                if (
                    file.endsWith(".png") ||
                    file.endsWith(".jpg") ||
                    file.endsWith(".jpeg") ||
                    file.endsWith(".webp") ||
                    file.endsWith(".avif") ||
                    file.endsWith(".avifs")
                ) {
                    imageImport += `import Image${imageCnt} from "./${round}/${index}/${file}";\n`;
                    if (file.split(".")[0] === "thumbnail") {
                        if (thumbnail !== undefined) {
                            console.log(`WARNING: ${path.join(folderPath, index)} has multiple thumbnail images`);
                        }
                        thumbnail = [file, imageCnt, file];
                    } else {
                        images.push([file, imageCnt]);
                    }
                    imageCnt += 1;
                } else if (file !== "index.md") {
                    const dest = path.join(cwd, "public", "blog-resources", round, index, encodeURIComponent(file));
                    fs.mkdirSync(path.dirname(dest), { recursive: true });
                    fs.copyFileSync(path.join(folderPath, index, file), dest);
                    resourceSize += `    "${round}/${index}/${encodeURIComponent(file)}": ${fs.statSync(dest).size},\n`;
                }
            }
            if (thumbnail === undefined) {
                console.log(`WARNING: ${path.join(folderPath, index)} does not have a thumbnail image`);
            }
            const filestr = await fs.promises.readFile(path.join(folderPath, index, "index.md"), "utf-8");
            let { data, content } = graymatter(filestr);
            content = content.replaceAll("\r\n", "\n").replaceAll("\r", "\n");
            content = content.replaceAll(removeAlt, (match, md, alt1, url, alt2) => {
                if (alt2.replace(/\s+/g, "") === alt1) {
                    return md + "\n";
                }
                return match;
            });
            if (!content.includes("\n# 目次\n")) {
                console.log(`WARNING: ${path.join(folderPath, index)} does not have a table of contents`);
                content = "\n# 目次\n" + content;
            }
            const twitterEmbedded = (() => {
                const lines = content.split("\n");
                for (let i = 0; i < lines.length; ++i) {
                    if (
                        tweetLinkPattern.test(lines[i].trim()) &&
                        (i == 0 || lines[i - 1].trim() === "") &&
                        (i == lines.length - 1 || lines[i + 1].trim()) === ""
                    ) {
                        return true;
                    }
                }
                return false;
            })();
            const [description, main_text] = content.split("\n# 目次\n");
            if (round === "test") {
                blogData += `    ...(process.env.NODE_ENV === "development"
        ? {
              "${round}/${index}": {
                  title: \`${data.title}\`,
                  date: \`${data.date}\`,
                  author: \`${data.author}\`,
                  topic: \`${data.topic}\`,
                  thumbnail: ${thumbnail !== undefined ? `Image${thumbnail[1]}` : "undefined"},
                  thumbnailPath: \`${thumbnail !== undefined ? `src/blogs/${round}/${index}/${thumbnail[2]}` : "undefined"}\`,
                  images: ${images.length !== 0 ? `{${images.map((image) => `\n                      "${encodeURIComponent(image[0])}": Image${image[1]},`).join("")}\n                  }` : `{}`},
                  twitterEmbedded: ${twitterEmbedded},
                  description: \`${description}\`,
                  content: \`${main_text}\`,
              },
          }
        : {}),
`;
            } else {
                blogData += `    "${round}/${index}": {
        title: \`${data.title}\`,
        date: \`${data.date}\`,
        author: \`${data.author}\`,
        topic: \`${data.topic}\`,
        thumbnail: ${thumbnail !== undefined ? `Image${thumbnail[1]}` : "undefined"},
        thumbnailPath: \`${thumbnail !== undefined ? `src/blogs/${round}/${index}/${thumbnail[2]}` : "undefined"}\`,
        images: ${images.length !== 0 ? `{${images.map((image) => `\n            "${encodeURIComponent(image[0])}": Image${image[1]},`).join("")}\n        }` : `{}`},
        twitterEmbedded: ${twitterEmbedded},
        description: \`${description}\`,
        content: \`${main_text}\`,
    },
`;
            }
        }
    }
    blogData += "};\n";
    resourceSize += "};\n";
    const result =
        `// ===================================================================================\n` +
        `// This file is auto-generated by generate-blog-data.mjs. Do not edit this file directly.\n` +
        `// ===================================================================================\n\n` +
        `import type { StaticImageData } from "next/image";\n` +
        imageImport +
        blogData +
        resourceSize;
    fs.writeFileSync(path.join(cwd, "src/blogs", "blog-data.ts"), result, "utf-8");
    console.log("Blog data generated successfully.");
})();
