import NewsManager from "@/impl/news";
import { YouTubeEmbed } from "@next/third-parties/google";
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";

export const metadata = {
    title: "News | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

export const revalidate = 180;

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const id = await NewsManager.getId((await params).id);
    if (!id) notFound();
    const news = await NewsManager.getNewsById(id);
    if (!news) notFound();
    const { title, date, importance, content } = news;
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getJSX = (rec: any, children: any) => {
        if (typeof children === "string") {
            const sentences = children.split("\n");
            return (
                <>
                    {sentences.map((sentence, idx) => {
                        return (
                            <span key={idx}>
                                {sentence}
                                {idx !== sentences.length - 1 && <br />}
                            </span>
                        );
                    })}
                </>
            );
        }
        if (Array.isArray(children)) {
            return (
                <>
                    {children.map((child, idx) => (
                        <span key={idx}>{rec(rec, child)}</span>
                    ))}
                </>
            );
        }
        return children;
    };
    const mdx = await compileMDX({
        source: content,
        options: {
            mdxOptions: {
                remarkPlugins: [remarkGfm],
            },
        },
        components: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            h1: ({ children }: { children: any }) => {
                return (
                    <h1
                        className={`mt-[8px] mb-[8px] border-l-4 border-[#de0d22] pl-[16px] text-[28px] not-md:border-l-3 not-md:pl-[10px]
                            not-md:text-[24px]`}
                    >
                        {getJSX(getJSX, children)}
                    </h1>
                );
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            h2: ({ children }: { children: any }) => {
                return (
                    <h2 className={"mt-[8px] mb-[8px] text-[26px] not-md:text-[22px]"}>{getJSX(getJSX, children)}</h2>
                );
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            h3: ({ children }: { children: any }) => {
                return (
                    <h3 className={"mt-[6px] mb-[6px] text-[24px] not-md:text-[21px]"}>{getJSX(getJSX, children)}</h3>
                );
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            h4: ({ children }: { children: any }) => {
                return (
                    <h4 className={"mt-[5px] mb-[5px] text-[22px] not-md:text-[20px]"}>{getJSX(getJSX, children)}</h4>
                );
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            h5: ({ children }: { children: any }) => {
                return (
                    <h5 className={"mt-[5px] mb-[5px] text-[21px] not-md:text-[19px]"}>{getJSX(getJSX, children)}</h5>
                );
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            h6: ({ children }: { children: any }) => {
                return (
                    <h6 className={"mt-[5px] mb-[5px] text-[20px] not-md:text-[18px]"}>{getJSX(getJSX, children)}</h6>
                );
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            p: ({ children }: { children: any }) => {
                return (
                    <div className={"mt-[4px] mb-[4px] text-[18px] font-normal not-md:text-[16px]"}>
                        {getJSX(getJSX, children)}
                    </div>
                );
            },
            img: ({ src, alt }: { src: string; alt: string }) => {
                return <Image src={src} alt={alt} />;
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            a: ({ href, children }: { href: string; children: any }) =>
                href.startsWith("https://youtube.com/") ||
                href.startsWith("https://www.youtube.com/") ||
                href.startsWith("https://youtu.be/") ? (
                    <YouTubeEmbed videoid={href.split("=").at(-1) || ""} />
                ) : (
                    <Link href={href} className="text-[#de0d22] underline">
                        {getJSX(getJSX, children)}
                    </Link>
                ),
        },
    });
    return (
        <>
            <div
                className={`mr-[20px] mb-[60px] ml-[20px] flex flex-col text-[#0b0e0f] not-md:mb-[40px] md:mr-[10%] md:ml-[10%] lg:mr-[20%]
                    lg:ml-[20%] lg:items-center`}
            >
                <div
                    className={`mt-[30px] flex items-center border-b-[2px] border-[#0b0e0f] pb-[4px] md:pb-[8px] lg:w-[120%] lg:justify-center
                        lg:pb-[12px]`}
                >
                    <h1 className={"text-[40px] font-bold not-md:text-[28px] lg:text-[48px]"}>
                        <span className="text-[#de0d22]">N</span>ews
                    </h1>
                </div>
                <div className={"mt-[24px] flex items-center not-md:mt-[20px]"}>
                    <p className={"text-[20px] not-md:text-[16px]"}>
                        {year}.{month}.{day}
                    </p>
                    {importance && (
                        <div
                            className={`ml-[12px] flex h-[24px] items-center justify-center rounded-full bg-[#de0d22] pr-[12px] pl-[12px] text-[13px] text-white
                            not-md:ml-[8px] not-md:h-[20px] not-md:pr-[10px] not-md:pl-[10px] not-md:text-[12px]`}
                        >
                            重要
                        </div>
                    )}
                </div>
                <h1 className={"mb-[24px] text-[40px] text-[#de0d22] not-md:mb-[20px] not-md:text-[28px]"}>{title}</h1>
                <article className="w-full">{mdx.content}</article>
                <div className={"mt-[32px] flex w-full justify-center not-md:mt-[24px]"}>
                    <Link
                        href="/2025/news"
                        className={`rounded-[12px] border-[1.5px] pt-[4px] pr-[16px] pb-[4px] pl-[16px] text-[20px] text-[#de0d22] transition-opacity
                            duration-300 not-md:rounded-[8px] not-md:pt-[4px] not-md:pr-[12px] not-md:pb-[3px] not-md:pl-[12px] not-md:text-[16px]
                            hover:opacity-75`}
                    >
                        {">> News一覧へ"}
                    </Link>
                </div>
            </div>
        </>
    );
}
