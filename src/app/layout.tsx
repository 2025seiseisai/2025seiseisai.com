import "../global/global.css";
import { Noto_Sans_JP } from "next/font/google";

const noto_sans_jp = Noto_Sans_JP({
    weight: "400",
    subsets: ["latin"],
});

export const metadata = {
    title: "第61回菁々祭 - 東大寺学園文化祭2025",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja" className={noto_sans_jp.className}>
            <body>{children}</body>
        </html>
    );
}
