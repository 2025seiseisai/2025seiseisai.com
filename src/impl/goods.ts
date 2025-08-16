import dbClient, { type GoodsStock } from "./database";

export async function getGoodsStock(): Promise<Record<string, GoodsStock>> {
    const goods = await dbClient.goods.findMany({
        select: {
            name: true,
            stock: true,
        },
    });
    return goods.reduce(
        (acc, item) => {
            acc[item.name] = item.stock;
            return acc;
        },
        {} as Record<string, GoodsStock>,
    );
}
