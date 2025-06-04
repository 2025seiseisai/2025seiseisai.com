"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ArrowLeft from "./arrow-left.svg";
import ArrowUp from "./arrow-up.svg";

export function ToTop() {
    const [screenY, setScreenY] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScreenY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        setWindowHeight(window.innerHeight);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const className =
        "fixed right-[120px] bottom-[50px] z-1 size-[clamp(30px,5svw,60px)] rounded-full bg-[#de0d22] transition duration-1000 ease-in-out hover:brightness-120";

    return (
        <Link href="#top" className={`${className} ${screenY < windowHeight && "pointer-events-none opacity-0"}`}>
            <ArrowUp className="size-full" />
        </Link>
    );
}

export function ToList() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const toList = document.getElementById("tolist");
            const rect = toList?.getBoundingClientRect();
            setShow(!rect || rect?.top > window.innerHeight);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const className =
        "fixed top-[95px] left-[75px] size-[clamp(30px,5svw,60px)] transition duration-1000 ease-in-out hover:brightness-120 md:top-[114px]";

    return (
        <Link href="/2025/blog">
            <ArrowLeft className={`${className} ${!show && "pointer-events-none opacity-0"}`} />
        </Link>
    );
}
