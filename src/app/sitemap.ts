import { getAllBlogs } from "@/impl/blog";
import NewsManager from "@/impl/news";
import type { MetadataRoute } from "next";

export const revalidate = 180;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const defaultPages = [
        {
            url: "https://seiseisai.com/",
            lastModified: new Date(),
            priority: 1.0,
        },
        {
            url: "https://seiseisai.com/2025/news",
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: "https://seiseisai.com/2025/blog",
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: "https://seiseisai.com/2025/reservation",
            lastModified: new Date(),
            priority: 0.4,
        },
        {
            url: "https://seiseisai.com/2025/archives",
            lastModified: new Date(),
            priority: 0.4,
        },
        {
            url: "https://seiseisai.com/2025/contact",
            lastModified: new Date(),
            priority: 0.2,
        },
        {
            url: "https://seiseisai.com/2025/privacy-policy",
            lastModified: new Date(),
            priority: 0.2,
        },
    ];

    const newsPages = (await NewsManager.getAllNews()).map(({ id, importance }) => {
        return {
            url: `https://seiseisai.com/2025/news/${NewsManager.getLink(id)}`,
            lastModified: new Date(),
            priority: importance ? 0.4 : 0.3,
        };
    });

    const blogPages = getAllBlogs().map(({ round, index, date }) => {
        return {
            url: `https://seiseisai.com/2025/blog/${round}/${index}`,
            lastModified: new Date(),
            priority: date.replaceAll(".", "/").split("/")[0] === "2025" ? 0.6 : 0.4,
        };
    });

    return [...defaultPages, ...newsPages, ...blogPages];
}
