"use client";
import { blogData } from "@/blogs/blog-data";
import { useEffect, useState } from "react";
import BlogCard from "./blog-card";

export default function RecommendedPosts({ currentPath }: { currentPath: string }) {
    const [recommendedPaths, setRecommendedPaths] = useState<string[]>([]);
    const count = 2;
    const is61st = currentPath.startsWith("61/");
    const allPaths = Object.keys(blogData).filter((p) => p !== currentPath);
    const latestPaths = allPaths.filter((p) => p.startsWith("61/"));
    const paths = is61st && latestPaths.length >= count ? latestPaths : allPaths;

    useEffect(() => {
        const selectedPaths: Set<string> = new Set();
        const selectionCount = Math.min(count, paths.length);
        while (selectedPaths.size < selectionCount) {
            const randomIndex = Math.floor(Math.random() * paths.length);
            selectedPaths.add(paths[randomIndex]);
        }
        setRecommendedPaths(Array.from(selectedPaths));
    }, []);

    return (
        <div className="my-[40px]">
            <p className="ml-[-10px] text-xl/normal font-medium first-letter:text-[#de0d22]">
                ＞ こちらの記事もおすすめ
            </p>
            <div className="mt-[30px] flex justify-between gap-4">
                {recommendedPaths.map((path) => (
                    <BlogCard key={path} path={path} />
                ))}
            </div>
        </div>
    );
}
