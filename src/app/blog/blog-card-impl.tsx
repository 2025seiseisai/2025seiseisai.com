import type { BlogMetadata } from "@/impl/blog";
import spinnerStyles from "./spinner.module.scss";

import Image from "next/image";
import Link from "next/link";

export default function BlogCardImpl({ round, index, blog }: { round: string; index: string; blog?: BlogMetadata }) {
    return (
        <Link
            href={`/2025/blog/${round}/${index}`}
            className="@container relative flex min-h-85 w-87.5 max-w-[calc(100svw_-_40px_-_10dvw)] flex-initial flex-row flex-wrap justify-center overflow-hidden rounded-[0.625rem] border-2 border-pri-red bg-[#f7f7f7] transition duration-500 ease-in-out hover:scale-102 hover:opacity-90"
        >
            {!blog && (
                <div className="absolute flex h-full w-full items-center justify-center">
                    <div className={spinnerStyles.spinner}></div>
                </div>
            )}
            {blog ? (
                <Image src={blog.thumbnail} alt="thumbnail" className="aspect-16/9 w-full object-cover" />
            ) : (
                <div className="aspect-16/9 w-full" />
            )}
            {round !== "61" && blog && (
                <div className="absolute top-1 right-1 flex aspect-square size-max items-center justify-center rounded-full border-1 border-solid border-pri-red bg-[#ffffff]/80 p-1 text-base text-pri-red">
                    過去
                </div>
            )}
            <p className="mt-3.75 mr-auto ml-[8.33333%] h-6 w-9/10 text-base text-pri-red @[18.75rem]:w-max">
                {blog ? blog.date : ""}
            </p>
            {blog && (
                <p className="mr-[8.33333%] ml-auto h-4.75 w-max max-w-2/3 truncate rounded-[0.3125rem] bg-pri-red px-1.5 text-sm/normal text-[#ffffff] @[18.75rem]:mt-[1.03rem] @[18.75rem]:max-w-[calc(83%-6rem)]">
                    ＃{blog.topic}
                </p>
            )}
            <p className="line-clamp-3 h-22.5 w-5/6 text-left text-xl/normal text-pri-black @[18.75rem]:line-clamp-2 @[18.75rem]:h-15">
                {blog ? blog.title : ""}
            </p>
            <p className="mr-[8.33333%] mb-3.75 ml-auto w-max max-w-2/3 truncate text-[0.9375rem]/normal text-pri-black">
                {blog ? blog.author : ""}
            </p>
        </Link>
    );
}
