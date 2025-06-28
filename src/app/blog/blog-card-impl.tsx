"use client";
import type { BlogMetadata } from "@/impl/blog";
import spinnerStyles from "./spinner.module.scss";

import { Link } from "next-view-transitions";
import Image from "next/image";
import { useRef } from "react";

export default function BlogCardImpl({
    round,
    index,
    showPast,
    blog,
}: {
    round: string;
    index: string;
    showPast: boolean;
    blog?: BlogMetadata;
}) {
    const imgRef = useRef<HTMLImageElement>(null);
    return (
        <Link
            href={`/2025/blog/${round}/${index}`}
            prefetch={false}
            className={`relative flex h-[280px] w-[280px] flex-col items-center justify-between overflow-hidden rounded-[10px] border-2
                border-pri-red bg-[#f7f7f7] leading-normal font-normal transition duration-500 ease-out hover:scale-[101.5%]
                hover:bg-[#ffffff] hover:drop-shadow-[0px_3px_10px_rgba(0,0,0,0.1)]`}
            onClick={() => {
                if (imgRef.current) {
                    imgRef.current.style.viewTransitionName = `blog-thumbnail-${round}-${index}`;
                }
            }}
        >
            {!blog && (
                <div className={"absolute flex h-full w-full items-center justify-center"}>
                    <div className={spinnerStyles.spinner}></div>
                </div>
            )}
            {blog && (
                <>
                    <Image
                        src={blog.thumbnail}
                        ref={imgRef}
                        alt="thumbnail"
                        quality={40}
                        width={276}
                        className={"h-[145px] w-full object-cover"}
                    />
                    <section className={"flex h-full w-5/6 flex-col items-center justify-center gap-[3px]"}>
                        {round !== "61" && blog && showPast && (
                            <div
                                className={`absolute top-[8px] right-[8px] flex aspect-square size-max items-center justify-center rounded-full border-1
                                border-solid border-pri-red bg-[#ffffff]/80 p-1 text-[14px]/[1.5] text-pri-red`}
                            >
                                過去
                            </div>
                        )}
                        <div className={"flex w-full items-center justify-between"}>
                            <p className="w-max text-[15px] text-pri-red">{blog.date}</p>
                            <p
                                title={blog.topic}
                                className={
                                    "max-w-[140px] truncate rounded-[5px] bg-pri-red px-[6px] text-[13.5px] text-[#ffffff]"
                                }
                            >
                                ＃{blog.topic}
                            </p>
                        </div>
                        <h1
                            title={blog.title}
                            className={"line-clamp-2 h-[54px] w-full text-[18px] font-medium break-all text-pri-black"}
                        >
                            {blog.title}
                        </h1>
                        <p title={blog.author} className={"w-full truncate text-end text-[14px] text-pri-black"}>
                            {blog.author}
                        </p>
                    </section>
                </>
            )}
        </Link>
    );
}
