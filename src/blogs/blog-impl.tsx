/* eslint @typescript-eslint/no-explicit-any: 0 */
import { YouTubeEmbed } from "@next/third-parties/google";
import crypto from "crypto";
import { compileMDX } from "next-mdx-remote/rsc";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";
import { blogData } from "./blog-data";

/**
 * @example
 * {(await getAllBlogs()).map((blog) => (
 *     <div key={`${blog.round}/${blog.index}`}>
 *         <h2>{blog.title}</h2>
 *         <p>{blog.date}</p>
 *         <p>{blog.author}</p>
 *         <p>{blog.topic}</p>
 *         <Link href={`/blog/${blog.round}/${blog.index}`}>Read more</Link>
 *     </div>
 * ))}
 */
export function getAllBlogs(): {
    round: string;
    index: string;
    title: string;
    date: string;
    author: string;
    topic: string;
    thumbnail: StaticImageData;
}[] {
    return Object.entries(blogData).map(([key, value]) => {
        const [round, index] = key.split("/");
        return {
            round,
            index,
            title: value.title,
            date: value.date,
            author: value.author,
            topic: value.topic,
            thumbnail: value.thumbnail,
        };
    });
}

/**
 * @example
 * export function generateStaticParams() {
 *     return enumetateParams();
 * }
 */
export function enumetateParams(): { round: string; index: string }[] {
    return Object.keys(blogData).map((path) => {
        const [round, index] = path.split("/");
        return { round, index };
    });
}

function remarkExtractH1Headings(headings: string[]) {
    return () => {
        return (tree: any) => {
            visit(tree, "heading", (node: any) => {
                if (node.depth === 1) {
                    const text = node.children
                        .filter((child: any) => child.type === "text")
                        .map((child: any) => child.value)
                        .join("");
                    headings.push(text);
                }
            });
        };
    };
}

/**
 * @example
 * const { title, date, author, topic, content } = getBlog("60", "04", styles.image_with_caption, styles.table_of_contents);
 *
 * <h1>{title}</h1>
 * <h2>{date}</h2>
 * <h3>{author}</h3>
 * <article className={styles.blog_content}>{content}</article>
 */
export async function getBlog(
    round: string,
    index: string,
): Promise<{
    title: string;
    date: string;
    author: string;
    topic: string;
    thumbnail: StaticImageData;
    toc: { name: string; id: string }[];
    description: React.ReactElement;
    content: React.ReactElement;
}> {
    const blog = blogData[`${round}/${index}`];
    const { title, date, author, topic, thumbnail, images, description, content } = blog;
    const components = {
        p: ({ children }: { children: any }) => {
            if (typeof children === "string") return <p>{children}</p>;
            if (!Array.isArray(children)) return <>{children}</>;
            return <p>{children}</p>;
        },
        img: ({ src, alt }: { src: string; alt: string }) => {
            const image = images[src];
            if (image === undefined) return <></>;
            if (alt === "image.png")
                return (
                    <>
                        <Image src={image} alt="image" />
                        <p></p>
                    </>
                );
            return <Image src={image} alt={alt === "image.png" ? "" : alt || ""} />;
        },
        a: ({ href, children }: { href: string; children: any }) =>
            children === href &&
            (href.startsWith("https://youtube.com/") || href.startsWith("https://www.youtube.com/")) ? (
                <YouTubeEmbed videoid={href.split("=").at(-1) || ""} />
            ) : children === href && href.startsWith("https://youtu.be/") ? (
                <YouTubeEmbed videoid={href.split("/").at(-1) || ""} />
            ) : href[0] === "#" ? (
                <a
                    href={
                        "#" + crypto.createHash("sha256").update(href.substring(1)).digest("base64url").substring(0, 16)
                    }
                >
                    {children}
                </a>
            ) : href[0] == "/" ||
              href.startsWith("http://seiseisai.com") ||
              href.startsWith("https://seiseisai.com") ? (
                <Link href={href}>{children}</Link>
            ) : href.startsWith("https://") || href.startsWith("http://") ? (
                <Link href={href} target="_blank" rel="noopener noreferrer nofollow">
                    {children}
                </Link>
            ) : (
                <Link href={`/blog-resources/${round}/${index}/${encodeURIComponent(href)}`} download>
                    {children}
                </Link>
            ),
    };
    const descriptionMdx = await compileMDX({
        source: description,
        options: {
            parseFrontmatter: false,
            mdxOptions: {
                remarkPlugins: [remarkGfm, remarkBreaks],
            },
        },
        components,
    });
    const headings: string[] = [];
    const contentMdx = await compileMDX({
        source: content,
        options: {
            parseFrontmatter: false,
            mdxOptions: {
                remarkPlugins: [remarkGfm, remarkBreaks, remarkExtractH1Headings(headings)],
            },
        },
        components: {
            ...components,
            h1: ({ children }: { children: any }) => {
                if (typeof children === "string") {
                    return (
                        <h1 id={crypto.createHash("sha256").update(children).digest("base64url").substring(0, 16)}>
                            {children}
                        </h1>
                    );
                } else return <h1>{children}</h1>;
            },
        },
    });
    return {
        title,
        date,
        author,
        topic,
        thumbnail,
        toc: headings.map((name) => ({
            name,
            id: crypto.createHash("sha256").update(name).digest("base64url").substring(0, 16),
        })),
        description: descriptionMdx.content,
        content: contentMdx.content,
    };
}
