/* eslint @typescript-eslint/no-explicit-any: 0 */
import { blogData, resourceSize } from "@/blogs/blog-data";
import { YouTubeEmbed } from "@next/third-parties/google";
import { compileMDX } from "next-mdx-remote/rsc";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { Tweet } from "react-tweet";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";

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
 * const { title, date, author, topic, thumbnail, thumbnailPath } = getBlogMetadata("60", "04");
 */
export function getBlogMetadata(round: string, index: string) {
    const blog = blogData[`${round}/${index}`];
    return {
        title: blog.title,
        date: blog.date,
        author: blog.author,
        topic: blog.topic,
        thumbnail: blog.thumbnail,
        thumbnailPath: blog.thumbnailPath,
    };
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

function toAnchorId(text: string) {
    return text
        .trim()
        .normalize("NFKC")
        .toLowerCase()
        .replace(/[\u3000\s_\.]+/g, "-")
        .replace(/[^\p{L}\p{N}-]+/gu, "")
        .replace(/-{2,}/g, "-")
        .replace(/^-+|-+$/g, "");
}

function remarkExtractH1Headings(headings: { name: string; id: string }[]) {
    return () => {
        return (tree: any) => {
            visit(tree, "heading", (node: any) => {
                if (node.depth === 1) {
                    function getText(n: any): string {
                        if (n.type === "text") return n.value;
                        if (Array.isArray(n.children)) {
                            return n.children.map(getText).join("");
                        }
                        return "";
                    }
                    const text = getText(node);
                    if (text === "") return;
                    headings.push({
                        name: text,
                        id: toAnchorId(text),
                    });
                }
            });
        };
    };
}

function transformLinks(node: React.ReactNode, round: string, index: string): React.ReactNode {
    if (typeof node === "string" || typeof node === "number") {
        return node;
    }
    if (Array.isArray(node)) {
        return node.map((child, i) => <React.Fragment key={i}>{transformLinks(child, round, index)}</React.Fragment>);
    }

    if (React.isValidElement(node) && node.type === "a" && (node.props as any).href) {
        const { href, children } = node.props as { href: string; children: React.ReactNode };
        if (href[0] === "#") {
            return <a href={href}>{transformLinks(children, round, index)}</a>;
        }
        if (
            (href.startsWith("https://") || href.startsWith("http://")) &&
            href.split("/").at(-1)?.includes(".") &&
            !href.endsWith(".html") &&
            !href.endsWith(".htm") &&
            !href.endsWith(".php")
        ) {
            return (
                <Link href={href} download>
                    {transformLinks(children, round, index)}
                </Link>
            );
        }
        if (
            (href.startsWith("https://") || href.startsWith("http://")) &&
            !href.startsWith("https://seiseisai.com") &&
            !href.startsWith("http://seiseisai.com")
        ) {
            return (
                <Link href={href} target="_blank" rel="noopener noreferrer nofollow">
                    {transformLinks(children, round, index)}
                </Link>
            );
        }
        if (href.includes(".") && !href.includes("/")) {
            return (
                <Link href={`/blog-resources/${round}/${index}/${encodeURIComponent(href)}`} download>
                    {transformLinks(children, round, index)}
                </Link>
            );
        }
        return <Link href={href}>{transformLinks(children, round, index)}</Link>;
    }

    return node;
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
    DownloadButton: (props: { url: string; filename: string; filesize: string }) => React.ReactNode,
    tweetTheme: "light" | "dark" = "light",
): Promise<{
    title: string;
    date: string;
    author: string;
    topic: string;
    thumbnail: StaticImageData;
    toc: { name: string; id: string }[];
    description: React.ReactNode;
    content: React.ReactNode;
}> {
    const blog = blogData[`${round}/${index}`];
    const { title, date, author, topic, thumbnail, images, description, content } = blog;
    const components = {
        h1: ({ children }: { children: any }) => {
            function getAllText(node: React.ReactNode): string {
                if (typeof node === "string" || typeof node === "number") {
                    return String(node);
                }
                if (Array.isArray(node)) {
                    return node.map(getAllText).join("");
                }
                if (React.isValidElement(node)) {
                    const children = (node.props as any).children;
                    if (children) {
                        return getAllText(children);
                    }
                }
                return "";
            }
            const text = getAllText(children);
            if (text === "") {
                return (
                    <section className="blog_content_root">
                        <h1>{transformLinks(children, round, index)}</h1>
                    </section>
                );
            }
            return (
                <section className="blog_content_root">
                    <h1 id={toAnchorId(text)}>{transformLinks(children, round, index)}</h1>
                </section>
            );
        },
        h2: ({ children }: { children: any }) => {
            return (
                <section className="blog_content_root">
                    <h2>{transformLinks(children, round, index)}</h2>
                </section>
            );
        },
        h3: ({ children }: { children: any }) => {
            return (
                <section className="blog_content_root">
                    <h3>{transformLinks(children, round, index)}</h3>
                </section>
            );
        },
        h4: ({ children }: { children: any }) => {
            return (
                <section className="blog_content_root">
                    <h4>{transformLinks(children, round, index)}</h4>
                </section>
            );
        },
        h5: ({ children }: { children: any }) => {
            return (
                <section className="blog_content_root">
                    <h5>{transformLinks(children, round, index)}</h5>
                </section>
            );
        },
        h6: ({ children }: { children: any }) => {
            return (
                <section className="blog_content_root">
                    <h6>{transformLinks(children, round, index)}</h6>
                </section>
            );
        },
        p: ({ children }: { children: any }) => {
            if (Array.isArray(children)) {
                return (
                    <section className="blog_content_root">
                        <div>{transformLinks(children, round, index)}</div>
                    </section>
                );
            }
            if (React.isValidElement(children)) {
                const type = (children as React.ReactElement).type;
                const props = children.props as any;
                if (type === "a" && props.href) {
                    const { href, children } = props as { href: string; children: React.ReactNode };
                    if (
                        children === href &&
                        (href.startsWith("https://youtube.com/watch?v=") ||
                            href.startsWith("https://www.youtube.com/watch?v="))
                    ) {
                        return (
                            <section className="blog_youtube_embed">
                                <YouTubeEmbed videoid={href.split("?v=").at(-1) || ""} />
                            </section>
                        );
                    }
                    if (children === href && href.startsWith("https://youtu.be/")) {
                        return (
                            <section className="blog_youtube_embed">
                                <YouTubeEmbed videoid={href.split("/").at(-1) || ""} />
                            </section>
                        );
                    }
                    if (
                        children === href &&
                        href.match(/^https?:\/\/(x\.com|twitter\.com)\/[a-zA-Z0-9_]+\/status\/\d+/)
                    ) {
                        const tweetId = href.match(/status\/(\d+)/)?.[1];
                        if (tweetId) {
                            return (
                                <section className="blog_tweet_embed" data-theme={tweetTheme} suppressHydrationWarning>
                                    <Tweet id={tweetId} />
                                </section>
                            );
                        }
                    }
                    if (href[0] === "#") {
                        return (
                            <section className="blog_content_root">
                                <div>
                                    <a href={href}>{transformLinks(children, round, index)}</a>
                                </div>
                            </section>
                        );
                    }
                    if (
                        (href.startsWith("https://") || href.startsWith("http://")) &&
                        href.split("/").at(-1)?.includes(".") &&
                        !href.endsWith(".html") &&
                        !href.endsWith(".htm") &&
                        !href.endsWith(".php")
                    ) {
                        return (
                            <section className="blog_content_root">
                                <div>
                                    <Link href={href} download>
                                        {transformLinks(children, round, index)}
                                    </Link>
                                </div>
                            </section>
                        );
                    }
                    if (
                        (href.startsWith("https://") || href.startsWith("http://")) &&
                        !href.startsWith("https://seiseisai.com") &&
                        !href.startsWith("http://seiseisai.com")
                    ) {
                        return (
                            <section className="blog_content_root">
                                <div>
                                    <Link href={href} target="_blank" rel="noopener noreferrer nofollow">
                                        {transformLinks(children, round, index)}
                                    </Link>
                                </div>
                            </section>
                        );
                    }
                    if (href.includes(".")) {
                        if (children === href || children === "") {
                            const size = resourceSize[`${round}/${index}/${encodeURIComponent(href)}`];
                            const fileSize =
                                size < 1024
                                    ? `${size} B`
                                    : size < 1024 * 1024
                                      ? `${(size / 1024).toFixed(2)} KB`
                                      : `${(size / (1024 * 1024)).toFixed(2)} MB`;
                            return (
                                <DownloadButton
                                    url={`/blog-resources/${round}/${index}/${encodeURIComponent(href)}`}
                                    filename={href}
                                    filesize={fileSize}
                                />
                            );
                        }
                        return (
                            <section className="blog_content_root">
                                <div>
                                    <Link
                                        href={`/blog-resources/${round}/${index}/${encodeURIComponent(href)}`}
                                        download
                                    >
                                        {transformLinks(children, round, index)}
                                    </Link>
                                </div>
                            </section>
                        );
                    }
                    return (
                        <section className="blog_content_root">
                            <div>
                                <Link href={href}>{transformLinks(children, round, index)}</Link>
                            </div>
                        </section>
                    );
                }
            }
            return (
                <section className="blog_content_root">
                    <div>{transformLinks(children, round, index)}</div>
                </section>
            );
        },
        img: ({ src, alt }: { src: string; alt: string | undefined }) => {
            const image = images[src];
            if (image === undefined) return <></>;
            if (alt === "image.png" || alt === "" || alt === undefined)
                return (
                    <figure>
                        <Image src={image} alt="image" />
                    </figure>
                );
            return (
                <figure>
                    <Image src={image} alt={alt} />
                    <figcaption>{alt}</figcaption>
                </figure>
            );
        },
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
    const headings: { name: string; id: string }[] = [];
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
        },
    });
    return {
        title,
        date,
        author,
        topic,
        thumbnail,
        toc: headings,
        description: descriptionMdx.content,
        content: contentMdx.content,
    };
}
