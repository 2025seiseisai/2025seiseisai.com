"use client";

import { useCallback, useEffect, useState } from "react";
import Table from "./table";

export default function TableForPC({ toc }: { toc: { name: string; id: string }[] }) {
    const [activeTitleId, setActiveTitleId] = useState("");

    const handleScroll = useCallback(() => {
        const titles: { id: string; position: number }[] = [];
        toc.forEach((item) => {
            const title = document.getElementById(item.id);
            titles.push({
                id: item.id,
                position: title ? title.getBoundingClientRect().top : Infinity,
            });
        });
        let activeItem = titles.find((item) => item.position < window.innerHeight / 2 && item.position > 60);
        if (!activeItem) {
            activeItem = titles.findLast((item) => item.position < window.innerHeight / 2);
        }
        setActiveTitleId(activeItem ? activeItem.id : "");
    }, [toc]);

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [handleScroll]);

    return <Table toc={toc} activeTitleId={activeTitleId} />;
}
