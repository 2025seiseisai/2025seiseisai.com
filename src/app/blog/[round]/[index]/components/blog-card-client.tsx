"use client";
import { getBlogMetadataAction } from "@/actions/blog-actions";
import type { BlogMetadata } from "@/impl/blog";
import BlogCardImpl from "../../../blog-card-impl";

import { useEffect, useState } from "react";

export default function BlogCardClient({ round, index }: { round: string; index: string }) {
    const [blog, setBlog] = useState<BlogMetadata | undefined>(undefined);
    useEffect(() => {
        (async () => {
            setBlog(await getBlogMetadataAction(round, index));
        })();
    }, [index, round]);

    return <BlogCardImpl round={round} index={index} blog={blog} />;
}
