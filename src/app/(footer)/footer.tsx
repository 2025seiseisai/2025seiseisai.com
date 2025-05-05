import ThemeLogo from "@/assets/theme-logo.svg";
import Link from "next/link";
import InstagramIcon from "./Instagram-icon.svg";
import XIcon from "./X-icon.svg";
import YouTubeIcon from "./YouTube-icon.svg";

export function Footer() {
    const footerLink =
        "mt-[7px] inline-block md:mt-[13px] md:mt-[20px] w-full pl-0 md:pl-[23px] text-[13px] md:text-[16px] transition-[color padding] duration-300 md:hover:pl-[25px] md:hover:text-[#de0d22]";
    const disabledLink =
        "mt-[7px] inline-block md:mt-[13px] md:mt-[20px] w-full pl-0 md:pl-[23px] text-[13px] md:text-[16px] text-[#b0b0b0]";
    return (
        <footer className="mt-auto bg-white">
            <div className="flex w-full flex-wrap bg-[#f7f7f7] font-light not-md:pb-[12px] md:h-[137px]">
                <span className="mr-[2px]">
                    <ThemeLogo className="ml-[25px] h-[44px] pt-[13px] md:ml-[calc(19000svw/1440)] md:h-[85px] md:pt-[33px]" />
                    <p className="mt-[5px] ml-[25px] w-[220px] text-[9px] md:mt-[12px] md:ml-[calc(19000svw/1440)] md:w-[321px] md:text-[13px]">
                        © 2025 61st seiseisai “FUNBYO”, Created by PR part
                    </p>
                </span>
                <span className="text-[9px] max-[360px]:mt-[4px] max-[360px]:ml-[25px] max-[360px]:flex max-[360px]:w-[95svw] md:text-[13px]">
                    <Link href="/contact">
                        <p className="transition-[color padding] mt-[32px] duration-300 max-[360px]:mt-0 max-[360px]:mr-[12px] md:mt-[72px] md:hover:pl-[2px] md:hover:text-[#de0d22]">
                            {">>お問い合わせ"}
                        </p>
                    </Link>
                    <Link href="/privacy-policy">
                        <p className="transition-[color padding] mt-[4px] duration-300 max-[360px]:mt-0 md:mt-[7px] md:hover:pl-[2px] md:hover:text-[#de0d22]">
                            {">>プライバシーポリシー"}
                        </p>
                    </Link>
                </span>
            </div>
            <div className="flex w-full flex-wrap font-light not-md:justify-between not-md:gap-x-[calc(3500svw/375)] md:h-[300px]">
                <span className="ml-[calc(1700svw/375)] not-md:flex-1 md:ml-[calc(19000svw/1440)] md:w-[calc(27500svw/1440)] lg:w-[calc(22500svw/1440)]">
                    <h1 className="mt-[27px] w-full border-b-[1px] text-[16px] not-md:mb-[6px] md:border-b-2 md:text-[32px]">
                        Overview
                    </h1>
                    <Link href="/">
                        <p className={footerLink}>Top</p>
                    </Link>
                    <p
                        className={`${disabledLink} max-[400px]:!flex max-[400px]:!h-[21px] max-[400px]:!items-center max-[400px]:!text-[3.5svw]`}
                    >
                        Theme & Logo
                    </p>
                    <Link href="/news">
                        <p className={footerLink}>News</p>
                    </Link>
                    <p className={disabledLink}>Access</p>
                </span>
                <span className="not-md:flex-1 md:ml-[calc(8600svw/1440)] md:w-[calc(27500svw/1440)] lg:w-[calc(22500svw/1440)]">
                    <h1 className="mt-[27px] w-full border-b-[1px] text-[16px] not-md:mb-[6px] md:border-b-2 md:text-[32px]">
                        Guide
                    </h1>
                    <p className={disabledLink}>Event</p>
                    <p className={disabledLink}>Exhibition</p>
                    <p className={disabledLink}>Bazaar</p>
                    <p className={disabledLink}>Goods</p>
                </span>
                <span className="not-md:mr-[calc(1700svw/375)] not-md:flex-1 md:ml-[calc(8600svw/1440)] md:w-[calc(27500svw/1440)] lg:w-[calc(22500svw/1440)]">
                    <h1 className="mt-[27px] w-full border-b-[1px] text-[16px] not-md:mb-[6px] md:border-b-2 md:text-[32px]">
                        Contents
                    </h1>
                    <p className={disabledLink}>Blog</p>
                    <p className={disabledLink}>Gallery</p>
                    <p className={disabledLink}>Special</p>
                    <p className={disabledLink}>Archives</p>
                </span>
                <span className="flex flex-row not-md:mt-[16px] not-md:mr-[17px] not-md:mb-[16px] not-md:w-full not-md:justify-end not-md:gap-[5px] md:mt-auto md:mr-[calc(7900svw/1440)] md:mb-[30px] md:ml-auto md:flex-col md:gap-[8px] lg:flex-row">
                    <Link
                        href="https://x.com/seiseisai_tdj"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="h-[40px] w-[40px] not-md:h-[32px] not-md:w-[32px]"
                    >
                        <XIcon className="not-md:h-[32px] not-md:w-[32px]" />
                    </Link>
                    <Link
                        href="https://www.youtube.com/@seiseisai_tdj"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="h-[40px] w-[40px] not-md:h-[32px] not-md:w-[32px]"
                    >
                        <YouTubeIcon className="not-md:h-[32px] not-md:w-[32px]" />
                    </Link>
                    <Link
                        href="https://www.instagram.com/seiseisai_tdj/"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="h-[40px] w-[40px] not-md:h-[32px] not-md:w-[32px]"
                    >
                        <InstagramIcon className="not-md:h-[32px] not-md:w-[32px]" />
                    </Link>
                </span>
            </div>
        </footer>
    );
}
