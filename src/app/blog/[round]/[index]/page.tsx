import { blogData } from "@/blogs/blog-data";
import { enumerateParams, getBlog } from "@/impl/blog";
import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

import DownloadIcon from "./components/download-icon.svg";
import Grid from "./components/grid.svg";

import BlogCard from "../../blog-card";
import { ToTop } from "./components/buttons";
import RecommendedPosts from "./components/recommended-posts";
import Table from "./components/table";
import TableForPC from "./components/table-for-pc";

import "./blog.scss";
import styles from "./thumbnail.module.scss";

export const dynamicParams = false;

export function generateStaticParams() {
    return enumerateParams();
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ round: string; index: string }>;
}): Promise<Metadata> {
    const { round, index } = await params;
    const data = blogData[`${round}/${index}`];
    return {
        title: `${data.title} | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025`,
        description: data.description,
        openGraph: {
            title: `${data.title} | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025`,
            description: data.description,
        },
    };
}

// ファイルをダウンロードするためのボタン
function DownloadButton({ url, filename, filesize }: { url: string; filename: string; filesize: string }) {
    return (
        <Link
            download
            href={url}
            className={`mx-auto mt-[20px] flex h-12.5 w-max max-w-19/20 items-center rounded-[12px] border-3 border-[#dedede] bg-[#fefefe]
                text-sm/normal text-pri-black transition-[box-shadow] duration-200 hover:[box-shadow:_#0b0e0f20_0px_0px_5px] b:h-15
                b:max-w-4/5 b:text-lg/normal`}
        >
            <DownloadIcon className={"ml-[20px] size-5 shrink-0 b:ml-[30px] b:size-7.5"} />
            <p className={"ml-[10px] grow truncate b:ml-[20px]"}>{filename}</p>
            <p className={"mx-[20px] w-max shrink-0 b:mx-[30px]"}>{filesize}</p>
        </Link>
    );
}

export default async function Page({ params }: { params: Promise<{ round: string; index: string }> }) {
    const { round, index } = await params;
    const { title, date, author, topic, thumbnail, toc, description, content } = await getBlog(
        round,
        index,
        DownloadButton,
        BlogCard,
    );
    // 前のページ・後ろのページへのリンクはここから取得してください
    const paths = enumerateParams().toSorted();
    const currentIndex = paths.findIndex((p) => p.round === round && p.index === index);
    const prevPath = currentIndex > 0 ? paths[currentIndex - 1] : paths[paths.length - 1];
    const nextPath = currentIndex < paths.length - 1 ? paths[currentIndex + 1] : paths[0];
    const prevLink = `/blog/${prevPath.round}/${prevPath.index}`;
    const nextLink = `/blog/${nextPath.round}/${nextPath.index}`;
    return (
        <>
            <ToTop />
            <div className="relative h-[min(50svh,71svw)] w-full overflow-hidden">
                <Image
                    src={thumbnail}
                    alt=""
                    aria-hidden
                    quality={5}
                    width={120}
                    className={`${styles.back} absolute inset-0 m-auto w-full transform-[scale(1.05)] filter-[blur(40px)_brightness(1.2)_sepia(0.1)]`}
                />
                <ViewTransition name={`blog-thumbnail-${round}-${index}`}>
                    <Image
                        src={thumbnail}
                        alt="thumbnail"
                        quality={70}
                        width={1440}
                        className={`${styles.thumbnail} absolute inset-0 m-auto h-full overflow-hidden object-cover object-center`}
                    />
                </ViewTransition>
            </div>
            <h1
                className={`mx-auto mt-[25px] max-w-[90svw] border-b-2 border-pri-black text-start text-[1.75rem]/normal font-medium text-pri-red
                    b:mt-[30px] b:px-[100px] b:text-center b:text-[2.5rem]`}
            >
                {title}
            </h1>
            <article>
                <div
                    className={`mt-[20px] mr-auto ml-auto flex w-[90dvw] text-right text-sm/normal text-pri-black b:float-right b:mt-[80px]
                        b:mr-[9.7dvw] b:block b:w-[20dvw] b:min-w-[255px] b:text-xl/normal`}
                >
                    <p className={"text-pri-red max-b:text-start"}>＃{topic}</p>
                    <div className="max-b:ml-auto">
                        <time dateTime={date.replaceAll(".", "-")}>{date}</time>
                        <p>{author}</p>
                    </div>
                </div>
                <aside
                    className={`sticky top-[64px] float-right clear-right mr-[calc(8dvw-3px)] max-h-[calc(100dvh-64px)] w-[20dvw] min-w-[255px]
                        overflow-y-auto leading-[1.5] text-pri-black max-b:hidden`}
                >
                    <div className={"mt-[40px] mr-[3px] mb-[10px]"}>
                        <TableForPC toc={toc} />
                        <nav>
                            <div className={"mt-[30px] flex w-full items-center justify-between"}>
                                <Link
                                    href={prevLink}
                                    className={"flex items-center text-left text-[18px] hover:opacity-80"}
                                >
                                    <div className="text-pri-red select-none">＜&nbsp;</div>
                                    <div>前の記事へ</div>
                                </Link>
                                <Link
                                    href={nextLink}
                                    className={"flex items-center text-right text-[18px] hover:opacity-80"}
                                >
                                    <div>次の記事へ</div>
                                    <div className="text-pri-red select-none">&nbsp;＞</div>
                                </Link>
                            </div>
                            <div className="mt-[12px] flex justify-center">
                                <Link href="/blog">
                                    <div
                                        className={
                                            "m-1.5 flex w-max items-center gap-[8px] text-pri-black hover:opacity-80"
                                        }
                                    >
                                        <Grid className="size-[24px]" />
                                        記事一覧へ
                                    </div>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </aside>
                <div
                    className={
                        "mt-[40px] mr-auto ml-auto w-[90dvw] b:mt-[80px] b:ml-[8dvw] b:w-[56dvw] b:max-w-[calc(84dvw-275px)]"
                    }
                >
                    <div>{description}</div>
                    <hr className={"mx-5 mt-10 border-t-2 border-pri-red max-b:hidden"} />
                    <div className={"mx-auto mt-[35px] w-19/20 b:hidden"}>
                        <Table toc={toc} />
                    </div>
                    <div>{content}</div>
                </div>
            </article>
            <nav className={"mx-auto my-[40px] w-[90dvw] b:mt-[60px] b:mb-[50px] b:w-[max(750px,56dvw)]"}>
                <div className={"mx-auto w-max transition-opacity hover:opacity-80 b:hidden"}>
                    <Link
                        href="/blog"
                        className={"flex items-center justify-center gap-3 text-[18px] font-medium text-pri-black"}
                    >
                        <Grid className="size-[28px]" />
                        記事一覧へ
                    </Link>
                </div>
                <RecommendedPosts currentPath={{ round, index }} allPaths={paths} />
            </nav>
        </>
    );
}
