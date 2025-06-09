"use client";
import { useEffect, useRef, useState } from "react";
import BlogCard from "./blog-card";

export default function RecommendedPosts({
    currentPath,
    allPaths,
}: {
    currentPath: { round: string; index: string };
    allPaths: { round: string; index: string }[];
}) {
    const count = 2;

    const pathsRef = useRef(
        (() => {
            const currentPathsList = allPaths.filter(
                (p) =>
                    (p.round !== currentPath.round || p.index !== currentPath.index) &&
                    (currentPath.round === "61" ? p.round === "61" : p.round !== "61"),
            );
            return currentPathsList.length >= count ? currentPathsList : allPaths;
        })(),
    );

    const [recommendedPaths, setRecommendedPaths] = useState<string[]>([]);

    useEffect(() => {
        const paths = pathsRef.current;
        const selectedPaths: Set<string> = new Set();
        const selectionCount = Math.min(count, paths.length);
        while (selectedPaths.size < selectionCount) {
            const randomIndex = Math.floor(Math.random() * paths.length);
            const selectedPath = paths[randomIndex];
            selectedPaths.add(`${selectedPath.round}/${selectedPath.index}`);
        }
        setRecommendedPaths(Array.from(selectedPaths));
    }, [pathsRef]);

    return (
        <div className="my-[40px] text-[#0e0b0f]">
            <p className="ml-[5dvw] text-xl/normal font-medium first-letter:text-pri-red b:ml-[-10px]">
                ＞ こちらの記事もおすすめ
            </p>
            <div className="mt-[30px] flex justify-between gap-4">
                {recommendedPaths.map((path) => (
                    <BlogCard key={path} path={path} />
                ))}
                {/* <BlogCard path={recommendedPaths[0]} />
                <div className="max-b:hidden">
                    <BlogCard path={recommendedPaths[1] ?? recommendedPaths[0]} />
                </div> */}
            </div>
        </div>
    );
}
