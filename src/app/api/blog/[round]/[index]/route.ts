import { enumerateParams, getBlogMetadata } from "@/impl/blog";
import { NextRequest, NextResponse } from "next/server";

export const dynamicParams = false;

export function generateStaticParams() {
    return enumerateParams();
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ round: string; index: string }> }) {
    const { round, index } = await params;
    const metadata = getBlogMetadata(round, index);
    if (metadata.title === undefined) {
        return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }
    return NextResponse.json(metadata, { status: 200 });
}
