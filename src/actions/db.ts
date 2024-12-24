"use server";
import { collections } from "@/db";
import { VisitorIDsDay1, VisitorIDsDay2 } from "@/settings/settings";
import { GenerateTicketsPDFImpl } from "@/impl/gentickets";

export async function GetGoodsData(day: 1 | 2) {
    return (await collections.goods.find().toArray()).map((value) => (day == 1 ? value.remain_day1 : value.remain_day2)) as number[];
}

export async function SetGoodsData(index: number, value: number, day: 1 | 2) {
    await collections.goods.updateMany({ index: index }, day == 1 ? { $set: { remain_day1: value } } : { $set: { remain_day2: value } });
}

export async function GetNewsData() {
    return (await collections.news.find().toArray()).map((value) => [value.title, value.id, value.date, value.tag, value.content]).flat() as string[];
}

export async function SetNewsData(data: string[]) {
    let splitted: any[] = [];
    for (let i = 0; i < data.length; i += 5) splitted.push({ title: data[i], id: data[i + 1], date: data[i + 2], tag: data[i + 3], content: data[i + 4] });
    await collections.news.deleteMany();
    if (splitted.length != 0) await collections.news.insertMany(splitted);
}

export async function InitTicketsData() {
    console.log("Deleting...");
    await collections.tickets.deleteMany();
    console.log("Generating...");
    const getRandomID = () => {
        let S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let N = 15;
        return Array.from(crypto.getRandomValues(new Uint8Array(N)))
            .map((n) => S[n % S.length])
            .join("");
    };
    let result: any[] = [];
    for (let i = 0; i < VisitorIDsDay1; ++i) result.push({ id: getRandomID(), number: i, day: 1 });
    for (let i = 0; i < VisitorIDsDay2; ++i) result.push({ id: getRandomID(), number: i + 10000, day: 2 });
    console.log("saving...");
    await collections.tickets.insertMany(result);
    console.log("finished");
}

export async function GenerateTicketsPDF() {
    await GenerateTicketsPDFImpl();
}
