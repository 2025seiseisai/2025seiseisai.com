import crypto from "crypto";
import { ObjectId } from "mongodb";
import { databaseInstance, workspaceId } from "./database";

export interface NewsInterface {
    _id: ObjectId;
    workspace: ObjectId;
    title: string;
    date: Date;
    importance: boolean;
    content: string;
}
export interface NewsDocument extends Document, NewsInterface {}

const newsCollection = databaseInstance.getCollection<NewsDocument>("news");

export default class NewsManager {
    private static cachedNews: NewsDocument[] | null = null;
    private static lastFetchTime: number = 0;
    private static readonly CACHE_TTL = 90 * 1000; // 90 seconds in milliseconds

    private static isCacheValid(): boolean {
        return this.cachedNews !== null && Date.now() - this.lastFetchTime < this.CACHE_TTL;
    }

    public static async getAllNews(): Promise<NewsInterface[]> {
        if (this.isCacheValid()) {
            return this.cachedNews!.map((doc): NewsInterface => {
                return {
                    _id: doc._id,
                    workspace: doc.workspace,
                    title: doc.title,
                    date: doc.date,
                    importance: doc.importance,
                    content: doc.content,
                };
            });
        }

        const news = await newsCollection.find({ workspace: workspaceId }).toArray();
        this.cachedNews = news;
        this.lastFetchTime = Date.now();
        return news.map((doc): NewsInterface => {
            return {
                _id: doc._id,
                workspace: doc.workspace,
                title: doc.title,
                date: doc.date,
                importance: doc.importance,
                content: doc.content,
            };
        });
    }

    public static async getNewsSortedByDate(n?: number): Promise<NewsInterface[]> {
        await this.getAllNews(); // Ensure cache is up to date

        // Sort the cached news by date
        const sortedNews = [...this.cachedNews!].sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );

        return n ? sortedNews.slice(0, n) : sortedNews;
    }

    public static async getNewsById(id: ObjectId): Promise<NewsInterface | null> {
        await this.getAllNews(); // Ensure cache is up to date
        return this.cachedNews!.find((news) => news._id.equals(id)) || null;
    }

    public static getLink(id: ObjectId): string {
        return crypto.createHash("sha256").update(id.toString()).digest("base64url").substring(0, 16);
    }

    public static async getId(link: string): Promise<ObjectId | null> {
        await this.getAllNews(); // Ensure cache is up to date

        for (const news of this.cachedNews!) {
            if (this.getLink(news._id) === link) {
                return news._id;
            }
        }
        return null;
    }
}
