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

export function ToList() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        let windowHeight = window.innerHeight;
        const handleScroll = () => {
            const toList = document.getElementById("tolist");
            const rect = toList?.getBoundingClientRect();
            setShow(!rect || rect?.top > windowHeight);
        };
        const handleResize = () => {
            windowHeight = window.innerHeight;
        };
        handleScroll();
        handleResize();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
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
