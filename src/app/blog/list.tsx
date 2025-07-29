"use client";
import type { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import BlogCard from "./blog-card";

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
    const [displaying, setDisplaying] = useState("");
    useEffect(() => {
        const saved = sessionStorage.getItem("blog-display");
        if (saved !== null && ["59", "60", "61"].includes(saved)) {
            setDisplaying(saved);
        } else {
            setDisplaying("61");
            sessionStorage.setItem("blog-display", "61");
        }
    }, []);
    const blogsRef = useRef(blogs);
    const [shuffledBlogs, setShuffledBlogs] = useState<typeof blogs>([]);
    useEffect(() => {
        const tmp = [...blogsRef.current];
        for (let i = 0; i < tmp.length; i++) {
            const idx = Math.floor(Math.random() * (tmp.length - i)) + i;
            [tmp[i], tmp[idx]] = [tmp[idx], tmp[i]];
        }
        setShuffledBlogs(tmp);
    }, [blogsRef]);
    const filteredBlogs = shuffledBlogs.filter((blog) => blog.round === displaying);
    const setBlogDisplayState = (round: string) => {
        setDisplaying(round);
        sessionStorage.setItem("blog-display", round);
    };
    return (
        <>
            <div className="mb-[38px] flex w-full justify-center select-none">
                <div className="relative h-[34px] w-[min(max(72svw,250px),320px)] md:h-[45px] md:w-[400px]">
                    <div className="absolute inset-0 bg-[#0b0e0f] [clip-path:polygon(6%_0,100%_0,94%_100%,0_100%)]"></div>
                    <div
                        className="absolute inset-0
                            [clip-path:polygon(0%_2px,100%_2px,100%_calc(100%-2px),0_calc(100%-2px))]"
                    >
                        <div
                            className="h-full w-full bg-white
                                [clip-path:polygon(calc(6%+2px)_0,calc(100%-2px)_0,calc(94%-2px)_100%,2px_100%)]"
                        ></div>
                    </div>
                    <div
                        className="absolute inset-0 flex items-center justify-center overflow-hidden text-center
                            text-[22px] tracking-[-2%] text-[#de0d22] md:text-[32px]"
                    >
                        <p
                            className="h-min w-[29%] transform-[opacity] cursor-pointer duration-300 hover:opacity-70
                                md:transform-[translateY(-2px)]"
                            onClick={() => setBlogDisplayState("61")}
                        >
                            61<span className="text-[16px] md:text-[24px]">st</span>
                        </p>
                        <p
                            className="h-min w-[29%] transform-[opacity] cursor-pointer duration-300 hover:opacity-70
                                md:transform-[translateY(-2px)]"
                            onClick={() => setBlogDisplayState("60")}
                        >
                            60<span className="text-[16px] md:text-[24px]">th</span>
                        </p>
                        <p
                            className="h-min w-[29%] transform-[opacity] cursor-pointer duration-300 hover:opacity-70
                                md:transform-[translateY(-2px)]"
                            onClick={() => setBlogDisplayState("59")}
                        >
                            59<span className="text-[16px] md:text-[24px]">th</span>
                        </p>
                    </div>
                    <div
                        className="pointer-events-none absolute inset-0
                            [clip-path:polygon(0%_5px,100%_5px,100%_calc(100%-5px),0_calc(100%-5px))]"
                    >
                        <div
                            className="h-full w-full transition-[clip-path] duration-200 ease-in-out"
                            style={{
                                clipPath:
                                    displaying == "61"
                                        ? "polygon(calc(6% + 5px) 0,calc(42% - 5px) 0,calc(36% - 5px) 100%,5px 100%)"
                                        : displaying == "60"
                                          ? "polygon(calc(35% + 5px) 0,calc(71% - 5px) 0,calc(65% - 5px) 100%,calc(29% + 5px) 100%)"
                                          : displaying == "59"
                                            ? "polygon(calc(64% + 5px) 0,calc(100% - 5px) 0,calc(94% - 5px) 100%,calc(58% + 5px) 100%)"
                                            : "polygon(0 0, 0 0)",
                            }}
                        >
                            <div
                                className="flex h-full w-full items-center justify-center overflow-hidden bg-[#de0d22]
                                    text-center text-[22px] tracking-[-2%] text-white md:text-[32px]"
                            >
                                <p className="h-min w-[29%] md:transform-[translateY(-2px)]">
                                    61<span className="text-[16px] md:text-[24px]">st</span>
                                </p>
                                <p className="h-min w-[29%] md:transform-[translateY(-2px)]">
                                    60<span className="text-[16px] md:text-[24px]">th</span>
                                </p>
                                <p className="h-min w-[29%] md:transform-[translateY(-2px)]">
                                    59<span className="text-[16px] md:text-[24px]">th</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={"mx-auto mb-[18px] flex max-w-[calc(100svw-40px)] flex-wrap justify-around md:max-w-[82svw]"}
            >
                {filteredBlogs.map((blog) => {
                    return (
                        <div key={`${blog.round}/${blog.index}`} className={"mb-8 min-[500px]:mx-[12px] md:mb-12"}>
                            <BlogCard round={blog.round} index={blog.index} showPast={false} />
                        </div>
                    );
                })}
                {Array.from({ length: 12 }).map((_, i) => {
                    return <span key={`empty-${i}`} className={"w-[280px] min-[500px]:mx-[12px]"}></span>;
                })}
            </div>
        </>
    );
}
