import { blogData } from "@/blogs/blog-data";
import { enumetateParams, getBlog } from "@/impl/blog";
import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import DownloadIcon from "./components/download-icon.svg";
import Grid from "./components/grid.svg";

import { ToList, ToTop } from "./components/buttons";
import RecommendedPosts from "./components/recommended-posts";
import Table from "./components/table";

import "./blog.scss";
import styles from "./page.module.scss";

export const dynamicParams = false;

export function generateStaticParams() {
    return enumetateParams();
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
            className="mx-auto mt-[20px] flex h-15 w-max max-w-4/5 items-center rounded-[12px] border-3 border-[#dedede] bg-[#fefefe] text-lg/normal text-[#0b0e0f]"
        >
            <DownloadIcon className="ml-[30px] h-7.5 w-7.5 shrink-0" />
            <p className="ml-[20px] grow truncate">{filename}</p>
            <p className="flex-end mx-[30px] w-max shrink-0">{filesize}</p>
        </Link>
    );
}

export default async function Page({ params }: { params: Promise<{ round: string; index: string }> }) {
    const { round, index } = await params;
    const { title, date, author, topic, thumbnail, toc, description, content } = await getBlog(
        round,
        index,
        DownloadButton,
    );
    // 前のページ・後ろのページへのリンクはここから取得してください
    const paths = enumetateParams().toSorted();
    const currentIndex = paths.findIndex((p) => p.round === round && p.index === index);
    const prevPath = currentIndex > 0 ? paths[currentIndex - 1] : paths[paths.length - 1];
    const nextPath = currentIndex < paths.length - 1 ? paths[currentIndex + 1] : paths[0];
    const prevLink = `/2025/blog/${prevPath.round}/${prevPath.index}`;
    const nextLink = `/2025/blog/${nextPath.round}/${nextPath.index}`;
    return (
        <>
            <ToList />
            <ToTop />
            <Image src={thumbnail} alt="thumbnail" className="h-[30svh] w-[100dvw] object-cover object-center" />
            <h1 className="mx-auto mt-[30px] max-w-[90svw] border-b-2 border-[#0b0e0f] px-[100px] text-center text-[2.5rem]/normal font-medium text-[#de0d22]">
                {title}
            </h1>
            <article>
                <div className="float-right mt-[80px] mr-[9.7dvw] ml-auto w-[max(255px,20dvw)] text-right text-[#0b0e0f]">
                    <p className="text-[#de0d22]">＃{topic}</p>
                    <time dateTime={date.replaceAll(".", "-")}>{date}</time>
                    <p>{author}</p>
                </div>
                <div className={styles.side}>
                    <Table toc={toc} />
                    <div className="mt-[45px] flex w-full items-center justify-between">
                        <Link href={prevLink} className="flex items-center text-left text-[20px] hover:opacity-80">
                            <div className="text-[#de0d22]">＜&nbsp;</div>
                            <div>前の記事へ</div>
                        </Link>
                        <Link href={nextLink} className="flex items-center text-right text-[20px] hover:opacity-80">
                            <div>次の記事へ</div>
                            <div className="text-[#de0d22]">&nbsp;＞</div>
                        </Link>
                    </div>
                </div>
                <div className={styles.blog_container}>
                    <div>{description}</div>
                    <hr className="mx-5 mt-10 border-t-2 border-[#de0d22]" />
                    <div>{content}</div>
                </div>
            </article>
            <nav className="mx-auto mt-[60px] mb-[50px] w-[56dvw]">
                <div
                    id="tolist"
                    className="flex items-center justify-center text-xl/normal font-medium text-[#0b0e0f] transition-opacity hover:opacity-80"
                >
                    <Link href="/2025/blog" className="flex items-center justify-center gap-5">
                        <Grid />
                        記事一覧へ
                    </Link>
                </div>
                {/* <p className="first-letter:text-[#de0d22] ml-[-10ox]">
                        ＞ こちらの記事もおすすめ
                    </p>
                 */}
                {/* ---前に遊んだのが残ってたので--- */}
                <RecommendedPosts currentPath={{ round, index }} allPaths={paths} />
                {/* --------後で置き換えか--------- */}
            </nav>
        </>
    );
}
