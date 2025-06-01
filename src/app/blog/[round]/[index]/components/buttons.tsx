"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ArrowLeft from "./arrow-left.svg";
import ArrowUp from "./arrow-up.svg";

export function ToTop() {
    const [screenY, setScreenY] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        setWindowHeight(window.innerHeight);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScreenY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const className =
        "group/top fixed right-[10px] bottom-[10px] size-[min(5svw,60px)] overflow-hidden rounded-full bg-[#de0d22] transition-opacity duration-1000 ease-in-out hover:opacity-80";

    return (
        <Link href="#top" className={`${className} ${screenY < windowHeight && "opacity-0"}`}>
            <div className="group-hover/top:animate-to-top group-focus/top:animate-to-top flex size-full flex-col items-center justify-center text-center">
                <ArrowUp className="size-[%]" />
                <p className="text-[#ffffff]">Top</p>
            </div>
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
        "fixed top-[75px] left-[50px] size-[min(5svw,60px)] overflow-hidden rounded-full bg-[#de0d22] transition-opacity duration-1000 ease-in-out hover:opacity-80";

    return (
        <Link href="/2025/blog" className={`${className} ${!show && "opacity-0"}`}>
            <ArrowLeft />
        </Link>
    );
}
