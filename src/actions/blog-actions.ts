"use server";

import { getBlogMetadata } from "@/impl/blog";

export async function getBlogMetadataAction(round: string, index: string) {
    return getBlogMetadata(round, index);
}
