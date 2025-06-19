"use client";

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
            let activeItem = idPositions.find((item) => item.position < window.innerHeight / 2 && item.position > 60);
            if (!activeItem) {
                activeItem = idPositions.findLast((item) => item.position < window.innerHeight / 2);
            }
            setActiveTitleId(activeItem ? activeItem.id : "");
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [toc]);

    return (
        <div className={"rounded-[20px] border-3 border-[#dedede] p-[20px] text-pri-black"}>
            <div className="mb-[5px] text-[19px]/normal font-medium">目次</div>
            <ul>
                {toc.map((item) => (
                    <a href={`#${item.id}`} key={item.id}>
                        <li
                            className={`mx-[5px] flex w-full text-[14px]/[1.7] transition-all duration-300 before:content-['・'] hover:opacity-75
                            b:text-[13px]/[1.7] ${item.id === activeTitleId && "b:bg-[#de0d2221]"}`}
                        >
                            <p className="w-full truncate">{item.name}</p>
                        </li>
                    </a>
                ))}
            </ul>
        </div>
    );
}
