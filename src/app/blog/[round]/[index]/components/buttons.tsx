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
        "group/top fixed right-[120px] bottom-[50px] size-[clamp(30px,5svw,60px)] rounded-full transition-opacity duration-1000 ease-in-out hover:opacity-80";

    return (
        <Link href="#top" className={`${className} ${screenY < windowHeight && "pointer-events-none opacity-0"}`}>
            <ArrowUp className="group-hover/top: size-full" />
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
        "fixed top-[50px] left-[75px] size-[clamp(30px,5svw,60px)] transition-opacity duration-1000 ease-in-out hover:opacity-80";

    return (
        <Link href="/2025/blog">
            <ArrowLeft className={`${className} ${!show && "pointer-events-none opacity-0"}`} />
        </Link>
    );
}
