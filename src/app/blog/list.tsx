"use client";
import type { StaticImageData } from "next/image";
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
    return (
        <>
            <div className={"mr-auto ml-auto flex max-w-[90svw] flex-wrap justify-around gap-8"}>
                {blogs.map((blog) => {
                    return (
                        <div
                            key={`${blog.round}/${blog.index}`}
                            className={
                                "mb-0 h-68 w-70 max-w-[calc(100svw_-_40px_-_10dvw)] not-md:h-85 not-md:w-87.5 md:mb-4"
                            }
                        >
                            <div className={"md:[transform-origin:top_left] md:transform-[scale(0.8)]"}>
                                <BlogCard round={blog.round} index={blog.index} />
                            </div>
                        </div>
                    );
                })}
                {Array.from({ length: 6 - (blogs.length % 6) }).map((_, i) => {
                    return (
                        <span
                            key={`empty-${i}`}
                            className={
                                "w-70 max-w-[calc((100svw_-_40px_-_10dvw)_*_0.8)] not-md:hidden not-md:w-87.5 not-md:max-w-[calc(100svw_-_40px_-_10dvw)]"
                            }
                        ></span>
                    );
                })}
            </div>
        </>
    );
}
