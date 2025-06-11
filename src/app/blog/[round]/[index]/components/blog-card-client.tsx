"use client";
import { getBlogMetadataAction } from "@/actions/blog-actions";
import type { BlogMetadata } from "@/impl/blog";
import BlogCardImpl from "../../../blog-card-impl";

import { useEffect, useState } from "react";

/**
 * Return a visual link component to the specified blog post.
 * @example <BlogCard path={"61/01"} />
 * @param path - Specify the blog post to display. `("<round>/<index>")`
 */
export default function BlogCardClient({ round, index }: { round: string; index: string }) {
    const [blog, setBlog] = useState<BlogMetadata | undefined>(undefined);
    useEffect(() => {
        (async () => {
            setBlog(await getBlogMetadataAction(round, index));
        })();
    }, [index, round]);

    return <BlogCardImpl blog={blog} round={round} index={index} />;
}
