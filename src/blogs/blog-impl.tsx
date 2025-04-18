import { YouTubeEmbed } from "@next/third-parties/google";
import * as fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import { blogImages } from "./blog-info";

export async function getAllBlogs() {
    return Promise.all(
        fs
            .readdirSync("src/blogs", { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory())
            .map((round) =>
                fs.readdirSync(`src/blogs/${round.name}`).map(async (index) => {
                    const filePath = `src/blogs/${round.name}/${index}/index.md`;
                    const md = fs.readFileSync(filePath, "utf-8");
                    const mdx = await compileMDX<{
                        title: string;
                        date: string;
                        author: string;
                        topic: string;
                        link: string;
                    }>({
                        source: md,
                        options: {
                            parseFrontmatter: true,
                            mdxOptions: {
                                remarkPlugins: [remarkGfm],
                                rehypePlugins: [],
                            },
                        },
                    });
                    return {
                        round: round.name,
                        index: index,
                        title: mdx.frontmatter.title,
                        date: mdx.frontmatter.date,
                        author: mdx.frontmatter.author,
                        topic: mdx.frontmatter.topic,
                    };
                }),
            )
            .flat(),
    );
}

export function getThumbnail(round: string, index: string) {
    return blogImages[`${round}/${index}/thumbnail.png`];
}

export function enumetateParams() {
    return fs
        .readdirSync("src/blogs", { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((round) => {
            return fs.readdirSync(`src/blogs/${round.name}`).map((index) => {
                return { round: round.name, index: index };
            });
        })
        .flat();
}

export async function getBlog(round: string, index: string, image_class: string, table_class: string) {
    const filePath = `src/blogs/${round}/${index}/index.md`;
    const md = fs.readFileSync(filePath, "utf-8");
    const mdx = await compileMDX<{ title: string; date: string; author: string; topic: string; link: string }>({
        source: md,
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                remarkPlugins: [remarkGfm, [remarkToc, { maxDepth: 1, heading: "目次" }]],
                rehypePlugins: [],
            },
        },
        components: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            h1: ({ children }: { children: any }) => {
                if (typeof children === "string") {
                    if (children === "目次") return <h6 className={table_class}>{children}</h6>;
                    else return <h1>{children}</h1>;
                } else return children;
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            p: ({ children }: { children: any }) => {
                if (typeof children === "string") return <p>{children}</p>;
                else return children;
            },
            img: ({ src, alt }: { src: string; alt: string }) => {
                const image = blogImages[`${round}/${index}/${src.replaceAll("%20", " ")}`];
                if (image === undefined) return <></>;
                return (
                    <Image
                        className={alt === "image.png" ? "" : image_class}
                        src={image}
                        alt={alt === "image.png" ? "" : alt || ""}
                    />
                );
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            a: ({ href, children }: { href: string; children: any }) =>
                href.startsWith("https://youtube.com/") ||
                href.startsWith("https://www.youtube.com/") ||
                href.startsWith("https://youtu.be/") ? (
                    <YouTubeEmbed videoid={href.split("/").at(-1) || ""} />
                ) : (
                    <Link href={href}> {children}</Link>
                ),
        },
    });
    return {
        title: mdx.frontmatter.title,
        date: mdx.frontmatter.date,
        author: mdx.frontmatter.author,
        topic: mdx.frontmatter.topic,
        content: mdx.content,
    };
}
