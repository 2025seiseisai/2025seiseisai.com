import { YouTubeEmbed } from "@next/third-parties/google";
import Link from "next/link";
import LogoMono from "../../../public/theme-logo/Logo-mono.svg";
import Logo from "../../../public/theme-logo/Logo.svg";
import LogotypeMono from "../../../public/theme-logo/Logotype-mono.svg";
import Logotype from "../../../public/theme-logo/Logotype.svg";
import TypographyMono from "../../../public/theme-logo/Typography-mono.svg";
import Typography from "../../../public/theme-logo/Typography.svg";
import DownloadIcon from "./download-icon.svg";

export const metadata = {
    title: "Theme & Logo",
};

export default function Page() {
    return (
        <>
            <h1
                className="mt-[30px] w-full px-[20px] text-[28px] font-bold text-[#0b0e0f] md:mx-auto md:w-[80%] md:px-0
                    md:text-[36px]"
            >
                <span className="text-[#de0d22]">T</span>heme & <span className="text-[#de0d22]">L</span>ogo
            </h1>
            <p
                className="mt-[25px] w-full px-[20px] text-[16px] text-[#0b0e0f] md:mx-auto md:mt-[30px] md:w-[80%]
                    md:px-0 md:text-[18px]"
            >
                テーマ・ロゴの紹介に加え、関連データのダウンロードができるページです。
            </p>
            <h2
                className="mt-[20px] w-full px-[20px] text-center text-[24px] font-bold text-[#de0d22] md:mt-[30px]
                    md:text-[28px]"
            >
                Logotype
            </h2>
            <div className="mx-auto mt-[15px] flex w-[calc(100%-40px)] flex-col sm:mb-[2.5%] sm:flex-row md:w-[80%]">
                <div className="relative w-full sm:flex-1">
                    <Logotype className="ml-[8%] h-auto w-[70%]" />
                    <Link
                        href="/theme-logo/Logotype.svg"
                        download
                        className="absolute right-[8%] bottom-[-16%] sm:bottom-[-20%]"
                        prefetch={false}
                    >
                        <DownloadIcon className="aspect-square h-auto w-[8svw] sm:w-[4svw] lg:w-[3.5svw]" />
                    </Link>
                </div>
                <div className="relative w-full not-sm:mt-[12px] not-sm:mb-[4%] sm:flex-1">
                    <LogotypeMono className="ml-[8%] h-auto w-[70%]" />
                    <Link
                        href="/theme-logo/Logotype-mono.svg"
                        download
                        className="absolute right-[8%] bottom-[-16%] sm:bottom-[-20%]"
                        prefetch={false}
                    >
                        <DownloadIcon className="aspect-square h-auto w-[8svw] sm:w-[4svw] lg:w-[3.5svw]" />
                    </Link>
                </div>
            </div>
            <p className="w-full px-[20px] text-[14px] text-[#0b0e0f] md:mx-auto md:w-[80%] md:px-0 md:text-[16px]">
                {`第61回菁々祭のテーマは"分秒"です。「1分1秒が“61”秒である」という遊び心を交えつつ、生徒が一分一秒さえも惜しんで掛けてきた熱い想いが込められています。`}
            </p>
            <h2
                className="mt-[20px] w-full px-[20px] text-center text-[24px] font-bold text-[#de0d22] md:mt-[30px]
                    md:text-[28px]"
            >
                Logo
            </h2>
            <div className="mx-auto mt-[15px] mb-[4.5%] flex w-[calc(100%-40px)] sm:mb-[2.5%] md:w-[60%]">
                <div className="relative flex-1">
                    <Logo className="ml-[10%] h-auto w-[80%] sm:ml-[20%] sm:w-[60%]" />
                    <Link
                        href="/theme-logo/Logo.svg"
                        download
                        className="absolute right-[8%] bottom-[-20%] sm:right-[18%]"
                        prefetch={false}
                    >
                        <DownloadIcon className="aspect-square h-auto w-[8svw] sm:w-[4svw] lg:w-[3.5svw]" />
                    </Link>
                </div>
                <div className="relative flex-1">
                    <LogoMono className="ml-[6%] h-auto w-[80%] sm:ml-[16%] sm:w-[60%]" />
                    <Link
                        href="/theme-logo/Logo-mono.svg"
                        download
                        className="absolute right-[12%] bottom-[-20%] sm:right-[22%]"
                        prefetch={false}
                    >
                        <DownloadIcon className="aspect-square h-auto w-[8svw] sm:w-[4svw] lg:w-[3.5svw]" />
                    </Link>
                </div>
            </div>
            <p className="w-full px-[20px] text-[14px] text-[#0b0e0f] md:mx-auto md:w-[80%] md:px-0 md:text-[16px]">
                {`落ち着いた黒と深みのある赤で重厚感を演出し、時計を再解釈した洗練されたシェイプでロゴ全体にスタイリッシュさを宿しました。`}
            </p>
            <h2
                className="mt-[20px] w-full px-[20px] text-center text-[24px] font-bold text-[#de0d22] md:mt-[30px]
                    md:text-[28px]"
            >
                Typography
            </h2>
            <div className="mx-auto mt-[15px] mb-[4.5%] flex w-[calc(100%-40px)] sm:mb-[2.5%] md:w-[60%]">
                <div className="relative flex-1">
                    <Typography className="ml-[10%] h-auto w-[60%] sm:ml-[20%] sm:w-[45%]" />
                    <Link
                        href="/theme-logo/Typography.svg"
                        download
                        className="absolute right-[8%] bottom-[-20%] sm:right-[18%]"
                        prefetch={false}
                    >
                        <DownloadIcon className="aspect-square h-auto w-[8svw] sm:w-[4svw] lg:w-[3.5svw]" />
                    </Link>
                </div>
                <div className="relative flex-1">
                    <TypographyMono className="ml-[6%] h-auto w-[60%] sm:ml-[16%] sm:w-[45%]" />
                    <Link
                        href="/theme-logo/Typography-mono.svg"
                        download
                        className="absolute right-[12%] bottom-[-20%] sm:right-[22%]"
                        prefetch={false}
                    >
                        <DownloadIcon className="aspect-square h-auto w-[8svw] sm:w-[4svw] lg:w-[3.5svw]" />
                    </Link>
                </div>
            </div>
            <p className="w-full px-[20px] text-[14px] text-[#0b0e0f] md:mx-auto md:w-[80%] md:px-0 md:text-[16px]">
                {`角度や太さに一貫性を持たせることで全体に安定感を生み出し、そこに赤を差し込むことでタイポグラフィに鮮やかなアクセントを加えました。`}
            </p>
            <h2
                className="mt-[20px] w-full px-[20px] text-center text-[24px] font-bold text-[#de0d22] md:mt-[30px]
                    md:text-[28px]"
            >
                Logo-PV
            </h2>
            <div className="mt-[15px] mb-[45px] flex h-max w-full justify-center px-[20px] md:mb-[50px]">
                <YouTubeEmbed videoid="h8ffb4VJqjQ" width={550} />
            </div>
        </>
    );
}
