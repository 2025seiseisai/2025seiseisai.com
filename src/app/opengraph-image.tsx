import { readFile } from "fs/promises";
import { ImageResponse } from "next/og";

export const alt = "Open Graph Image";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
    const imageBuffer = await readFile(`${process.cwd()}/src/app/og-image.png`);
    return new ImageResponse(
        (
            // @ts-expect-error This is an expected error..
            // eslint-disable-next-line
            <img src={Uint8Array.from(imageBuffer).buffer} alt="Open Graph Image" />
        ),
        {
            ...size,
        },
    );
}
