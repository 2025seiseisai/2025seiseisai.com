import { enumetateParams } from "@/blogs/blog-impl";
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";

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
    const data = await readFile(`${process.cwd()}/src/blogs/${round}/${index}/thumbnail.png`);
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
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={`data:image/png;base64,${data.toString("base64")}`} alt={alt} />
                }
            </div>
        ),
        {
            ...size,
        },
    );
}
