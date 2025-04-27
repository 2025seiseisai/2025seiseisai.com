import ThemeLogo from "@/assets/theme-logo.svg";
import Link from "next/link";

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
                <span className="ml-[calc(19000svw/1440)] w-full">
                    <h1 className="mt-[27px] w-full border-b-2 text-[32px]">Overview</h1>
                    <ul>
                        <li>
                            <Link href="/">Top</Link>
                        </li>
                        <li>
                            <Link href="/theme-logo">Theme & Logo</Link>
                        </li>
                        <li>
                            <Link href="/news">News</Link>
                        </li>
                        <li>
                            <Link href="/access">Access</Link>
                        </li>
                    </ul>
                </span>
                <span className="ml-[calc(8600svw/1440)] w-full">
                    <h1 className="mt-[27px] w-full border-b-2 text-[32px]">Guide</h1>
                    <ul>
                        <li>
                            <Link href="/event">Event</Link>
                        </li>
                        <li>
                            <Link href="/map?type=exhibition">Map / Exhibition</Link>
                        </li>
                        <li>
                            <Link href="/map?type=bazaar">Map / Bazaar</Link>
                        </li>
                        <li>
                            <Link href="/goods">Goods</Link>
                        </li>
                    </ul>
                </span>
                <span className="ml-[calc(8600svw/1440)] w-full">
                    <h1 className="mt-[27px] w-full border-b-2 text-[32px]">Contents</h1>
                    <ul>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link href="/gallery">Gallery</Link>
                        </li>
                        <li>
                            <Link href="/special">Special</Link>
                        </li>
                        <li>
                            <Link href="/archives">Archives</Link>
                        </li>
                    </ul>
                </span>
            </div>
        </footer>
    );
}
