import type { BlogMetadata } from "@/impl/blog";
import spinnerStyles from "./spinner.module.scss";

import Image from "next/image";
import Link from "next/link";

export default function BlogCardImpl({
    round,
    index,
    blog,
    width = "w-[min(350px,calc(100svw-40px))]",
}: {
    round: string;
    index: string;
    blog?: BlogMetadata;
    width?: string;
}) {
    return (
        <Link
            href={`/2025/blog/${round}/${index}`}
            prefetch={false}
            className={`${width} @container relative flex h-[350px] flex-initial flex-col items-center justify-between overflow-hidden rounded-[0.625rem] border-2 border-pri-red bg-[#f7f7f7] transition duration-500 ease-in-out hover:scale-102 hover:opacity-90`}
        >
            {!blog && (
                <div className="absolute flex h-full w-full items-center justify-center">
                    <div className={spinnerStyles.spinner}></div>
                </div>
            )}
            {blog && (
                <>
                    <Image
                        src={blog.thumbnail}
                        alt="thumbnail"
                        className="h-[160px] w-full object-cover @[18.75rem]:h-[195px]"
                    />
                    <section className="flex h-[186px] w-5/6 flex-col items-center justify-center gap-[3px] @[18.75rem]:h-full">
                        {round !== "61" && blog && (
                            <div className="absolute top-[8px] right-[8px] flex aspect-square size-max items-center justify-center rounded-full border-1 border-solid border-pri-red bg-[#ffffff]/80 p-1 text-base text-pri-red">
                                過去
                            </div>
                        )}
                        <div className="flex w-full flex-col items-start justify-between @[18.75rem]:flex-row @[18.75rem]:items-center">
                            <p className="w-max text-[16px] text-pri-red">{blog.date}</p>
                            <p className="max-w-[100%] truncate rounded-[5px] bg-pri-red px-[6px] text-[14px]/normal text-[#ffffff] @[18.75rem]:max-w-[62%]">
                                ＃{blog.topic}
                            </p>
                        </div>
                        <p className="line-clamp-3 h-[81px] w-full text-[18px]/normal text-pri-black @[18.75rem]:line-clamp-2 @[18.75rem]:h-[66px] @[18.75rem]:text-[22px]/normal">
                            {blog.title}
                        </p>
                        <p className="w-full truncate text-end text-[15px]/normal text-pri-black">{blog.author}</p>
                    </section>
                </>
            )}
        </Link>
    );
}
