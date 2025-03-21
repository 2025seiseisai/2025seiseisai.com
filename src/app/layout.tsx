import { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "../impl/globals.css";

const noto_sans_jp = Noto_Sans_JP({
    weight: "400",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    /*
    title: "第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
    description: "第61回東大寺学園文化祭「分秒」は、2025年9月6日(土)・7日(日)に開催予定！ぜひお越しください！",
    keywords: "第61回菁々祭, 菁々祭, 東大寺学園, 文化祭, 2025, 分秒, 9/6, 9/7, 2025",
    */
    title: "Comming Soon... - 東大寺学園文化祭2025",
    description: "",
    keywords: "",
    authors: [{ name: "東大寺学園文化祭実行委員会 / 東大寺学園PRパート" }],
    metadataBase: new URL("https://seiseisai.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja" className={noto_sans_jp.className}>
            <body>
                <NextTopLoader
                    height={3}
                    color="#de0d22; box-shadow: 0 0 10px #0b0e0f"
                    template={`<div class="bar" role="bar"></div>`}
                />
                <main>{children}</main>
            </body>
        </html>
    );
}
