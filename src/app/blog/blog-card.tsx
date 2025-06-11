import { getBlogMetadata } from "@/impl/blog";
import BlogCardImpl from "./blog-card-impl";

export default function BlogCard({ round, index }: { round: string; index: string }) {
    return <BlogCardImpl round={round} index={index} blog={getBlogMetadata(round, index)} />;
}
