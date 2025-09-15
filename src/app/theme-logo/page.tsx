//
import Link from "next/link";
import LogoMono from "../../../public/theme-logo/Logo-mono.svg";
import Logo from "../../../public/theme-logo/Logo.svg";
import LogotypeMono from "../../../public/theme-logo/Logotype-mono.svg";
import Logotype from "../../../public/theme-logo/Logotype.svg";
import TypographyMono from "../../../public/theme-logo/Typography-mono.svg";
import Typography from "../../../public/theme-logo/Typography.svg";
import DownloadIcon from "./download-icon.svg";

export const metadata = {
    title: "Theme & Logo | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

export default function Page() {
    return (
        <>
            <h1 className="mt-[30px] w-full px-[20px] text-[28px] font-bold text-[#0b0e0f] md:text-[36px]">
                <span className="text-[#de0d22]">T</span>heme & <span className="text-[#de0d22]">L</span>ogo
            </h1>
            <p className="mt-[25px] w-full px-[20px] text-[16px] text-[#0b0e0f]">
                テーマ・ロゴの紹介に加え、関連データのダウンロードができるページです。
            </p>
            <h2 className="mt-[20px] w-full px-[20px] text-center text-[24px] font-bold text-[#de0d22]">Logotype</h2>
            <div className="relative mt-[15px] w-full px-[20px]">
                <Logotype className="ml-[3%] h-auto w-[70%]" />
                <Link href="/theme-logo/Logotype.svg" download className="absolute right-[3%] bottom-0">
                    <DownloadIcon />
                </Link>
            </div>
            <LogotypeMono />
            <Logo />
            <LogoMono />
            <Typography />
            <TypographyMono />
        </>
    );
}
