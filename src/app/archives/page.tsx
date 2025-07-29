import type { StaticImageData } from "next/image";
import Image from "next/image";
import Image2016 from "./2016.png";
import Image2017 from "./2017.png";
import Image2019 from "./2019.png";
import Image2020 from "./2020.png";
import Image2021 from "./2021.png";
import Image2022 from "./2022.png";
import Image2023 from "./2023.png";
import Image2024 from "./2024.png";

export const metadata = {
    title: "Archives | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

function ArchiveCard({
    round,
    theme,
    link,
    image,
    color = "#0b0e0f",
}: {
    round: string;
    theme: string;
    link: string;
    image?: StaticImageData;
    color?: string;
}) {
    return (
        <div
            className={`mb-[25px] rounded-[20px] bg-[#fcfcfc] pt-[20px] pb-[20px] text-[#0b0e0f] shadow-md md:mb-[40px]
                md:shadow-lg`}
        >
            <div className="flex flex-col items-center px-[20px]">
                <h2 className="mb-[4px]">
                    <span className={"text-[20px] md:text-[24px]"}>{round} - </span>
                    <span className={"text-[26px] font-semibold wrap-anywhere md:text-[32px]"} style={{ color }}>
                        {theme}
                    </span>
                </h2>
                {link.startsWith("https://seiseisai.com") ? (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={"text-[16px] underline md:text-[18px]"}
                        style={{ color }}
                    >
                        {link}
                    </a>
                ) : (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className={"text-center text-[16px] wrap-anywhere md:text-[18px]"}
                        style={{ color }}
                    >
                        <span className="mr-[2px] underline">
                            {"http" + link.replace("https://web.archive.org/web/", "").split("http")[1]}
                        </span>
                        (Internet Archive)
                    </a>
                )}
                {image && (
                    <Image
                        src={image}
                        alt={`${round} archive image`}
                        className="mt-[8px] w-[90%] max-w-[720px]"
                        quality={60}
                    />
                )}
            </div>
        </div>
    );
}

export default function ArchivesPage() {
    return (
        <>
            <h1
                className={`mt-[30px] ml-[20px] text-[28px] font-bold text-[#0b0e0f] md:mr-auto md:ml-auto md:w-[80%]
                    md:text-[40px]`}
            >
                <span className="text-[#de0d22]">A</span>rchives
            </h1>
            <p className={"mt-[12px] mr-[20px] ml-[20px] text-[14px] md:mr-auto md:ml-auto md:w-[80%] md:text-[16px]"}>
                ※一部のページはリンクが切れている場合があります。予めご了承ください。
            </p>
            <div
                className={
                    "mt-[25px] mb-[20px] w-[100%] px-[10px] md:mx-auto md:mt-[30px] md:mb-[10px] md:w-[80%] md:px-0"
                }
            >
                <ArchiveCard
                    round="第60回"
                    theme="IGNITION"
                    link="https://seiseisai.com/2024/"
                    image={Image2024}
                    color="#FF0084"
                />
                <ArchiveCard
                    round="第59回"
                    theme="RESONANCE"
                    link="https://seiseisai.com/2023/"
                    image={Image2023}
                    color="#52CC89"
                />
                <ArchiveCard
                    round="第58回"
                    theme="四季彩"
                    link="https://seiseisai.com/2022/"
                    image={Image2022}
                    color="#C04A88"
                />
                <ArchiveCard
                    round="第57回"
                    theme="あをによし"
                    link="https://seiseisai.com/2021/"
                    image={Image2021}
                    color="#3D2207"
                />
                <ArchiveCard
                    round="第56回"
                    theme="bright"
                    link="https://seiseisai.com/2020/"
                    image={Image2020}
                    color="#F29600"
                />
                <ArchiveCard
                    round="第55回"
                    theme="Sailing"
                    link="https://seiseisai.com/2019/"
                    image={Image2019}
                    color="#01A0E2"
                />
                <ArchiveCard
                    round="第53回"
                    theme="自由楽果"
                    link="https://seiseisai.com/2017/"
                    image={Image2017}
                    color="#AB4443"
                />
                <ArchiveCard
                    round="第52回"
                    theme="Go Together"
                    link="https://seiseisai.com/2016/"
                    image={Image2016}
                    color="#415D8B"
                />
                <ArchiveCard
                    round="第51回"
                    theme="Re:Member"
                    link="https://web.archive.org/web/20150915024420/http://www.seisei51st.com:80/"
                />
                <ArchiveCard round="第49回" theme="漢度良好" link="https://seiseisai.com/2013/" color="#4BCE4A" />
                <ArchiveCard
                    round="第48回"
                    theme="流星～二日間の輝き～"
                    link="https://seiseisai.com/2012/"
                    color="#9495C5"
                />
                <ArchiveCard
                    round="第47回"
                    theme="刻～Endlose Zeit～"
                    link="https://seiseisai.com/2011/"
                    color="#9D6D79"
                />
                <ArchiveCard
                    round="第45回"
                    theme="行け!!Men!!"
                    link="https://web.archive.org/web/20090909062151/http://www.seisei45.org/home.html"
                />
                <ArchiveCard
                    round="第44回"
                    theme="ただいまあきない中~無飽地帯へようこそ~"
                    link="https://web.archive.org/web/20080918072948/http://seiseisai44.net/"
                />
                <ArchiveCard
                    round="第38回"
                    theme="101%"
                    link="https://web.archive.org/web/20020808060607/http://seisei.info/tdj/"
                />
            </div>
        </>
    );
}
