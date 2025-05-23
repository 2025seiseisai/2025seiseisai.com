import { enumetateParams, getBlogMetadata } from "@/impl/blog";
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export function generateStaticParams() {
    return enumetateParams();
}

export const alt = "Thumbnail";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage({ params }: { params: Promise<{ round: string; index: string }> }) {
    const { round, index } = await params;
    const blog = getBlogMetadata(round, index);
    const data = await readFile(path.join(process.cwd(), blog.thumbnailPath));
    const buf = Uint8Array.from(data).buffer;
    return new ImageResponse(
        (
            <div
                style={{
                    background: "white",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
            >
                {
                    // @ts-expect-error This is an expected error..
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={buf} alt={alt} />
                }
            </div>
        ),
        {
            ...size,
        },
    );
}
