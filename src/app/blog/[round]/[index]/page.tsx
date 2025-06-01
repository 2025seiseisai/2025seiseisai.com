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
            <Image src={thumbnail} alt="thumbnail" className="h-[30dvh] object-cover object-center" />
            <h1 className="text-[#de0d22] underline decoration-[#0b0e0f] underline-offset-2">{title}</h1>
            <section className="mr-[8dvw] text-right text-[#0b0e0f]">
                <p className="text-[#de0d22]">＃{topic}</p>
                <time dateTime={date.replaceAll(".", "-")} className="text-[#0b0e0f]">
                    {date}
                </time>
                <p className="text-[#0b0e0f]">{author}</p>
            </section>
            <article>
                <section className="sticky right-[8dvw] ml-auto w-[22dvw] text-[#0b0e0f]">
                    <ul className="rounded-[20px] border-2 border-[#de0d22]">
                        目次
                        {toc.map((item) => (
                            <li key={item.id} className="w-full truncate">
                                <a href={`#${item.id}`}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex-between flex w-full">
                        <Link href={prevLink} className="block">
                            <span className="text-[#de0d22]">＜</span> 前の記事へ
                        </Link>
                        <Link href={nextLink} className="block">
                            次の記事へ<span className="text-[#de0d22]"> ＞</span>
                        </Link>
                    </div>
                </section>
                <div className="mx-[8dvw] w-[56dvw]">
                    <div>{description}</div>
                    <hr className="mx-20 my-40 border-2 border-[#de0d22]" />
                    <div>{content}</div>
                </div>
            </article>
            <nav className="mx-[8dvw] w-[56dvw]">
                <Link href="/2025/blog" id="tolist" className="justify-center items-center flex gap-5 text-xl text-[#0b0e0f]">
                    <Grid />
                    記事一覧へ
                </Link>
                {/* <p className="first-letter:text-[#de0d22]">＞ こちらの記事もおすすめ</p> */}
                {/* ---前に作ったのが残ってたので--- */}
                <RecommendedPosts currentPath={`${round}/${index}`} />
                {/* --------------------- */}
            </nav>
        </>
    );
}
