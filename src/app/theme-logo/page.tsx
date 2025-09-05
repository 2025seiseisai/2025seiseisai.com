import DownloadIcon from "./download_icon.svg";
import LogoC from "./logo_colour.svg";
import LogoM from "./logo_mono.svg";
import LogotypeC from "./logotype_colour.svg";
import LogotypeM from "./logotype_mono.svg";
import TypoC from "./typo_colour.svg";
import TypoM from "./typo_mono.svg";

export const metadata = {
    title: "Theme & Logo | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

function Download({ href }: { href: string }) {
    return (
        <a href={href} download className="absolute top-[20px] left-[5px] size">
            <DownloadIcon />
        </a>
    );
}

function Logotype({ mono = false }: { mono?: boolean }) {
    const className = "w-full h-auto bg-white";
    return (
        <div className="relative min-[480px]:w-[80%] min-[480px]:max-w-[500px]">
            {mono ? <LogotypeM className={className} /> : <LogotypeC className={className} />}
            <Download href={`/2025/theme-logo/logotype_${mono ? "mono" : "color"}.png`} />
        </div>
    );
}

function Logo({ mono = false }: { mono?: boolean }) {
    const className = "w-full h-auto bg-white";
    return (
        <div
            className="not-min-[480px]:first:mr-auto not-min-[480px]:first:mb-[30px] not-min-[480px]:last:ml-auto
                relative min-[480px]:flex-1 min-[480px]:max-w-[200px] md:max-w-[300px] not-min-[480px]:w-[200px]"
        >
            {mono ? <LogoM className={className} /> : <LogoC className={className} />}
            <Download href={`/2025/theme-logo/logo_${mono ? "mono" : "color"}.png`} />
        </div>
    );
}

function Typo({ mono = false }: { mono?: boolean }) {
    const className = "w-full h-auto bg-white";
    return (
        <div
            className="not-min-[480px]:first:mr-auto not-min-[480px]:first:mb-[30px] not-min-[480px]:last:ml-auto
                relative min-[480px]:flex-1 min-[480px]:max-w-[200px] md:max-w-[300px] not-min-[480px]:w-[200px]"
        >
            {mono ? <TypoM className={className} /> : <TypoC className={className} />}
            <Download href={`/2025/theme-logo/typo_${mono ? "mono" : "color"}.png`} />
        </div>
    );
}

function He2({ children }: { children: string }) {
    return <h2 className="text-[24px] font-bold text-pri-red mt-[20px] mb-[15px]">{children}</h2>;
}

function Pa({ children }: { children: string }) {
    return <p className="text-pri-black text-[16px] mt-[30px] mb-[25px]">{children}</p>;
}

export default function Page() {
    return (
        <div className="mx-[20px]">
            <h1 className="text-[28px] font-bold text-pri-black">
                <span className="text-pri-red">T</span>
                {"heme & "}
                <span className="text-pri-red">L</span>ogo
            </h1>
            <Pa>テーマ・ロゴの紹介に加え、関連データのダウンロードができるページです。</Pa>
            <He2>Logotype</He2>
            <div className="flex flex-col gap-x-[30px] gap-y-[35px] items-center lg:flex-row lg:justify-evenly">
                <Logotype />
                <Logotype mono />
            </div>
            <Pa>
                第61回菁々祭のテーマは"分秒"です。 「1分1秒が“61”秒である」という遊び心を交えつつ、
                生徒が一分一秒さえも惜しんで掛けてきた熱い想いが込められています。
            </Pa>
            <He2>Logo</He2>
            <div className="min-[480px]:flex min-[480px]:justify-evenly min-[480px]:gap-[30px]">
                <Logo />
                <Logo mono />
            </div>
            <Pa>
                落ち着いた黒と深みのある赤で重厚感を演出し、時計を再解釈した洗練されたシェイプでロゴ全体にスタイリッシュさを宿しました。
            </Pa>
            <He2>Typo</He2>
            <div className="min-[480px]:flex min-[480px]:justify-evenly min-[480px]:gap-[30px]">
                <Typo />
                <Typo mono />
            </div>
            <Pa>
                角度や太さに一貫性を持たせることで全体に安定感を生み出し、そこに赤を差し込むことでタイポグラフィに鮮やかなアクセントを加えました。
            </Pa>
            <He2>Guideline</He2>
            <Pa>ロゴの使用にあたってはこちらのPDFをよく読み、内容を遵守していただくようお願いします。</Pa>
        </div>
    );
}
