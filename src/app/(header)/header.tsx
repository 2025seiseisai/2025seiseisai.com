"use client";
import Theme from "@/assets/theme.svg";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
const Hamburger = dynamic(() => import("./hamburger"), { ssr: false });

export function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header className="sticky top-0 z-12000 h-[45px] w-full md:h-[64px]">
            <div className="flex h-full items-center bg-white shadow-[0_0_3px_#0b0e0f77]">
                <Link href="/" className="z-100000002 mr-auto ml-[40px] block aspect-[411.258/148.991] h-[18px]">
                    <Theme className="h-full brightness-0 filter transition-all hover:brightness-100" />
                </Link>
                <div className="mr-[30px] ml-auto flex gap-[30px] text-[12px] not-md:hidden">
                    {/*<Link
                        href="/"
                        className="transition-all duration-300 text-shadow-[0_0_25px_#de0d2200] hover:text-shadow-[0_0_22px_#de0d22]"
                    >
                        Top
                    </Link>
                    <Link
                        href="/news"
                        className="transition-all duration-300 text-shadow-[0_0_25px_#de0d2200] hover:text-shadow-[0_0_22px_#de0d22]"
                    >
                        News
                    </Link>
                    <Link
                        href="/contact"
                        className="transition-all duration-300 text-shadow-[0_0_25px_#de0d2200] hover:text-shadow-[0_0_22px_#de0d22]"
                    >
                        Contact
                    </Link>*/}
                </div>
                <Hamburger open={open} setOpen={setOpen} />
            </div>
            <div
                className={`absolute top-0 z-100000001 h-[100svh] w-full overflow-hidden ${open ? "" : "pointer-events-none"}`}
            >
                <div
                    className={`absolute h-full w-[250svw] bg-[#0b0e0fa0] [clip-path:polygon(0_0,42%_0,38%_100%,0_100%)] ${!open ? "translate-x-0 opacity-0 ease-in" : "translate-x-[-75svw] ease-out"} transition-[transform opacity] duration-500`}
                    onClick={() => setOpen(false)}
                ></div>
                <div
                    className={`h-full w-[250svw] bg-[#ffffff40] backdrop-sepia [backdrop-filter:blur(20px)] [clip-path:polygon(42%_0,100%_0,100%_100%,38%_100%)] ${!open ? "translate-x-0 ease-in" : "translate-x-[-75svw] ease-out"} transition-transform duration-500`}
                ></div>
            </div>
        </header>
    );
}
