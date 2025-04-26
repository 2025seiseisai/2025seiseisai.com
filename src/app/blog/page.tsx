import { getAllBlogs, getThumbnail } from "@/blogs/blog-impl";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

export default async function Page() {
    return (
        <>
            {/* ここに書く */}
            <p className={styles.example}>ブログ一覧</p>
            {/* 実装の一例 */}
            {/* await getAllBlogs()でブログの情報を全て取得できる */}
            {(await getAllBlogs()).map((blog) => (
                <div key={`${blog.round}/${blog.index}`}>
                    {/* サムネイルはgetThumnailをImageのsrcに渡すことで表示できる */}
                    <Image src={getThumbnail(blog.round, blog.index)} alt="thumbnail" sizes="50svw" />
                    <h2>{blog.title}</h2>
                    <p>{blog.date}</p>
                    <p>{blog.author}</p>
                    <p>{blog.topic}</p>
                    {/* リンクはLinkを使う */}
                    <Link href={`/blog/${blog.round}/${blog.index}`}>Read more</Link>
                </div>
            ))}
        </>
    );
}
