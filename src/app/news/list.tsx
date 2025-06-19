"use client";
import Link from "next/link";
import { useState } from "react";
export default function NewsList({
    news,
}: {
    news: {
        _id: string;
        date: Date;
        importance: boolean;
        title: string;
        link: string;
    }[];
}) {
    const [onlyImportant, setOnlyImportant] = useState(false);
    const firstIndex = onlyImportant ? news.findIndex((n) => n.importance) : 0;
    return (
        <div className={"mr-[20px] ml-[20px] text-[#0b0e0f] md:mr-[10%] md:ml-[10%]"}>
            <div className="mt-[30px] flex items-center">
                <h1 className={"text-[40px] font-bold not-md:text-[28px]"}>
                    <span className="text-[#de0d22]">N</span>ews
                </h1>
                <button
                    className={`${onlyImportant ? "bg-[#0b0e0f10] text-[#0b0e0f60]" : "bg-[#de0d22] text-white"} mt-[8px] ml-[40px] h-[32px] w-[64px]
                        cursor-pointer rounded-[16px] pr-[8px] pl-[8px] text-[14px] transition-[background-color_color] duration-300
                        not-md:ml-[28px] not-md:h-[28px] not-md:w-[56px] not-md:text-[12px]`}
                    onClick={() => setOnlyImportant(false)}
                >
                    すべて
                </button>
                <button
                    className={`${!onlyImportant ? "bg-[#0b0e0f10] text-[#0b0e0f60]" : "bg-[#de0d22] text-white"} mt-[8px] ml-[12px] h-[32px] w-[64px]
                        cursor-pointer rounded-[16px] pr-[8px] pl-[8px] text-[14px] transition-[background-color_color] duration-300
                        not-md:ml-[10px] not-md:h-[28px] not-md:w-[56px] not-md:text-[12px]`}
                    onClick={() => setOnlyImportant(true)}
                >
                    重要
                </button>
            </div>
            <div className={"mt-[24px] mb-[60px] not-md:mt-[16px] not-md:mb-[40px]"}>
                {news.map(({ _id, date, importance, title, link }, idx) => {
                    const year = date.getFullYear();
                    const month = String(date.getMonth() + 1).padStart(2, "0");
                    const day = String(date.getDate()).padStart(2, "0");
                    return (
                        <div
                            key={_id.toString()}
                            className={`${onlyImportant && !importance ? "max-h-[0px]" : "max-h-[60px] not-md:max-h-[50px]"} overflow-hidden
                            transition-[max-height] duration-300`}
                        >
                            <Link
                                className={`${
                                idx <= firstIndex || (onlyImportant && !importance)
                                        ? "border-[#de0d2200]"
                                        : "border-[#de0d22]"
                                } relative flex h-[60px] items-center border-t-[1.5px] text-[16px] transition-[border-color] duration-250 ease-out
                                not-md:h-[50px]`}
                                href={`/2025/news/${link}`}
                            >
                                {importance && (
                                    <div
                                        className={
                                            "absolute top-0 h-[15px] w-[15px] bg-[#de0d22] [clip-path:polygon(0_0,100%_0,0_100%)] not-md:h-[12px] not-md:w-[12px]"
                                        }
                                    ></div>
                                )}
                                <h3
                                    className={
                                        "mr-[8.33svw] ml-[calc(2.78svw_+_15px)] not-md:mr-[6svw] not-md:ml-[calc(2.78svw_+_12px)] not-md:text-[13px]"
                                    }
                                >
                                    {year}.{month}.{day}
                                </h3>
                                <h2 className={"mr-[2.78svw] truncate not-md:text-[14px]"}>{title}</h2>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
