/* eslint @typescript-eslint/no-explicit-any: 0 */
/* eslint better-tailwindcss/no-unregistered-classes: 0 */
import NewsManager from "@/impl/news";
import { YouTubeEmbed } from "@next/third-parties/google";
import { compileMDX } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { Tweet } from "react-tweet";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import "./news.scss";

export const metadata = {
    title: "News | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

export const revalidate = 180;

function transformLinks(node: React.ReactNode): React.ReactNode {
    if (typeof node === "string" || typeof node === "number") {
        return node;
    }
    if (Array.isArray(node)) {
        return node.map((child, i) => <React.Fragment key={i}>{transformLinks(child)}</React.Fragment>);
    }

    if (React.isValidElement(node) && node.type === "a" && (node.props as any).href) {
        const { href, children } = node.props as {
            href: string;
            children: React.ReactNode;
        };
        if (href[0] === "#" || href.startsWith("mailto:")) {
            return (
                <a href={href} className="news_element">
                    {transformLinks(children)}
                </a>
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
                <Link href={href} download className="news_element">
                    {transformLinks(children)}
                </Link>
            );
        }
        if (
            (href.startsWith("https://") || href.startsWith("http://")) &&
            !href.startsWith("https://seiseisai.com") &&
            !href.startsWith("http://seiseisai.com")
        ) {
            return (
                <Link href={href} target="_blank" rel="noopener noreferrer nofollow" className="news_element">
                    {transformLinks(children)}
                </Link>
            );
        }
        return (
            <Link href={href} className="news_element">
                {transformLinks(children)}
            </Link>
        );
    }

    return node;
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const id = await NewsManager.getId((await params).id);
    if (!id) notFound();
    const news = await NewsManager.getNewsById(id);
    if (!news) notFound();
    const { title, date, importance, content } = news;
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const components = {
        h1: ({ children }: { children: any }) => {
            return <h1 className="news_element">{transformLinks(children)}</h1>;
        },
        h2: ({ children }: { children: any }) => {
            return <h2 className="news_element">{transformLinks(children)}</h2>;
        },
        h3: ({ children }: { children: any }) => {
            return <h3 className="news_element">{transformLinks(children)}</h3>;
        },
        h4: ({ children }: { children: any }) => {
            return <h4 className="news_element">{transformLinks(children)}</h4>;
        },
        h5: ({ children }: { children: any }) => {
            return <h5 className="news_element">{transformLinks(children)}</h5>;
        },
        h6: ({ children }: { children: any }) => {
            return <h6 className="news_element">{transformLinks(children)}</h6>;
        },
        p: ({ children }: { children: any }) => {
            if (Array.isArray(children)) {
                return <div className="news_element">{transformLinks(children)}</div>;
            }
            if (React.isValidElement(children)) {
                const type = (children as React.ReactElement).type;
                const props = children.props as any;
                if ((type as any).name === "img") {
                    return children;
                }
                if (type === "a" && props.href) {
                    const { href, children } = props as {
                        href: string;
                        children: React.ReactNode;
                    };
                    if (
                        children === href &&
                        (href.startsWith("https://youtube.com/watch?v=") ||
                            href.startsWith("https://www.youtube.com/watch?v="))
                    ) {
                        return (
                            <section className="news_youtube_embed">
                                <YouTubeEmbed videoid={href.split("?v=").at(-1) || ""} />
                            </section>
                        );
                    }
                    if (children === href && href.startsWith("https://youtu.be/")) {
                        return (
                            <section className="news_youtube_embed">
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
                                <section className="news_tweet_embed" data-theme={"light"} suppressHydrationWarning>
                                    <Tweet id={tweetId} />
                                </section>
                            );
                        }
                    }
                    if (href[0] === "#" || href.startsWith("mailto:")) {
                        return (
                            <div className="news_element">
                                <a href={href} className="news_element">
                                    {transformLinks(children)}
                                </a>
                            </div>
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
                            <div className="news_element">
                                <Link href={href} download className={""}>
                                    {transformLinks(children)}
                                </Link>
                            </div>
                        );
                    }
                    if (
                        (href.startsWith("https://") || href.startsWith("http://")) &&
                        !href.startsWith("https://seiseisai.com") &&
                        !href.startsWith("http://seiseisai.com")
                    ) {
                        return (
                            <div className="news_element">
                                <Link
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                    className="news_element"
                                >
                                    {transformLinks(children)}
                                </Link>
                            </div>
                        );
                    }
                    return (
                        <div className="news_element">
                            <Link href={href} className="news_element">
                                {transformLinks(children)}
                            </Link>
                        </div>
                    );
                }
            }
            return <div className="news_element">{transformLinks(children)}</div>;
        },
        ul: ({ children }: { children: any }) => {
            return <ul className="news_element">{children}</ul>;
        },
        li: ({ children }: { children: any }) => {
            return <li className="news_element">{children}</li>;
        },
        ol: ({ children }: { children: any }) => {
            return <ol className="news_element">{children}</ol>;
        },
        strong: ({ children }: { children: any }) => {
            return (
                <span className="news_element" style={{ fontWeight: 600 }}>
                    {children}
                </span>
            );
        },
    };
    const mdx = await compileMDX({
        source: content,
        options: {
            parseFrontmatter: false,
            mdxOptions: {
                remarkPlugins: [remarkGfm, remarkBreaks],
            },
        },
        components,
    });

    return (
        <>
            <div
                className={`mr-[20px] mb-[60px] ml-[20px] flex flex-col text-[#0b0e0f] not-md:mb-[40px] md:mr-[10%]
                    md:ml-[10%] lg:mr-[20%] lg:ml-[20%] lg:items-center`}
            >
                <div
                    className={`mt-[30px] flex items-center border-b-[2px] border-[#0b0e0f] pb-[4px] md:pb-[8px]
                        lg:w-[120%] lg:justify-center lg:pb-[12px]`}
                >
                    <h1 className={"text-[40px] font-bold not-md:text-[28px] lg:text-[48px]"}>
                        <span className="text-[#de0d22]">N</span>ews
                    </h1>
                </div>
                <div className={"mt-[24px] flex items-center not-md:mt-[20px]"}>
                    <time className={"text-[20px] not-md:text-[16px]"} dateTime={`${year}-${month}-${day}`}>
                        {year}.{month}.{day}
                    </time>
                    {importance && (
                        <div
                            className={`ml-[12px] flex h-[24px] items-center justify-center rounded-full bg-[#de0d22]
                            pr-[12px] pl-[12px] text-[13px] text-white not-md:ml-[8px] not-md:h-[20px] not-md:pr-[10px]
                            not-md:pl-[10px] not-md:text-[12px]`}
                        >
                            重要
                        </div>
                    )}
                </div>
                <h1 className={"mb-[24px] text-[40px] text-[#de0d22] not-md:mb-[20px] not-md:text-[28px]"}>{title}</h1>
                <article className="w-full">{mdx.content}</article>
                <div className={"mt-[32px] flex w-full justify-center not-md:mt-[24px]"}>
                    <Link
                        href="/news"
                        className={`rounded-[12px] border-[1.5px] pt-[4px] pr-[16px] pb-[4px] pl-[16px] text-[20px]
                            text-[#de0d22] transition-opacity duration-300 not-md:rounded-[8px] not-md:pt-[4px]
                            not-md:pr-[12px] not-md:pb-[3px] not-md:pl-[12px] not-md:text-[16px] hover:opacity-75`}
                    >
                        {">> News一覧へ"}
                    </Link>
                </div>
            </div>
        </>
    );
}
