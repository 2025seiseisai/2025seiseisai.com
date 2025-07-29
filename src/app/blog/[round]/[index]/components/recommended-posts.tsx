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
                <section className="my-[40px] flex w-full flex-col items-center">
                    <h2
                        className={`w-full pl-[min(20%,50svw-160px)] text-xl/normal font-medium text-pri-black
                        first-letter:text-pri-red md:w-[620px] md:pl-0`}
                    >
                        ＞ こちらの記事もおすすめ
                    </h2>
                    <div className={"mt-[30px] flex justify-center gap-[60px]"}>
                        <div>
                            <BlogCardClient round={recommendedPaths[0].round} index={recommendedPaths[0].index} />
                        </div>
                        <div className="not-md:hidden">
                            <BlogCardClient round={recommendedPaths[1].round} index={recommendedPaths[1].index} />
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
