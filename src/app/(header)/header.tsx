"use client";
import { DotLottie, DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";
import { useState } from "react";
import Theme from "./theme.svg";

export function Header() {
    const [open, setOpen] = useState(false);
    const [hamburger, setHamburger] = useState<DotLottie | null>(null);
    return (
        <header className="flex h-20 items-center bg-white">
            <Theme className="mr-auto h-35/134 pl-7" />
            <Link href="/2025" className="mr-5 ml-5">
                Top
            </Link>
            <Link href="/2025/theme-logo" className="mr-5 ml-5">
                Theme & Logo
            </Link>
            <Link href="/2025/news" className="mr-5 ml-5">
                News
            </Link>
            <Link href="/2025/access" className="mr-5 ml-5">
                Access
            </Link>
            <button
                className="mr-7 aspect-1/1 h-88/134 cursor-pointer"
                onClick={() => {
                    hamburger?.setMode(open ? "reverse" : "forward");
                    hamburger?.play();
                    setOpen(!open);
                }}
            >
                <div className="aspect-2/1">
                    <DotLottieReact
                        src="/2025/animations/hamburger.lottie"
                        dotLottieRefCallback={(ref) => setHamburger(ref)}
                    />
                </div>
            </button>
        </header>
    );
}
