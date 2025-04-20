import { enumetateParams, getBlog, getThumbnail } from "@/blogs/blog-impl";
import Image from "next/image";
import styles from "./page.module.scss";

export function generateStaticParams() {
    return enumetateParams();
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
