"use client";
import { useState, useRef, useEffect } from "react";
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
    // 初期値をblogsから動的に取得（最初に出てきたroundを使う）
    // const [selectedRound, setSelectedRound] = useState(blogs[0]?.round || "");

    const [selectedRound, setSelectedRound] = useState("61");
    const [indicatorX, setIndicatorX] = useState(0);
    // const [indicatorWidth, setIndicatorWidth] = useState(0);

    const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;
    const now = Date.now();

    // ラウンド一覧を一意に抽出（例：["61", "60", "59"]）
    const roundList = Array.from(new Set(blogs.map((b) => b.round)))
        .sort()
        .reverse();

    // 各h2のrefを格納
    const labelRefs = useRef<Record<string, HTMLHeadingElement | null>>({});

    useEffect(() => {
        const el = labelRefs.current[selectedRound];
        if (el) {
            const rect = el.getBoundingClientRect();
            const parentRect = el.parentElement!.getBoundingClientRect();
            setIndicatorX(rect.left - parentRect.left + rect.width - 260); // 中央に合わせてマーカー140pxを調整
        }
    }, [selectedRound]);

    const filteredBlogs = blogs.filter((b) => b.round === selectedRound);

    return (
        <>
            <div>
                <h1 className={styles.title1}>B</h1>
                <h1 className={styles.title2}>log</h1>

                <div className={styles.f226}>
                    {/* 背景枠（白） */}
                    <div className={styles.rec80} />

                    {/* スライドマーカー（赤） */}
                    <div
                        className={styles.rec81}
                        style={{
                            transform: `translateX(${indicatorX}px) skewX(-26deg)`,
                        }}
                    />

                    {/* ラウンド選択ラベル */}
                    {roundList.map((round) => (
                        <h2
                            key={round}
                            ref={(el) => {
                                labelRefs.current[round] = el;
                            }}
                            onClick={() => setSelectedRound(round)}
                            className={selectedRound === round ? styles.selectedRound : styles.unselectedRound}
                        >
                            {round}th
                        </h2>
                    ))}
                </div>

                <div className={styles.blogmap}>
                    {filteredBlogs.map((blog) => {
                        const postedTime = new Date(blog.date).getTime();
                        const isNew = now - postedTime < ONE_WEEK_MS;

                        return (
                            <Link key={`${blog.round}/${blog.index}`} href={`/2025/blog/${blog.round}/${blog.index}`}>
                                <div className={styles.content}>
                                    {isNew && (
                                        <div className={styles.new}>
                                            <h2>NEW!</h2>
                                        </div>
                                    )}
                                    <Image src={blog.thumbnail} alt="thumbnail" />
                                    <p className={styles.date}>{blog.date}</p>
                                    <div className={styles.f497}>
                                        <p className={styles.topic}>#{blog.topic}</p>
                                    </div>
                                    <h1>{blog.title}</h1>
                                    <p className={styles.author}>{blog.author}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
