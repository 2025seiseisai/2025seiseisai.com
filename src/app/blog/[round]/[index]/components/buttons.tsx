"use client";

import { useEffect, useState } from "react";
import ArrowUp from "./arrow-up.svg";

export function ToTop() {
    const [screenY, setScreenY] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScreenY(window.scrollY);
        };
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };
        handleScroll();
        handleResize();
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const className =
        "fixed right-[120px] bottom-[50px] z-1 size-[clamp(30px,5svw,60px)] cursor-pointer rounded-full bg-[#de0d22] transition duration-1000 ease-in-out hover:brightness-120";

    return (
        <div
            className={`${className} ${screenY < windowHeight && "pointer-events-none opacity-0"}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            <ArrowUp className="size-full" />
        </div>
    );
}
