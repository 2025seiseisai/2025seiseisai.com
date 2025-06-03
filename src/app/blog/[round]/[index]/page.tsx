import { blogData } from "@/blogs/blog-data";
import { enumetateParams, getBlog } from "@/impl/blog";
import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import { ToList, ToTop } from "./components/buttons";
import Grid from "./components/grid.svg";
import RecommendedPosts from "./components/recommended-posts";

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
        <Link download href={url} className={styles.download_button}>
            <p>{filename}</p>
            <p>{filesize}</p>
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
            <h1 className="mx-auto line-clamp-2 w-max max-w-[90svw] px-[100px] text-[2.5rem] font-medium text-[#de0d22] underline decoration-[#0b0e0f] decoration-2 underline-offset-3">
                {title}
            </h1>
            <section className="float-right mt-[80px] mr-[9.7dvw] ml-auto flex w-[22dvh] flex-col items-end text-right text-[#0b0e0f]">
                <p className="text-[#de0d22]">＃{topic}</p>
                <time dateTime={date.replaceAll(".", "-")} className="">
                    {date}
                </time>
                <p className="">{author}</p>
            </section>
            <article>
                <section className={styles.side}>
                    <ul className="rounded-[20px] border-3 border-[#dedede] p-[25px]">
                        <div className="text-[1.375rem]/normal font-medium">目次</div>
                        {toc.map((item) => (
                            <li key={item.id} className="mx-[5px] w-full list-disc truncate text-base/normal">
                                <a href={`#${item.id}`}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-[45px] flex w-full justify-between">
                        <Link href={prevLink} className="block w-max text-left text-xl">
                            <span className="text-[#de0d22]">＜</span> 前の記事へ
                        </Link>
                        <Link href={nextLink} className="block w-max text-right text-xl">
                            次の記事へ<span className="text-[#de0d22]"> ＞</span>
                        </Link>
                    </div>
                </section>
                <section className={styles.blog_container}>
                    <div>{description}</div>
                    <hr className="mx-5 mt-10 border-t-2 border-[#de0d22]" />
                    <div>{content}</div>
                </section>
            </article>
            <nav className="mx-auto w-[56dvw]">
                <Link
                    href="/2025/blog"
                    id="tolist"
                    className="flex items-center justify-center gap-5 text-xl text-[#0b0e0f]"
                >
                    <Grid />
                    記事一覧へ
                </Link>
                {/* <p className="first-letter:text-[#de0d22]">＞ こちらの記事もおすすめ</p> */}
                {/* ---前に遊んだのが残ってたので--- */}
                <RecommendedPosts currentPath={`${round}/${index}`} />
                {/* ------------------------------ */}
            </nav>
        </>
    );
}
