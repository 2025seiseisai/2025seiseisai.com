"use client";
import { useEffect, useRef, useState } from "react";
import BlogCardClient from "./blog-card-client";

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

    const [recommendedPaths, setRecommendedPaths] = useState<{ round: string; index: string }[]>([]);

    useEffect(() => {
        const paths = pathsRef.current;
        const selectedPaths: Set<{ round: string; index: string }> = new Set();
        const selectionCount = Math.min(count, paths.length);
        while (selectedPaths.size < selectionCount) {
            const randomIndex = Math.floor(Math.random() * paths.length);
            const selectedPath = paths[randomIndex];
            selectedPaths.add(selectedPath);
        }
        setRecommendedPaths(Array.from(selectedPaths));
    }, [pathsRef]);

    return (
        <>
            {recommendedPaths.length > 1 && (
                <div className="my-[40px] text-[#0e0b0f]">
                    <p className="ml-[5dvw] text-xl/normal font-medium first-letter:text-pri-red b:ml-[-10px]">
                        ＞ こちらの記事もおすすめ
                    </p>
                    <div className="mt-[30px] flex justify-center gap-4 md:justify-between max-b:md:justify-evenly">
                        <div>
                            <BlogCardClient round={recommendedPaths[0].round} index={recommendedPaths[0].index} />
                        </div>
                        <div className="max-[820px]:hidden">
                            <BlogCardClient round={recommendedPaths[1].round} index={recommendedPaths[1].index} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
