"use client";

import { useEffect, useState } from "react";

export default function Table({ toc }: { toc: { name: string; id: string }[] }) {
    const [activeTitleId, setActiveTitleId] = useState("");

    useEffect(() => {
        let windowHeight = window.innerHeight;
        const handleScroll = () => {
            const idPositions: { id: string; position: number }[] = [];
            toc.forEach((item) => {
                const title = document.getElementById(item.id);
                idPositions.push({
                    id: item.id,
                    position: title ? title.getBoundingClientRect().top : 0,
                });
            });
            let activeItem = idPositions.find((item) => item.position < windowHeight / 2 && item.position > 60);
            if (!activeItem) {
                activeItem = idPositions.findLast((item) => item.position < windowHeight / 2);
            }
            setActiveTitleId(activeItem ? activeItem.id : "");
        };
        const handleResize = () => {
            windowHeight = window.innerHeight;
        };
        handleResize();
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [toc]);

    return (
        <div className="rounded-[20px] border-3 border-[#dedede] p-[25px] text-[#0b0e0f]">
            <div className="text-[1.375rem]/normal font-medium">目次</div>
            <ul>
                {toc.map((item) => (
                    <a href={`#${item.id}`} key={item.id}>
                        <li
                            className={`mx-[5px] flex w-full truncate text-base transition-all duration-300 before:content-['・'] hover:opacity-75 ${item.id === activeTitleId && "bg-[#de0d2221]"}`}
                        >
                            {item.name}
                        </li>
                    </a>
                ))}
            </ul>
        </div>
    );
}
