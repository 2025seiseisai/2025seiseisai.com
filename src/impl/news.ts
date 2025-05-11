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
    public static async getAllNews(): Promise<NewsDocument[]> {
        const news = newsCollection.find({ workspace: workspaceId }).toArray();
        return news;
    }

    public static async getNewsSortedByDate(n?: number): Promise<NewsDocument[]> {
        const cursor = newsCollection.find({ workspace: workspaceId }).sort({ date: -1 });
        if (n) {
            return cursor.limit(n).toArray();
        }
        return cursor.toArray();
    }

    public static async getNewsById(id: ObjectId): Promise<NewsDocument | null> {
        const news = newsCollection.findOne({ _id: id });
        return news;
    }

    public static getLink(id: ObjectId): string {
        return crypto.createHash("sha256").update(id.toString()).digest("base64url").substring(0, 16);
    }

    public static async getId(link: string): Promise<ObjectId | null> {
        for await (const id of newsCollection.find({ workspace: workspaceId }, { projection: { _id: 1 } })) {
            if (this.getLink(id._id) === link) {
                return id._id;
            }
        }
        return null;
    }
}
