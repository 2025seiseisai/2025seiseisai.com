import "@/impl/global.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import HolyLoader from "holy-loader";
import { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Footer } from "./(footer)/footer";
import { Header } from "./(header)/header";

const noto_sans_jp = Noto_Sans_JP({
    display: "swap",
    subsets: ["latin"],
});

const metaDataTitle = "第61回菁々祭「分秒」 - 東大寺学園文化祭2025";
const metaDataDescription =
    "第61回東大寺学園文化祭「分秒」は、2025年9月6日(土)・7日(日)に開催予定！ぜひお越しください！";
export const metadata: Metadata = {
    metadataBase: new URL("https://seiseisai.com"),
    title: metaDataTitle,
    description: metaDataDescription,
    applicationName: metaDataTitle,
    authors: [{ name: "東大寺学園文化祭実行委員会 / 東大寺学園PRパート", url: "https://seiseisai.com" }],
    // generator: "Next.js",
    keywords: "第61回菁々祭, 菁々祭, 東大寺学園, 東大寺, 文化祭, 61seisei, 2025, 分秒, 9/6, 9/7, 2025",
    // referrer: "",
    creator: "東大寺学園PRパート技術セクション",
    // publisher: "東大寺学園PRパート技術セクション",
    robots: {
        index: true,
        follow: true,
        // noarchive: true,
        // nosnippet: false,
        // noimageindex: false,
        // nocache: true,
        notranslate: true,
        // indexfembedded: false,
        // nositelinkssearchbox: false,
        // unavaulable_after: false,
        // "max-video-preview": 0,
        // "max-image-preview": "none",
        // "max-snippet": 0,
        // googleBot: {},
    },
    alternates: {
        // canonical: "https://seiseisai.com",
        // languages: {}
        // media: {},
        // types: {},
    },
    // icons: {},
    // manifest: "https://seiseisai.com/manifest.json",
    openGraph: {
        // determiner: "",
        title: metaDataTitle,
        description: metaDataDescription,
        // emails: "",
        // phoneNumbers: [],
        // faxNumbers: [],
        // siteName: metaDataTitle,
        locale: "ja_JP",
        alternateLocale: ["ja_JP"],
        // images: [],
        // audio: [],
        // videos: [],
        url: "https://seiseisai.com",
        countryName: "日本",
        ttl: 60,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        // site: "@seiseisai_tdj",
        // siteId: "@seiseisai_tdj",
        // creator: "@seiseisai_tdj",
        creatorId: "@seiseisai_tdj",
        description: metaDataDescription,
        title: metaDataTitle,
        // images: {},
    },
    /*
    facebook: {
        // appId: "1234567890",
        // admins: undefined,
    },
    */
    verification: {
        // google: "",
        // yahoo: "",
        // yandex: "",
        // me: "",
        // other: {},
    },
    appleWebApp: {
        // capable: false,
        title: "61seisei",
        // startupImage: {},
        // statusBarStyle: "default",
    },
    formatDetection: {
        telephone: false,
        date: false,
        address: false,
        email: true,
        url: true,
    },
    /*
    itunes: {
        // appId: "1234567890",
        // appArgument: "",
    },
    */
    abstract: metaDataDescription,
    appLinks: {
        // ios: {}
        // iphone: {},
        // ipad: {},
        // android: {},
        // winwods_phone: {},
        // windows: {},
        // windows_universal: {},
        // web: {},
    },
    /*
    archives: [
        "https://seiseisai.com/2024",
        "https://seiseisai.com/2023",
    ],
    */
    // assets: "https://seiseisai.com/assets",
    // bookmarks: "https://seiseisai.com/bookmarks",
    pagination: {
        // previous: "",
        // next: "",
    },
    // category: "",
    // classification: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const gaID = process.env.NEXT_PUBLIC_GA_ID;
    return (
        <html lang="ja" className={noto_sans_jp.className}>
            <body suppressHydrationWarning>
                <HolyLoader height="2px" color="#de0d22" boxShadow="0 0 10px #0b0e0f" />
                <Header />
                <main>{children}</main>
                <Footer />
                {gaID && <GoogleAnalytics gaId={gaID} />}
            </body>
        </html>
    );
}
