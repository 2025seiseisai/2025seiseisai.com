import { MongoClient } from "mongodb";

const connectStr = process.env.DB_ADMIN;
if (connectStr === undefined) throw Error();
const client = await new MongoClient(connectStr).connect();
const dataBase = client.db("61st");
export const collections = {
    news: dataBase.collection("news"),
    goods: dataBase.collection("goods"),
    tickets: dataBase.collection("tickets"),
};
