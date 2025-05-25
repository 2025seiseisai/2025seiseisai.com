import { getAllBlogs } from "@/impl/blog";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

export const metadata = {
    title: "Blog | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

export default async function Page() {
    return (
        <>
            {/* ここに書く */}
            <p className={styles.example}>ブログ一覧</p>
            {/* 実装の一例 */}
            {/* getAllBlogs()でブログの情報を全て取得できる */}
            {getAllBlogs().map((blog) => {
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
