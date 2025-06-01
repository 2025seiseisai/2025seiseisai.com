import { blogData } from "@/blogs/blog-data";
import { enumetateParams, getBlog } from "@/impl/blog";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
            {/* こんな感じで メタデータ or 記事 を埋め込める */}
            <Image src={thumbnail} alt="thumbnail" />
            <h1>{title}</h1>
            <h2>{date}</h2>
            <h3>{author}</h3>
            <h4>{topic}</h4>
            <p>{prevLink}</p>
            <p>{nextLink}</p>
            <article>
                <div>{description}</div>
                <ul>
                    目次
                    {toc.map((item) => (
                        <li key={item.id}>
                            <a href={`#${item.id}`}>{item.name}</a>
                        </li>
                    ))}
                </ul>
                <div>{content}</div>
            </article>
        </>
    );
}
