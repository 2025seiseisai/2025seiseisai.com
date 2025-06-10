import { blogData } from "@/blogs/blog-data";

import Image from "next/image";
import Link from "next/link";

/**
 * Return a visual link component to the specified blog post.
 * @example <BlogCard path={"61/01"} />
 * @param path - Specify the blog post to display. `("<round>/<index>")`
 * @param bShow - Determine whether to display the blog card in the max-b: environment.
 */
export default function BlogCard({ path, bShow = true }: { path: string; bShow?: boolean }) {
    const blog = blogData[path];
    return (
        <Link
            href={`/2025/blog/${path}`}
            className={`@container relative flex h-fit w-87.5 max-w-[70svw] flex-initial flex-row flex-wrap justify-center overflow-hidden rounded-[0.625rem] border-2 border-pri-red bg-[#f7f7f7] transition duration-500 ease-in-out hover:scale-102 hover:opacity-90 ${!bShow && "max-b:hidden max-b:justify-center"}`}
        >
            <Image src={blog.thumbnail} alt="thumbnail" className="z-0 aspect-16/9 w-full" />
            {!path.startsWith("61/") && (
                <div className="absolute top-1 right-1 z-1 flex aspect-square size-max items-center justify-center rounded-full border-1 border-solid border-pri-red bg-[#ffffff]/80 p-1 text-base/normal text-pri-red">
                    過去
                </div>
            )}
            <p className="mt-3.75 mr-auto ml-[8.33333%] h-6 w-9/10 text-base text-pri-red md:w-max">{blog.date}</p>
            <p className="mr-[8.33333%] ml-auto h-4.75 w-max max-w-2/3 truncate rounded-[0.3125rem] bg-pri-red px-1.5 text-sm/normal text-[#ffffff] md:mt-[1.03rem] md:max-w-[calc(83%-6rem)]">
                ＃{blog.topic}
            </p>
            <p className="line-clamp-3 h-22.5 w-5/6 text-left text-xl/normal text-pri-black sm:line-clamp-2 sm:h-15">
                {blog.title}
            </p>
            <p className="mr-[8.33333%] mb-3.75 ml-auto w-max max-w-2/3 truncate text-[0.9375rem]/normal text-pri-black">
                {blog.author}
            </p>
        </Link>
    );
}
