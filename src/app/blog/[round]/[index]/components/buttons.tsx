"use client";

import { useCallback, useEffect, useState } from "react";
import ArrowUp from "./arrow-up.svg";

export function ToTop() {
    const [hidden, setHidden] = useState(true);

    const handleScroll = useCallback(() => {
        const footer = document.getElementById("footer");
        const newValue =
            window.scrollY < window.innerHeight * 0.8 ||
            (footer ? footer.getBoundingClientRect().top < window.innerHeight * 1.2 : false);
        if (newValue !== hidden) setHidden(newValue);
    }, [hidden]);

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [handleScroll]);

    return (
        <div
            className={`fixed right-[10px] bottom-[10px] z-1 size-[clamp(30px,7svw,60px)] cursor-pointer rounded-full bg-pri-red transition not-b:hidden hover:brightness-120 b:right-[80px] b:bottom-[50px] ${hidden ? "pointer-events-none opacity-0" : ""}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            <ArrowUp className="size-full" />
        </div>
    );
}
//  max-b:hidden ??
