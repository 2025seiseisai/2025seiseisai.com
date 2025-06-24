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
    const filteredBlogs = blogs.filter((blog) => blog.round === "61");
    return (
        <>
            <div className={"mr-auto ml-auto flex max-w-[90svw] flex-wrap justify-around gap-8"}>
                {filteredBlogs.map((blog) => {
                    return (
                        <div key={`${blog.round}/${blog.index}`} className={"mb-0 md:mb-4"}>
                            <BlogCard round={blog.round} index={blog.index} />
                        </div>
                    );
                })}
                {Array.from({ length: 6 - (filteredBlogs.length % 6) }).map((_, i) => {
                    return <span key={`empty-${i}`} className={"w-[280px] not-md:hidden"}></span>;
                })}
            </div>
        </>
    );
}
