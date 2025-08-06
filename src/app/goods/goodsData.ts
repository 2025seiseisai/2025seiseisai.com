// src/app/goods/goodsData.ts
export interface Good {
    id: string;
    name: string;
    price: number;
    inStock: boolean;
    image: string;
    description: string;
}

export const goodsList: Good[] = [
    {
        id: "tshirt",
        name: "Tシャツ",
        price: 900,
        inStock: true,
        image: "/goods/assets/Tshirt.svg",
        description: "第61回菁々祭のオリジナルTシャツです。S,M,L,XLのサイズをご用意しております。",
    },
    {
        id: "pen",
        name: "ボールペン",
        price: 300,
        inStock: true,
        image: "/goods/assets/pen.svg",
        description: "「分秒」のロゴがあしらわれたチャームつき。赤・黒の2種類。",
    },
    {
        id: "mug",
        name: "マグカップ",
        price: 600,
        inStock: true,
        image: "/goods/assets/mug.svg",
        description: "ロゴ入りのマグカップです。優雅なひと時をお楽しみください。",
    },
    {
        id: "totebag",
        name: "トートバッグ",
        price: 600,
        inStock: true,
        image: "/goods/assets/totebag.svg",
        description: "時計がデザインに取り入れられた使いやすいトートバッグです。",
    },
    {
        id: "keyholder",
        name: "アクリルキーホルダー",
        price: 300,
        inStock: true,
        image: "/goods/assets/keyholder.svg",
        description: "お土産に適したアクリルキーホルダーです。カバンなどに付けてみては？",
    },
];
