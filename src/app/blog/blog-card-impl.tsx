import type { BlogMetadata } from "@/impl/blog";
import spinnerStyles from "./spinner.module.scss";

import Image from "next/image";
import Link from "next/link";

export default function BlogCardImpl({ round, index, blog }: { round: string; index: string; blog?: BlogMetadata }) {
    return (
        <Link
            href={`/2025/blog/${round}/${index}`}
            prefetch={false}
            className="@container relative flex h-85 w-87.5 max-w-[calc(100svw_-_40px_-_10dvw)] flex-initial flex-row flex-wrap justify-center overflow-hidden rounded-[0.625rem] border-2 border-pri-red bg-[#f7f7f7] transition duration-500 ease-in-out hover:scale-102 hover:opacity-90"
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
                        className="aspect-16/9 h-[150px] w-full object-cover @[18.75rem]:h-auto"
                    />
                    {round !== "61" && blog && (
                        <div className="absolute top-1 right-1 flex aspect-square size-max items-center justify-center rounded-full border-1 border-solid border-pri-red bg-[#ffffff]/80 p-1 text-base text-pri-red">
                            過去
                        </div>
                    )}
                    <div className="mt-2.5 mr-[8.33333%] ml-[8.33333%] flex w-5/6 flex-col items-start justify-between @[18.75rem]:mt-3.75 @[18.75rem]:flex-row @[18.75rem]:items-center">
                        <p className="h-6 w-[100px] text-base text-pri-red">{blog.date}</p>
                        <p className="max-w-[100%] truncate rounded-[0.3125rem] bg-pri-red px-1.5 text-sm/normal text-[#ffffff] @[18.75rem]:max-w-[calc(100%-100px)]">
                            ＃{blog.topic}
                        </p>
                    </div>
                    <p className="line-clamp-3 h-22.5 w-5/6 text-left text-xl/normal text-pri-black @[18.75rem]:line-clamp-2 @[18.75rem]:h-15">
                        {blog.title}
                    </p>
                    <p className="mr-[8.33333%] mb-3.75 ml-auto w-max max-w-2/3 truncate text-[0.9375rem]/normal text-pri-black">
                        {blog.author}
                    </p>
                </>
            )}
        </Link>
    );
}
