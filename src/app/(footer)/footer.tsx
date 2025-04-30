import ThemeLogo from "@/assets/theme-logo.svg";
import Link from "next/link";
import InstagramIcon from "./Instagram-icon.svg";
import XIcon from "./X-icon.svg";
import YouTubeIcon from "./YouTube-icon.svg";

export function Footer() {
    const footerLink =
        "mt-[20px] w-full pl-[23px] text-[16px] transition-all duration-300 hover:pl-[25px] hover:text-[#de0d22]";
    const disabledLink = "mt-[20px] w-full pl-[23px] text-[16px] text-[#b0b0b0]";
    return (
        <footer className="mt-auto">
            <div className="flex h-[137px] bg-[#f7f7f7] font-light">
                <span className="mr-[2px]">
                    <ThemeLogo className="ml-[calc(19000svw/1440)] h-[85px] pt-[33px]" />
                    <p className="mt-[12px] ml-[calc(19000svw/1440)] w-[321px] text-[13px]">
                        © 2025 61st seiseisai “FUNBYO”, Created by PR part
                    </p>
                </span>
                <span className="text-[13px]">
                    <Link href="/contact">
                        <p className="mt-[72px] transition-all duration-300 hover:pl-[2px] hover:text-[#de0d22]">
                            {">>お問い合わせ"}
                        </p>
                    </Link>
                    <Link href="/privacy-policy">
                        <p className="mt-[7px] transition-all duration-300 hover:pl-[2px] hover:text-[#de0d22]">
                            {">>プライバシーポリシー"}
                        </p>
                    </Link>
                </span>
            </div>
            <div className="flex h-[300px] font-light">
                <span className="ml-[calc(19000svw/1440)] w-[calc(27500svw/1440)] lg:w-[calc(22500svw/1440)]">
                    <h1 className="mt-[27px] w-full border-b-2 text-[32px]">Overview</h1>
                    <Link href="/">
                        <p className={footerLink}>Top</p>
                    </Link>
                    <p className={disabledLink}>Theme & Logo</p>
                    <Link href="/news">
                        <p className={footerLink}>News</p>
                    </Link>
                    <p className={disabledLink}>Access</p>
                </span>
                <span className="ml-[calc(8600svw/1440)] w-[calc(27500svw/1440)] lg:w-[calc(22500svw/1440)]">
                    <h1 className="mt-[27px] w-full border-b-2 text-[32px]">Guide</h1>
                    <p className={disabledLink}>Event</p>
                    <p className={disabledLink}>Exhibition</p>
                    <p className={disabledLink}>Bazaar</p>
                    <p className={disabledLink}>Goods</p>
                </span>
                <span className="ml-[calc(8600svw/1440)] w-[calc(27500svw/1440)] lg:w-[calc(22500svw/1440)]">
                    <h1 className="mt-[27px] w-full border-b-2 text-[32px]">Contents</h1>
                    <Link href="/blog">
                        <p className={footerLink}>Blog</p>
                    </Link>
                    <p className={disabledLink}>Gallery</p>
                    <p className={disabledLink}>Special</p>
                    <p className={disabledLink}>Archives</p>
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
