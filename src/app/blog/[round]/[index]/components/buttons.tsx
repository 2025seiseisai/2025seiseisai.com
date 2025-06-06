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

    const className =
        "fixed right-[80px] bottom-[50px] z-1 size-[clamp(30px,7svw,60px)] cursor-pointer rounded-full bg-[#de0d22] transition duration-1000 ease-in-out hover:brightness-120";

    return (
        <div
            className={`${className} ${hidden && "pointer-events-none opacity-0"}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            <ArrowUp className="size-full" />
        </div>
    );
}
