import { getBlogMetadata } from "@/impl/blog";
import BlogCardImpl from "./blog-card-impl";

export default function BlogCard({
    round,
    index,
    showPast = true,
}: {
    round: string;
    index: string;
    showPast?: boolean;
}) {
    return <BlogCardImpl round={round} index={index} showPast={showPast} blog={getBlogMetadata(round, index)} />;
}
