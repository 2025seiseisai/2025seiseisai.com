import BlogCardClient from "@/app/blog/[round]/[index]/components/blog-card-client";
import crypto from "crypto";
import Link from "next/link";
import { notFound } from "next/navigation";
import { exhibitionData } from "../(exhibition)/exhibition-data";
import styles from "./page.module.scss";
/*img */
import React from "react";
import Arrow from "./img/arrow-right-circle.svg";
import External from "./img/external-link.svg";
import Instagram from "./img/instagram.svg";
import Pin from "./img/pin.svg";
import Facebook from "./img/to-facebook.svg";
import Website from "./img/to-web-site.svg";
import Twitter from "./img/twitter_26px.svg";

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
        <div className="flex items-center w-4/5 mx-auto gap-[10px]">
            <Pin className="w-[37px] md:w-[40px] aspect-2/1 shrink-0" />
            <div className="text-[18px] md:text-[20px] font-normal grow-1 text-start">{children}</div>
            <Link href={href}>
                <Arrow className="shrink-0 size-[29px] md:size-[32px]" />
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
                        Website
                    </LinkItem>
                )}
            </div>
            <div className="md:flex md:gap-[30px]">
                {/* イベント (複数ある場合もある) */}
                {data.events && data.events.length > 0 && (
                    <section className={styles.event_wrapper}>
                        <h2 className={styles.event_title}>イベント開催情報</h2>
                        <div className="flex flex-col gap-[6px] mt-[12px]">
                            {data.events?.map((event) => (
                                <Item key={event} href="/">
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
                        <Item href={data.club_magazine}>aaa</Item>
                    </section>
                )}
            </div>
            {/* ブログのカード (複数ある場合もある) */}
            {data.blogs && data.blogs.length > 0 && (
                <section className="mt-[40px]">
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
