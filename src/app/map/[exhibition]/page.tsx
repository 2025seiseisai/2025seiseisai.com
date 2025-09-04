import BlogCardClient from "@/app/blog/[round]/[index]/components/blog-card-client";
import crypto from "crypto";
import Link from "next/link";
import { notFound } from "next/navigation";
import { exhibitionData } from "../(exhibition)/exhibition-data";

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
            {/* 名称 */}
            {name}
            {/* 展示教室 */}
            {data.location}
            {/* アイコン */}
            <div className="" dangerouslySetInnerHTML={{ __html: data.icon }} />
            {/* 説明 */}
            {data.description}
            {/* twitterのリンク (あれば) */}
            {data.twitter_link && (
                <Link href={data.twitter_link} target="_blank" rel="noopener noreferrer nofollow">
                    Twitterへのリンク
                </Link>
            )}
            {/* instagramのリンク (あれば) */}
            {data.instagram_link && (
                <Link href={data.instagram_link} target="_blank" rel="noopener noreferrer nofollow">
                    Instagramへのリンク
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
