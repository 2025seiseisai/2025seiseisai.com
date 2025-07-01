import type { StaticImageData } from "next/image";
import Image from "next/image";
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
            className={
                "mb-[25px] rounded-[20px] bg-[#fcfcfc] pt-[20px] pb-[20px] text-[#0b0e0f] shadow-md md:mb-[40px] md:shadow-lg"
            }
        >
            <div className="flex flex-col items-center px-[20px]">
                <h2 className="mb-[4px]">
                    <span className={"text-[20px] md:text-[24px]"}>{round} - </span>
                    <span className={"text-[26px] font-semibold wrap-anywhere md:text-[32px]"} style={{ color }}>
                        {theme}
                    </span>
                </h2>
                {link.startsWith("https://seiseisai.com") ? (
                    <a href={link} className={"text-[16px] underline md:text-[18px]"} style={{ color }}>
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
                className={
                    "mt-[30px] ml-[20px] text-[28px] font-bold text-[#0b0e0f] md:mr-auto md:ml-auto md:w-[80%] md:text-[40px]"
                }
            >
                <span className="text-[#de0d22]">A</span>rchives
            </h1>
            <p className={"mt-[12px] mr-[20px] ml-[20px] text-[14px] md:mr-auto md:ml-auto md:w-[80%] md:text-[16px]"}>
                ※都合により、一部のページを非表示としています。ご了承ください。
            </p>
            <div
                className={
                    "mt-[25px] mb-[20px] w-[100%] px-[10px] md:mx-auto md:mt-[30px] md:mb-[10px] md:w-[80%] md:px-0"
                }
            >
                <ArchiveCard
                    round="第60回"
                    theme="IGNITION"
                    link="https://seiseisai.com/2024"
                    image={Image2024}
                    color="#FF0084"
                />
                <ArchiveCard
                    round="第59回"
                    theme="RESONANCE"
                    link="https://seiseisai.com/2023"
                    image={Image2023}
                    color="#52CC89"
                />
                <ArchiveCard
                    round="第58回"
                    theme="四季彩"
                    link="https://web.archive.org/web/20230406032142/https://seiseisai.com/"
                    image={Image2022}
                    color="#C04A88"
                />
                <ArchiveCard
                    round="第57回"
                    theme="あをによし"
                    link="https://web.archive.org/web/20211011114827/https://seiseisai.com/2021/"
                    image={Image2021}
                    color="#3C2105"
                />
                <ArchiveCard
                    round="第56回"
                    theme="bright"
                    link="https://web.archive.org/web/20201101112845/https://www.seiseisai.com/"
                    image={Image2020}
                    color="#F29600"
                />
                <ArchiveCard
                    round="第55回"
                    theme="Sailing"
                    link="https://web.archive.org/web/20200621142300/https://seiseisai.com/"
                    image={Image2019}
                    color="#01A0E2"
                />
                <ArchiveCard
                    round="第52回"
                    theme="Go Together"
                    link="https://web.archive.org/web/20160827202755/http://seisei52nd.com/"
                />
                <ArchiveCard
                    round="第51回"
                    theme="Re:Member"
                    link="https://web.archive.org/web/20150915024420/http://www.seisei51st.com:80/"
                />
            </div>
        </>
    );
}
