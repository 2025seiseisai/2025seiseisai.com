"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import Theme from "./theme.svg";
const Hamburger = dynamic(() => import("./hamburger"), { ssr: false });

export function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header className="flex h-15 items-center bg-white text-[12px]">
            <Theme className="mr-auto h-35/134 pl-7" />
            <Link href="/" className="mr-3 ml-3">
                Top
            </Link>
            <Link href="/theme-logo" className="mr-3 ml-3">
                Theme & Logo
            </Link>
            <Link href="/news" className="mr-3 ml-3">
                News
            </Link>
            <Link href="/access" className="mr-3 ml-3">
                Access
            </Link>
            <Hamburger open={open} setOpen={setOpen} />
        </header>
    );
}
