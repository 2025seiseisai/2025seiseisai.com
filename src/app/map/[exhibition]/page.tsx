import BlogCardClient from "@/app/blog/[round]/[index]/components/blog-card-client";
import crypto from "crypto";
import Link from "next/link";
import { notFound } from "next/navigation";
import { exhibitionData } from "../(exhibition)/exhibition-data";
import styles from "./page.module.scss";
/*img */
import External from "./img/external-link.svg";
import Instagram from "./img/instagram.svg";
import Twitter from "./img/twitter_26px.svg";

export const dynamicParams = false;

export function generateStaticParams() {
    return Object.keys(exhibitionData).map((exhibition) => ({
        exhibition: crypto.createHash("sha256").update(exhibition).digest("hex").substring(0, 16),
    }));
}

export default async function Page({ params }: { params: Promise<{ exhibition: string }> }) {
    const id = (await params).exhibition;
    const name = Object.keys(exhibitionData).find(
        (exhibition) => crypto.createHash("sha256").update(exhibition).digest("hex").substring(0, 16) === id,
    );
    if (!name) notFound();
    const data = exhibitionData[name];
    return (
        <>
            <div className={styles.club_title_container}>
                {/* アイコン */}
                <div className={styles.icon} dangerouslySetInnerHTML={{ __html: data.icon }} />
                <div className={styles.club_title}>
                    {/* 展示教室 */}
                    <div className={styles.club_location}>{data.location}</div>
                    {/* 名称 */}
                    <div className={styles.club_name}>{name}</div>
                </div>
            </div>
            {/* 説明 */}
            <div className={styles.description}> {data.description}</div>
            <div className={styles.links}>
                {/* twitterのリンク (あれば) */}
                {data.twitter_link && (
                    <Link href={data.twitter_link} target="_blank" rel="noopener noreferrer nofollow">
                        <div className={styles.link}>
                            <Twitter className={styles.link_icon} />X (旧Twitter)
                            <External className={styles.link_external} />
                        </div>
                    </Link>
                )}
                {/* instagramのリンク (あれば) */}
                {data.instagram_link && (
                    <Link href={data.instagram_link} target="_blank" rel="noopener noreferrer nofollow">
                        <div className={styles.link}>
                            <Instagram className={styles.link_icon} />
                            Instagram
                            <External className={styles.link_external} />
                        </div>
                    </Link>
                )}
                {/* facebookのリンク (あれば) */}
                {data.facebook_link && (
                    <Link href={data.facebook_link} target="_blank" rel="noopener noreferrer nofollow">
                        Facebookへのリンク
                    </Link>
                )}
                {/* webサイトのリンク (あれば) */}
                {data.website_link && (
                    <Link href={data.website_link} target="_blank" rel="noopener noreferrer nofollow">
                        Webサイトへのリンク
                    </Link>
                )}
            </div>

            {/* イベント (複数ある場合もある) */}
            {data.events?.map((event) => (
                <div key={event}>イベントの名前：{event}</div>
            ))}
            {/* 部誌 */}
            {data.club_magazine && (
                <div>
                    部誌：<Link href={data.club_magazine}>リンク</Link>
                </div>
            )}
            {/* ブログのカード (複数ある場合もある) */}
            {data.blogs?.map((blog) => {
                const [round, index] = blog.split("/");
                return <BlogCardClient key={blog} round={round} index={index} showPast={false} />;
            })}
        </>
    );
}
