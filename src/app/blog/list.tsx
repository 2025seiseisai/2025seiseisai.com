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
            {
            
            <div>
            <h1 className={styles.title1}>B</h1>
            <h1 className={styles.title2}>log</h1>
            <div className={styles.f226}>
                <div className={styles.rec80}></div>
                <div className={styles.rec81}></div>
                <h2 className={styles.f60th}>60th</h2>
                <h2 className={styles.f59th}>59th</h2>
                <h2 className={styles.f61st}>61st</h2>
            </div>
            {/* <p className={styles.example}>ブログ一覧</p> */}
            {/* 実装の一例 */}
            {/* getAllBlogs()でブログの情報を全て取得できる */}
            <div className={styles.blogmap}>
            {blogs.map((blog) => {
                // blog.roundで第何回の菁々祭のブログか判別できる
                return (
                    <Link href={`/2025/blog/${blog.round}/${blog.index}`}>        
                    <div key={`${blog.round}/${blog.index}`} className={styles.content}>
                        {/* サムネイルはgetThumnailをImageのsrcに渡すことで表示できる */}
                        <div className={styles.new}><h2>NEW!</h2></div>
                        <Image src={blog.thumbnail} alt="thumbnail" />
                        <p className={styles.date}>{blog.date}</p>
                        <div className={styles.f497}><p className={styles.topic}>#{blog.topic}</p></div>
                        <h1>{blog.title}</h1>
                        <p className={styles.author}>{blog.author}</p>
                        {/* リンクはLinkを使う */}
                    </div>
                    </Link>
                );
            })}
            </div>
            </div>
            }
        </>
    );
}
