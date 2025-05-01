import { enumetateParams } from "@/blogs/blog-impl";
import OpenGraphImage, { alt as og_alt, contentType as og_ct, size as og_size } from "./opengraph-image";
export const alt = og_alt;
export const size = og_size;
export const contentType = og_ct;
export default OpenGraphImage;
export function generateStaticParams() {
    return enumetateParams();
}
