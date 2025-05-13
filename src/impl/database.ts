import { Collection, Db, MongoClient, ObjectId } from "mongodb";

/**
 * A utility class for managing MongoDB connections.
 */
export class DatabaseClient {
    private client: MongoClient | null = null;
    private db: Db | null = null;
    private readonly uri: string;
    private readonly dbName: string;

    /**
     * Creates an instance of MongoDbClient.
     * @param uri The MongoDB connection string.
     * @param dbName The name of the database to connect to.
     */
    constructor(uri: string, dbName: string) {
        this.uri = uri;
        this.dbName = dbName;
    }

    /**
     * Creates an instance of MongoDbClient with default values.
     * Uses environment variables for connection string and database name.
     */
    public static constructFromEnv(envname: string, dbname: string): DatabaseClient {
        const uri = process.env[envname];
        if (!uri) {
            throw new Error(`Environment variable ${envname} is not set.`);
        }
        return new DatabaseClient(uri, dbname);
    }

    /**
     * Connects to the MongoDB server and database.
     * Throws an error if the connection fails.
     */
    public async connect(): Promise<void> {
        if (this.db) {
            return;
        }
        try {
            this.client = new MongoClient(this.uri);
            await this.client.connect();
            this.db = this.client.db(this.dbName);
            console.log(`Successfully connected to MongoDB database: ${this.dbName}`);
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
            this.client = null;
            this.db = null;
            throw error;
        }
    }

    /**
     * Closes the MongoDB connection.
     */
    public async close(): Promise<void> {
        if (this.client) {
            await this.client.close();
            this.client = null;
            this.db = null;
            console.log("MongoDB connection closed.");
        }
    }

    /**
     * Gets the Db instance.
     * Throws an error if not connected.
     * @returns The Db instance.
     */
    public getDb(): Db {
        if (!this.db) {
            throw new Error("Not connected to MongoDB. Call connect() first.");
        }
        return this.db;
    }

    /**
     * Gets a specific collection from the database.
     * Throws an error if not connected.
     * @param collectionName The name of the collection.
     * @returns The Collection instance.
     */
    public getCollection<T extends Document>(collectionName: string): Collection<T> {
        const database = this.getDb();
        return database.collection<T>(collectionName);
    }
}

export const databaseInstance = DatabaseClient.constructFromEnv("DB_ADMIN", "cultivo");
await databaseInstance.connect();

interface WorkspaceInterface {
    _id: ObjectId;
    name: string;
    users: ObjectId[];
}
interface WorkspaceDocument extends Document, WorkspaceInterface {}
export const workspaceId = await (async () => {
    const workspaceCollection = databaseInstance.getCollection<WorkspaceDocument>("workspaces");
    const workspace = await workspaceCollection.findOne({ name: "第61回東大寺学園菁々祭" });
    if (!workspace) {
        throw new Error("Workspace not found");
    }
    return workspace._id;
})();
