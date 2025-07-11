import crypto from "crypto";
import dbClient, { NewsModel } from "./database";

export default class NewsManager {
    private static cachedNews: NewsModel[] | null = null;
    private static lastFetchTime: number = 0;
    private static readonly CACHE_TTL = 60 * 1000; // 60 seconds in milliseconds

    public static async getAllNews(): Promise<NewsModel[]> {
        if (this.cachedNews !== null && Date.now() - this.lastFetchTime < this.CACHE_TTL) {
            return this.cachedNews;
        }

        const news = await dbClient.news.findMany({
            orderBy: { date: "desc" },
        });
        for (const n of news) {
            n.content = n.content.replaceAll("\\n", "\n");
        }
        this.cachedNews = news;
        this.lastFetchTime = Date.now();
        return news;
    }

    public static async getNews(n: number): Promise<NewsModel[]> {
        const news = await this.getAllNews();
        return news.slice(0, n);
    }

    public static async getNewsById(id: string): Promise<NewsModel | null> {
        return (await this.getAllNews()).find((news) => news.id === id) || null;
    }

    public static getLink(id: string): string {
        return crypto.createHash("sha256").update(id).digest("base64url").substring(0, 16);
    }

    public static async getId(link: string): Promise<string | null> {
        for (const news of await this.getAllNews()) {
            if (this.getLink(news.id) === link) {
                return news.id;
            }
        }
        return null;
    }
}
