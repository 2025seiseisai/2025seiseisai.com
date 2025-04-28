import ThemeLogo from "@/assets/theme-logo.svg";
import Link from "next/link";
import InstagramIcon from "./Instagram-icon.svg";
import XIcon from "./X-icon.svg";
import YouTubeIcon from "./YouTube-icon.svg";

export function Footer() {
    return (
        <footer className="mt-auto">
            <div className="h-[137px] bg-[#f7f7f7]">
                <ThemeLogo className="ml-[calc(19000svw/1440)] h-[85px] pt-[33px]" />
                <p className="mt-[12px] ml-[calc(19000svw/1440)] text-[13px] font-light">
                    © 2025 61st seiseisai “FUNBYO”, Created by PR part
                </p>
            </div>
            <div className="flex h-[300px] font-light">
                <span className="ml-[calc(19000svw/1440)] w-[calc(27500svw/1440)] lg:w-[calc(22500svw/1440)]">
                    <h1 className="mt-[27px] w-full border-b-2 text-[32px]">Overview</h1>
                    <Link href="/">
                        <p className="mt-[20px] w-full pl-[23px] text-[16px]">Top</p>
                    </Link>
                    <Link href="/theme-logo">
                        <p className="mt-[20px] w-full pl-[23px] text-[16px]">Theme & Logo</p>
                    </Link>
                    <Link href="/news">
                        <p className="mt-[20px] w-full pl-[23px] text-[16px]">News</p>
                    </Link>
                    <Link href="/access">
                        <p className="mt-[20px] w-full pl-[23px] text-[16px]">Access</p>
                    </Link>
                </span>
                <span className="ml-[calc(8600svw/1440)] w-[calc(27500svw/1440)] lg:w-[calc(22500svw/1440)]">
                    <h1 className="mt-[27px] w-full border-b-2 text-[32px]">Guide</h1>
                    <Link href="/event">
                        <p className="mt-[20px] w-full pl-[23px] text-[16px]">Event</p>
                    </Link>
                    <Link href="/map?type=exhibition">
                        <p className="mt-[20px] w-full pl-[23px] text-[16px]">Map / Exhibition</p>
                    </Link>
                    <Link href="/map?type=bazaar">
                        <p className="mt-[20px] w-full pl-[23px] text-[16px]">Map / Bazaar</p>
                    </Link>
                    <Link href="/goods">
                        <p className="mt-[20px] w-full pl-[23px] text-[16px]">Goods</p>
                    </Link>
                </span>
                <span className="ml-[calc(8600svw/1440)] w-[calc(27500svw/1440)] lg:w-[calc(22500svw/1440)]">
                    <h1 className="mt-[27px] w-full border-b-2 text-[32px]">Contents</h1>
                    <Link href="/blog">
                        <p className="mt-[20px] w-full pl-[23px] text-[16px]">Blog</p>
                    </Link>
                    <Link href="/gallery">
                        <p className="mt-[20px] w-full pl-[23px] text-[16px]">Gallery</p>
                    </Link>
                    <Link href="/special">
                        <p className="mt-[20px] w-full pl-[23px] text-[16px]">Special</p>
                    </Link>
                    <Link href="/archives">
                        <p className="mt-[20px] w-full pl-[23px] text-[16px]">Archives</p>
                    </Link>
                </span>
                <span className="mt-auto mr-[calc(7900svw/1440)] mb-[30px] ml-auto flex flex-col gap-[8px] lg:flex-row">
                    <Link href="https://x.com/seiseisai_tdj" rel="noopener noreferrer" target="_blank">
                        <XIcon />
                    </Link>
                    <Link href="https://www.youtube.com/@seiseisai_tdj" rel="noopener noreferrer" target="_blank">
                        <YouTubeIcon />
                    </Link>
                    <Link href="https://www.instagram.com/seiseisai_tdj/" rel="noopener noreferrer" target="_blank">
                        <InstagramIcon />
                    </Link>
                </span>
            </div>
        </footer>
    );
}
