"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Theme from "../(assets)/theme.svg";
import { overlapEvent } from "./overlap-event";

const Hamburger = dynamic(() => import("./hamburger"), { ssr: false });

function HeaderLink({
    href,
    title1,
    title2,
    setOpen,
}: {
    href: string;
    title1: string;
    title2: string;
    setOpen: (open: boolean) => void;
}) {
    return (
        <Link
            href={href}
            className="flex w-[35svw] items-center justify-between text-[#0b0e0f] transition-all duration-300  hover:text-[#de0d22]"
            onClick={() => setOpen(false)}
        >
            <span className="text-[24px] font-semibold text-[#de0d22]">{title1}</span>
            <span className="text-[12px] text-[#0b0e0f]">{title2}</span>
        </Link>
    );
}

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

    const pathname = usePathname();

    useEffect(() => {
        setIsOverlapping(false);
        overlapEvent.setFunc(setIsOverlapping);
    }, [pathname]);

    return (
        <header className="sticky top-0 z-12000 h-[45px] w-full md:h-[64px]">
            <div
                className={`transition-margin flex h-full items-center bg-white shadow-[-3px_0_3px_#0b0e0f77] duration-400 ${isOverlapping && !open ? "mt-[-75px]" : ""}`}
            >
                <Link href="/2025" className="mr-auto ml-[40px] block aspect-[411.258/148.991] h-[18px]">
                    <Theme className="h-full w-auto brightness-0 filter transition-all hover:brightness-100" />
                </Link>
                <div className="mr-[30px] ml-auto flex gap-[30px] text-[12px] font-normal not-md:hidden">
                    <Link
                        href="/2025"
                        className="transition-all duration-300 text-shadow-[0_0_25px_#de0d2200] hover:text-shadow-[0_0_22px_#de0d22]"
                    >
                        Top
                    </Link>
                    <Link
                        href="/2025/news"
                        className="transition-all duration-300 text-shadow-[0_0_25px_#de0d2200] hover:text-shadow-[0_0_22px_#de0d22]"
                    >
                        News
                    </Link>
                    <Link
                        href="/2025/contact"
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
                    className={`absolute h-full w-full bg-[#ffffff90] backdrop-sepia [backdrop-filter:blur(40px)] ${!open ? "ease-in [clip-path:polygon(150%_0,100%_0,100%_100%,150%_100%)]" : "ease-out [clip-path:polygon(30%_0,100%_0,100%_100%,20%_100%)]"} transition-[clip-path] duration-500`}
                >
                    <div className="h-full w-full pt-[80px] pl-[35%]">
                        <HeaderLink
                            href="/2025"
                            title1="Top"
                            title2="菁々祭公式Webサイトのトップページ"
                            setOpen={setOpenImpl}
                        />
                        <HeaderLink
                            href="/2025/news"
                            title1="News"
                            title2="菁々祭に関する最新のお知らせ"
                            setOpen={setOpenImpl}
                        />
                        <HeaderLink
                            href="/2025/theme-logo"
                            title1="Theme & Logo"
                            title2="今年のテーマとロゴのご紹介"
                            setOpen={setOpenImpl}
                        />
                        <HeaderLink
                            href="/2025/access"
                            title1="Access"
                            title2="東大寺学園へのアクセス方法"
                            setOpen={setOpenImpl}
                        />
                        <HeaderLink
                            href="/2025/events"
                            title1="Events"
                            title2="イベント内容やタイムテーブル"
                            setOpen={setOpenImpl}
                        />
                        <HeaderLink
                            href="/2025/map"
                            title1="Map"
                            title2="校内の展示・バザーの地図"
                            setOpen={setOpenImpl}
                        />
                        <HeaderLink
                            href="/2025/goods"
                            title1="Goods"
                            title2="菁々祭オリジナルグッズ一覧"
                            setOpen={setOpenImpl}
                        />
                        <HeaderLink
                            href="/2025/tickets"
                            title1="Tickets"
                            title2="Web整理券の取得・申込ページ"
                            setOpen={setOpenImpl}
                        />
                        <HeaderLink
                            href="/2025/blog"
                            title1="Blog"
                            title2="PRパート員による菁々祭紹介"
                            setOpen={setOpenImpl}
                        />
                        <HeaderLink
                            href="/2025/special"
                            title1="Special"
                            title2="壁紙やアイコンなど特別コンテンツ"
                            setOpen={setOpenImpl}
                        />
                        <HeaderLink
                            href="/2025/downloads"
                            title1="Downloads"
                            title2="部誌などのダウンロードページ"
                            setOpen={setOpenImpl}
                        />
                        <HeaderLink
                            href="/2025/gallery"
                            title1="Gallery"
                            title2="菁々祭デザインのギャラリー"
                            setOpen={setOpenImpl}
                        />
                    </div>
                </div>
                <div
                    className={`absolute h-full w-full bg-[#0b0e0fa0] ${!open ? "opacity-0 ease-in [clip-path:polygon(0_0,150%_0,150%_100%,0_100%)]" : "ease-out [clip-path:polygon(0_0,30%_0,20%_100%,0_100%)]"} transition-[clip-path opacity] duration-500`}
                    onClick={() => setOpenImpl(false)}
                ></div>
            </div>
        </header>
    );
}
