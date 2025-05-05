"use client";
import Theme from "@/assets/theme.svg";
import { eventBus } from "@/impl/eventBus";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
const Hamburger = dynamic(() => import("./hamburger"), { ssr: false });

export function Header() {
    const [open, setOpen] = useState(false);
    const [isOverlapping, setIsOverlapping] = useState(true);

    const setOpenImpl = (open: boolean) => {
        setOpen(open);
        if (open) {
            const div = document.createElement("div");
            div.style.width = "100px";
            div.style.height = "100px";
            div.style.overflow = "scroll";
            div.style.position = "absolute";
            div.style.top = "-9999px";
            document.body.appendChild(div);
            const scrollbarWidth = div.offsetWidth - div.clientWidth;
            document.body.removeChild(div);
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollbarWidth}px`;
            document.body.style.backgroundColor = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "#2c2c2c"
                : "#fcfcfc";
        } else {
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = "0px";
            document.body.style.backgroundColor = "white";
        }
    };

    useEffect(() => {
        setIsOverlapping(false);
        eventBus.on("overlap", (flag: boolean) => setIsOverlapping(flag));
    }, []);

    return (
        <header className="sticky top-0 z-12000 h-[45px] w-full md:h-[64px]">
            <div
                className={`transition-margin flex h-full items-center bg-white shadow-[-3px_0_3px_#0b0e0f77] duration-400 ${isOverlapping && !open ? "mt-[-75px]" : ""}`}
            >
                <Link href="/" className="z-100000002 mr-auto ml-[40px] block aspect-[411.258/148.991] h-[18px]">
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
                    </Link>
                </div>
                <Hamburger open={open} setOpen={setOpenImpl} />
            </div>
            <div
                className={`absolute top-0 z-100000001 h-[100svh] w-full overflow-hidden ${open ? "" : "pointer-events-none"}`}
            >
                <div
                    className={`absolute h-full w-[300svw] bg-[#0b0e0fa0] [clip-path:polygon(0_0,42%_0,38%_100%,0_100%)] ${!open ? "translate-x-0 opacity-0 ease-in" : "translate-x-[-100svw] ease-out"} transition-[transform opacity] duration-500`}
                    onClick={() => setOpenImpl(false)}
                ></div>
                <div
                    className={`h-full w-[300svw] bg-[#ffffff90] backdrop-sepia [backdrop-filter:blur(40px)] [clip-path:polygon(42%_0,100%_0,100%_100%,38%_100%)] ${!open ? "translate-x-0 ease-in" : "translate-x-[-100svw] ease-out"} transition-transform duration-500`}
                ></div>
            </div>
        </header>
    );
}
