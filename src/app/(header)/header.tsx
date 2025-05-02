"use client";
import Theme from "@/assets/theme.svg";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
const Hamburger = dynamic(() => import("./hamburger"), { ssr: false });

export function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header className="sticky top-0 z-8000 flex h-[64px] items-center bg-white text-[12px] shadow-[0_0_3px_#0b0e0f77]">
            <Link href="/" className="mr-auto ml-[40px] block aspect-[411.258/148.991] h-38/134">
                <Theme className="h-full brightness-0 filter transition-all hover:brightness-100" />
            </Link>
            {/*
            <Link
                href="/"
                className="mr-3 ml-3 transition-all duration-300 text-shadow-[0_0_25px_#de0d2200] hover:text-shadow-[0_0_22px_#de0d22]"
            >
                Top
            </Link>
            <Link
                href="/theme-logo"
                className="mr-3 ml-3 transition-all duration-300 text-shadow-[0_0_25px_#de0d2200] hover:text-shadow-[0_0_22px_#de0d22]"
            >
                Theme & Logo
            </Link>*
            <Link
                href="/news"
                className="mr-3 ml-3 transition-all duration-300 text-shadow-[0_0_25px_#de0d2200] hover:text-shadow-[0_0_22px_#de0d22]"
            >
                News
            </Link>
            <Link
                href="/access"
                className="mr-3 ml-3 transition-all duration-300 text-shadow-[0_0_25px_#de0d2200] hover:text-shadow-[0_0_22px_#de0d22]"
            >
                Access
            </Link>*/}
            <Hamburger open={open} setOpen={setOpen} />
        </header>
    );
}
