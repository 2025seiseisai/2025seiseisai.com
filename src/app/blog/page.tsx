import { getAllBlogs } from "@/impl/blog";
import BlogList from "./list";

export const metadata = {
    title: "Blog | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

export default async function Page() {
    return (
        <>
            <h1 className="mt-[30px] mb-[25px] ml-[20px] text-[28px] font-bold md:mb-[30px] md:ml-[10svw] md:text-[40px]">
                <span className="text-[#de0d22]">B</span>log
            </h1>
            <BlogList blogs={getAllBlogs()} />
        </>
    );
}
