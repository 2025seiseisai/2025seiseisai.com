// 遷移場所

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Table({ toc }: { toc: { name: string; id: string }[] }) {
    const [activeTitleId, setActiveTitleId] = useState("");
    useEffect(() => {
        const handleScroll = () => {
            const idPositions: { id: string; position: number }[] = [];
            toc.forEach((item) => {
                const title = document.getElementById(item.id);
                idPositions.push({
                    id: item.id,
                    position: title ? title.getBoundingClientRect().top : 0,
                });
            });
            const activeItem = idPositions.findLast((item) => item.position < window.innerHeight / 2);
            setActiveTitleId(activeItem ? activeItem.id : "");
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [toc]);

    return (
        <div className="rounded-[20px] border-3 border-[#dedede] p-[25px]">
            <div className="text-[1.375rem]/normal font-medium">目次</div>
            <ul>
                {toc.map((item) => (
                    <li
                        key={item.id}
                        className={`mx-[5px] w-full truncate text-base transition-colors duration-300 before:content-['・'] ${item.id === activeTitleId && "bg-[#de0d2221]"}`}
                    >
                        <Link href={`#${item.id}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
