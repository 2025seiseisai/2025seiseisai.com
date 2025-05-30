"use client";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import styles from "./list.module.scss";

export default function BlogList({
    blogs,
}: {
    blogs: {
        round: string;
        index: string;
        thumbnail: StaticImageData;
        title: string;
        date: string;
        author: string;
        topic: string;
    }[];
}) {
    return (
        <>
            {/* ここに書く */}
            <p className={styles.example}>ブログ一覧</p>
            {/* 実装の一例 */}
            {/* getAllBlogs()でブログの情報を全て取得できる */}
            {blogs.map((blog) => {
                // blog.roundで第何回の菁々祭のブログか判別できる
                return (
                    <div key={`${blog.round}/${blog.index}`}>
                        {/* サムネイルはgetThumnailをImageのsrcに渡すことで表示できる */}
                        <Image src={blog.thumbnail} alt="thumbnail" />
                        <h1>{blog.title}</h1>
                        <p>{blog.date}</p>
                        <p>{blog.author}</p>
                        <p>{blog.topic}</p>
                        {/* リンクはLinkを使う */}
                        <Link href={`/2025/blog/${blog.round}/${blog.index}`}>Read more</Link>
                    </div>
                );
            })}
        </>
    );
}
