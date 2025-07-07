"use client";
import type { BlogMetadata } from "@/impl/blog";
import BlogCardImpl from "../../../blog-card-impl";

import { useEffect, useState } from "react";

export default function BlogCardClient({
    round,
    index,
    showPast = true,
}: {
    round: string;
    index: string;
    showPast?: boolean;
}) {
    const [blog, setBlog] = useState<BlogMetadata | undefined>(undefined);
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`/2025/api/blog/${round}/${index}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch blog metadata: ${response.statusText}`);
                }
                const metadata: BlogMetadata = await response.json();
                setBlog(metadata);
            } catch (error) {
                console.error("Error fetching blog metadata:", error);
                setBlog(undefined);
            }
        })();
    }, [index, round]);

    return <BlogCardImpl round={round} index={index} showPast={showPast} blog={blog} />;
}
