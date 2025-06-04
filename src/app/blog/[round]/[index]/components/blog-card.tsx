import { blogData } from "@/blogs/blog-data";

import Image from "next/image";
import Link from "next/link";

/**
 * Return a visual link component to the specified blog post.
 * @example <BlogCard path={"61/01"} />
 * @param path - Specify the blog post to display. `("<round>/<index>")`
 */
export default function BlogCard({ path }: { path: string }) {
    const blog = blogData[path];
    return (
        <Link
            href={`/2025/blog/${path}`}
            className="relative flex h-fit w-87.5 max-w-[70svw] flex-initial flex-row flex-wrap justify-center overflow-hidden rounded-[0.625rem] border-2 border-[#de0d22] bg-[#f7f7f7] transition duration-500 ease-in-out hover:scale-102 hover:opacity-90"
        >
            <Image src={blog.thumbnail} alt="thumbnail" className="z-0 aspect-16/9 w-full" />
            {!path.startsWith("61/") && (
                <div className="absolute top-1 right-1 z-1 flex aspect-square size-max items-center justify-center rounded-full border-1 border-solid border-[#de0d22] bg-[#ffffff]/80 text-base/normal text-[#de0d22]">
                    過去
                </div>
            )}
            <p className="mt-3.75 mr-auto ml-[8.33333%] h-6 w-9/10 text-base text-[#de0d22] md:w-max">{blog.date}</p>
            <p className="mr-[8.33333%] ml-auto h-4.75 w-max max-w-2/3 truncate rounded-[0.3125rem] bg-[#de0d22] px-1.5 text-sm/normal text-[#ffffff] md:mt-4 md:max-w-[calc(83%-6rem)]">
                ＃{blog.topic}
            </p>
            <p className="line-clamp-3 h-22.5 w-5/6 text-left text-xl/normal text-[#0b0e0f] sm:line-clamp-2 sm:h-15">
                {blog.title}
            </p>
            <p className="mr-[8.33333%] mb-3.75 ml-auto w-max max-w-2/3 truncate text-[0.9375rem]/normal text-[#0b0e0f]">
                {blog.author}
            </p>
        </Link>
    );
}
