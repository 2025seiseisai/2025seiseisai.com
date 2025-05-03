import ThemeLogo from "@/assets/theme-logo.svg";
import Link from "next/link";
import InstagramIcon from "./Instagram-icon.svg";
import XIcon from "./X-icon.svg";
import YouTubeIcon from "./YouTube-icon.svg";

export function Footer() {
    const footerLink =
        "mt-[13px] md:mt-[20px] w-full pl-0 md:pl-[23px] text-[14px] md:text-[16px] transition-all duration-300 hover:pl-[25px] hover:text-[#de0d22]";
    const disabledLink = "mt-[13px] md:mt-[20px] w-full pl-0 md:pl-[23px] text-[14px] md:text-[16px] text-[#b0b0b0]";
    return (
        <footer className="mt-auto">
            <div className="flex h-[72px] bg-[#f7f7f7] font-light md:h-[137px]">
                <span className="mr-[2px]">
                    <ThemeLogo className="ml-[25px] h-[44px] pt-[13px] md:ml-[calc(19000svw/1440)] md:h-[85px] md:pt-[33px]" />
                    <p className="mt-[5px] ml-[25px] w-[220px] text-[9px] md:mt-[12px] md:ml-[calc(19000svw/1440)] md:w-[321px] md:text-[13px]">
                        © 2025 61st seiseisai “FUNBYO”, Created by PR part
                    </p>
                </span>
                <span className="text-[9px] md:text-[13px]">
                    <Link href="/contact">
                        <p className="mt-[32px] transition-all duration-300 hover:pl-[2px] hover:text-[#de0d22] md:mt-[72px]">
                            {">>お問い合わせ"}
                        </p>
                    </Link>
                    <Link href="/privacy-policy">
                        <p className="mt-[4px] transition-all duration-300 hover:pl-[2px] hover:text-[#de0d22] md:mt-[7px]">
                            {">>プライバシーポリシー"}
                        </p>
                    </Link>
                </span>
            </div>
            <div className="flex h-[300px] font-light">
                <span className="ml-[17px] w-[calc(9300svw/375)] md:ml-[calc(19000svw/1440)] md:w-[calc(27500svw/1440)] lg:w-[calc(22500svw/1440)]">
                    <h1 className="mt-[27px] w-full border-b-[1.3px] text-[16px] md:border-b-2 md:text-[32px]">
                        Overview
                    </h1>
                    <Link href="/">
                        <p className={footerLink}>Top</p>
                    </Link>
                    <p className={disabledLink}>Theme & Logo</p>
                    <Link href="/news">
                        <p className={footerLink}>News</p>
                    </Link>
                    <p className={disabledLink}>Access</p>
                </span>
                <span className="md:ml-[calc(8600svw/1440)] md:w-[calc(27500svw/1440)] lg:w-[calc(22500svw/1440)]">
                    <h1 className="mt-[27px] w-full border-b-[1.3px] text-[16px] md:border-b-2 md:text-[32px]">
                        Guide
                    </h1>
                    <p className={disabledLink}>Event</p>
                    <p className={disabledLink}>Exhibition</p>
                    <p className={disabledLink}>Bazaar</p>
                    <p className={disabledLink}>Goods</p>
                </span>
                <span className="ml-[calc(8600svw/1440)] w-[calc(27500svw/1440)] lg:w-[calc(22500svw/1440)]">
                    <h1 className="mt-[27px] w-full border-b-[1.3px] text-[16px] md:border-b-2 md:text-[32px]">
                        Contents
                    </h1>
                    <p className={disabledLink}>Blog</p>
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
