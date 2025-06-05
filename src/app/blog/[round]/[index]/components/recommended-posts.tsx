"use client";
import { useEffect, useMemo, useState } from "react";
import BlogCard from "./blog-card";

export default function RecommendedPosts({
    currentPath,
    allPaths,
}: {
    currentPath: { round: string; index: string };
    allPaths: { round: string; index: string }[];
}) {
    const count = 2;

    const paths = useMemo(() => {
        const currentPathsList = allPaths.filter(
            (p) => (p.round !== currentPath.round || p.index !== currentPath.index) && currentPath.round === p.round,
        );
        return currentPathsList.length >= count ? currentPathsList : allPaths;
    }, [allPaths, currentPath]);

    const [recommendedPaths, setRecommendedPaths] = useState<string[]>([]);

    useEffect(() => {
        const selectedPaths: Set<string> = new Set();
        const selectionCount = Math.min(count, paths.length);
        while (selectedPaths.size < selectionCount) {
            const randomIndex = Math.floor(Math.random() * paths.length);
            const selectedPath = paths[randomIndex];
            selectedPaths.add(`${selectedPath.round}/${selectedPath.index}`);
        }
        setRecommendedPaths(Array.from(selectedPaths));
    }, [paths]);

    return (
        <div className="my-[40px] text-[#0e0b0f]">
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
