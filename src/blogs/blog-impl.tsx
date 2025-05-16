import { YouTubeEmbed } from "@next/third-parties/google";
import crypto from "crypto";
import * as fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import { blogData } from "./blog-info";

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
        };
    });
}

/**
 * @example
 * <Image src={getThumbnail("60", "04")} alt="thumbnail" />
 */
export function getThumbnail(round: string, index: string): StaticImageData {
    return blogData[`${round}/${index}`].thumbnail;
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
    image_class: string,
    table_class: string,
): Promise<{
    title: string;
    date: string;
    author: string;
    topic: string;
    content: React.ReactElement;
}> {
    const filePath = `src/blogs/${round}/${index}/index.md`;
    const md = fs.readFileSync(filePath, "utf-8");
    const mdx = await compileMDX<{ title: string; date: string; author: string; topic: string; link: string }>({
        source: md,
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                remarkPlugins: [remarkGfm, [remarkToc, { maxDepth: 1, heading: "目次" }]],
                rehypePlugins: [rehypeSlug],
            },
        },
        components: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            h1: ({ id, children }: { id: string; children: any }) => {
                if (typeof children === "string") {
                    if (children === "目次")
                        return (
                            <div className={table_class} style={{ display: "none" }}>
                                {children}
                            </div>
                        );
                    else
                        return (
                            <h1
                                id={crypto
                                    .createHash("sha256")
                                    .update(encodeURIComponent(id))
                                    .digest("base64url")
                                    .substring(0, 16)}
                            >
                                {children}
                            </h1>
                        );
                } else return children;
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            h2: ({ children }: { children: any }) => {
                return <h2>{children}</h2>;
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            h3: ({ children }: { children: any }) => {
                return <h3>{children}</h3>;
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            p: ({ children }: { children: any }) => {
                if (typeof children === "string") return <p>{children}</p>;
                else return children;
            },
            img: ({ src, alt }: { src: string; alt: string }) => {
                const image = blogData[`${round}/${index}`].images[src];
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
                ) : href[0] === "#" ? (
                    <a
                        href={
                            "#" +
                            crypto.createHash("sha256").update(href.substring(1)).digest("base64url").substring(0, 16)
                        }
                    >
                        {children}
                    </a>
                ) : href.startsWith("https://") || href.startsWith("http://") || href[0] == "/" ? (
                    <Link href={href}>{children}</Link>
                ) : (
                    <Link href={`/blog-resources/${round}/${index}/${href}`} download>
                        {children}
                    </Link>
                ),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ul: ({ children }: { children: any }) => {
                return (
                    <ul>
                        <style>{`ul>h6:not(.${table_class}+ul>h6){display:none;}`}</style>
                        <h6>目次</h6>
                        {children}
                    </ul>
                );
            },
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
