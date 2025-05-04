"use client";
import Theme from "@/assets/theme.svg";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
const Hamburger = dynamic(() => import("./hamburger"), { ssr: false });

export function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header className="sticky top-0 z-8000 flex h-[45px] items-center bg-white shadow-[0_0_3px_#0b0e0f77] md:h-[64px]">
            <Link href="/" className="mr-auto ml-[40px] block aspect-[411.258/148.991] h-[18px]">
                <Theme className="h-full brightness-0 filter transition-all hover:brightness-100" />
            </Link>
            <div className="mr-[30px] ml-auto flex gap-[30px] text-[12px] not-md:hidden">
                <Link
                    href="/"
                    className="transition-all duration-300 text-shadow-[0_0_25px_#de0d2200] hover:text-shadow-[0_0_22px_#de0d22]"
                >
                    Top
                </Link>
                <Link
                    href="/theme-logo"
                    className="transition-all duration-300 text-shadow-[0_0_25px_#de0d2200] hover:text-shadow-[0_0_22px_#de0d22]"
                >
                    Theme & Logo
                </Link>
                <Link
                    href="/news"
                    className="transition-all duration-300 text-shadow-[0_0_25px_#de0d2200] hover:text-shadow-[0_0_22px_#de0d22]"
                >
                    News
                </Link>
                <Link
                    href="/access"
                    className="transition-all duration-300 text-shadow-[0_0_25px_#de0d2200] hover:text-shadow-[0_0_22px_#de0d22]"
                >
                    Access
                </Link>
            </div>
            <Hamburger open={open} setOpen={setOpen} />
        </header>
    );
}
