import { enumetateParams, getBlog, getThumbnail } from "@/blogs/blog-impl";
import { blogData } from "@/blogs/blog-info";
import Image from "next/image";
import styles from "./page.module.scss";

export const dynamicParams = false;

export function generateStaticParams() {
    return enumetateParams();
}

export async function generateMetadata({ params }: { params: Promise<{ round: string; index: string }> }) {
    const { round, index } = await params;
    const { title } = await getBlog(round, index, styles.image_with_caption, styles.table_of_contents);
    const description = blogData[`${round}/${index}`].description.replaceAll("\n", " ");
    return {
        title: `${title} | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025`,
        description: description,
        openGraph: {
            title: `${title} | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025`,
            description: description,
        },
    };
}

export default async function Page({ params }: { params: Promise<{ round: string; index: string }> }) {
    const { round, index } = await params;
    const { title, date, author, content } = await getBlog(
        round,
        index,
        styles.image_with_caption,
        styles.table_of_contents,
    );

    return (
        <>
            {/* こんな感じで メタデータ or 記事 を埋め込める */}
            <h1>{title}</h1>
            <h2>{date}</h2>
            <h3>{author}</h3>
            <Image src={getThumbnail(round, index)} alt="thumbnail" />
            <article className={styles.blog_content}>{content}</article>
        </>
    );
}
