import { blogData } from "@/blogs/blog-data";
import { enumetateParams, getBlog } from "@/blogs/blog-impl";
import Image from "next/image";
import styles from "./page.module.scss";

export const dynamicParams = false;

export function generateStaticParams() {
    return enumetateParams();
}

export async function generateMetadata({ params }: { params: Promise<{ round: string; index: string }> }) {
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

export default async function Page({ params }: { params: Promise<{ round: string; index: string }> }) {
    const { round, index } = await params;
    const { title, date, author, topic, thumbnail, toc, description, content } = await getBlog(round, index);
    return (
        <>
            {/* こんな感じで メタデータ or 記事 を埋め込める */}
            <Image src={thumbnail} alt="thumbnail" />
            <h1>{title}</h1>
            <h2>{date}</h2>
            <h3>{author}</h3>
            <h4>{topic}</h4>
            <article>
                <div className={styles.blog_content}>{description}</div>
                <ul>
                    目次
                    {toc.map((item) => (
                        <li key={item.id}>
                            <a href={`#${item.id}`}>{item.name}</a>
                        </li>
                    ))}
                </ul>
                <div className={styles.blog_content}>{content}</div>
            </article>
        </>
    );
}
