import BlogCardClient from "@/app/blog/[round]/[index]/components/blog-card-client";
import crypto from "crypto";
import Link from "next/link";
import { notFound } from "next/navigation";
import { exhibitionData, locations } from "../(exhibition)/exhibition-data";
import styles from "./page.module.scss";
/*img */
import React from "react";
import Arrow from "./img/arrow-right-circle.svg";
import External from "./img/external-link.svg";
import Instagram from "./img/instagram.svg";
import Pin from "./img/pin.svg";
import Ret from "./img/ret.svg";
import Facebook from "./img/to-facebook.svg";
import Website from "./img/to-web-site.svg";
import Twitter from "./img/twitter_26px.svg";

export const metadata = {
    title: "Map",
};

export const dynamicParams = false;

export function generateStaticParams() {
    return Object.keys(exhibitionData).map((exhibition) => ({
        exhibition: crypto.createHash("sha256").update(exhibition).digest("hex").substring(0, 16),
    }));
}

function LinkItem({ children, href }: { children: React.ReactNode; href: string }) {
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer nofollow">
            <div className={styles.link}>
                {children}
                <External className={styles.link_external} />
            </div>
        </Link>
    );
}

function Item({ children, href }: { children: string; href: string }) {
    return (
        <div className="w-full max-w-[350px] pl-[4%]">
            <Link href={href} className="flex w-full items-center gap-[10px]">
                <Pin className="aspect-2/1 w-[32px] shrink-0 md:w-[36px]" />
                <div className="grow-1 text-start text-[16px] font-normal md:text-[18px]">{children}</div>
                <Arrow className="size-[28px] shrink-0 md:size-[30px]" />
            </Link>
        </div>
    );
}

export default async function Page({ params }: { params: Promise<{ exhibition: string }> }) {
    const id = (await params).exhibition;
    const name = Object.keys(exhibitionData).find(
        (exhibition) => crypto.createHash("sha256").update(exhibition).digest("hex").substring(0, 16) === id,
    );
    if (!name) notFound();
    const data = exhibitionData[name];
    return (
        <div className={styles.container}>
            <div className={styles.club_header}>
                <div className={styles.club_title_container}>
                    {/* アイコン */}
                    <div className={styles.icon} dangerouslySetInnerHTML={{ __html: data.icon }} />
                    <div className={styles.club_title}>
                        {/* 展示教室 */}
                        <div className={styles.club_location}>
                            {locations[data.location] <= 4 ? "高校棟" : "中学棟"} {data.location}
                        </div>
                        {/* 名称 */}
                        <div className={styles.club_name}>{name}</div>
                    </div>
                </div>
                <Link href="/map" className={styles.ret_link}>
                    <Ret className={styles.ret_icon} />
                </Link>
            </div>
            {/* 説明 */}
            <div className={styles.description}> {data.description}</div>
            <div className={styles.links}>
                {/* twitterのリンク (あれば) */}
                {data.twitter_link && (
                    <LinkItem href={data.twitter_link}>
                        <Twitter className={styles.link_icon} />X (旧Twitter)
                    </LinkItem>
                )}
                {/* instagramのリンク (あれば) */}
                {data.instagram_link && (
                    <LinkItem href={data.instagram_link}>
                        <Instagram className={styles.link_icon} />
                        Instagram
                    </LinkItem>
                )}
                {/* facebookのリンク (あれば) */}
                {data.facebook_link && (
                    <LinkItem href={data.facebook_link}>
                        <Facebook className={styles.link_icon} />
                        Facebook
                    </LinkItem>
                )}
                {/* webサイトのリンク (あれば) */}
                {data.website_link && (
                    <LinkItem href={data.website_link}>
                        <Website className={styles.link_icon} />
                        Webサイト
                    </LinkItem>
                )}
            </div>
            <div className="md:flex md:gap-[30px]">
                {/* イベント (複数ある場合もある) */}
                {data.events && data.events.length > 0 && (
                    <section className={styles.event_wrapper}>
                        <h2 className={styles.event_title}>イベント開催情報</h2>
                        <div className="mt-[12px] flex flex-col gap-[6px]">
                            {data.events?.map((event) => (
                                <Item key={event} href={`/events#${encodeURIComponent(event)}`}>
                                    {event}
                                </Item>
                            ))}
                        </div>
                    </section>
                )}

                {/* 部誌 */}
                {data.club_magazine && (
                    <section className={styles.event_wrapper}>
                        <h2 className={styles.event_title}>部誌</h2>
                        <div className="mt-[12px]">
                            <Item href={data.club_magazine}>{`${name}の部誌を見る`}</Item>
                        </div>
                    </section>
                )}
            </div>
            {/* ブログのカード (複数ある場合もある) */}
            {data.blogs && data.blogs.length > 0 && (
                <section className="mt-[30px] md:mt-[40px]">
                    <h2 className={styles.event_title}>関連コンテンツ</h2>{" "}
                    <div className={styles.blog_card}>
                        {data.blogs?.map((blog) => {
                            const [round, index] = blog.split("/");
                            return <BlogCardClient key={blog} round={round} index={index} showPast={false} />;
                        })}
                    </div>
                </section>
            )}
        </div>
    );
}
