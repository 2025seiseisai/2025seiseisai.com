import { getAllBlogs } from "@/impl/blog";
import BlogList from "./list";

export const metadata = {
    title: "Blog | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

export default async function Page() {
    return (
        <>
            <BlogList blogs={getAllBlogs()} />
        </>
    );
}
