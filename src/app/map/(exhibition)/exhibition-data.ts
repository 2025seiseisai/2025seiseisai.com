import { clubMagazineLinks } from "@/app/downloads/downloads-data";
import type { eventNames } from "@/app/events/event-data";
import type { BlogKey } from "@/blogs/blog-data";
import { exhibitionIcons } from "./exhibition-icons";

export enum ExhibitionFloor {
    高校棟1階 = 1,
    高校棟2階 = 2,
    高校棟3階 = 3,
    高校棟4階 = 4,
    中学棟1階 = 5,
    中学棟2階 = 6,
    中学棟3階 = 7,
}

export const locations = {
    // 適宜更新してください。
    "6年A組": ExhibitionFloor.高校棟1階,
    "6年B組": ExhibitionFloor.高校棟1階,
    "6年C組": ExhibitionFloor.高校棟1階,
} as const satisfies Record<string, ExhibitionFloor>;

export const exhibitionData = {
    // 以下は一例です。
    MGA同好会: {
        location: "6年A組", // locationsの中から選択
        icon: exhibitionIcons["MGA同好会"], // アイコンは新規団体だとないやつもあるので、その場合は exhibitionIcons["fallback"] にしといてください。
        description: "MGA同好会にぜひお越しください！",
        twitter_link: "https://x.com/mga_club", // なければ省略 (https://x.com/i/lists/1436285198606340103/members)
        instagram_link: "https://www.instagram.com/mga_club/", // 適当にググってください。無理して調べる必要はないです。
        facebook_link: "https://www.facebook.com/mga.club", // 適当にググってください。無理して調べる必要はないです。
        website_link: "https://example.com", // 書かなくて大丈夫です。もし現在も更新されているサイトで知っているのがあれば書いてください。
        events: ["体験型ミステリー", "PTAコーラス", "T1グランプリ"], // eventsの中から選択。詳しくはsrc/app/events/event-data.tsを参照してください。
        blogs: ["59/01", "60/03"], // blogページを見て、関係しているのがあれば書いてください。
        club_magazine: clubMagazineLinks["MGA同好会"], // まだデータがないので書かなくて大丈夫です。
    },
    帰宅部: {
        location: "6年B組",
        icon: exhibitionIcons["fallback"],
        description: "帰宅部の展示にぜひお越しください！",
        // twitter_link, instagram_link, facebook_link, website_link, events, blogs, club_magazineは省略可なので、必要に応じて追加してください。
    },
} as const satisfies Record<
    string,
    {
        location: keyof typeof locations;
        icon: string;
        description: string;
        twitter_link?: string;
        instagram_link?: string;
        facebook_link?: string;
        website_link?: string;
        events?: (typeof eventNames)[number][];
        blogs?: BlogKey[];
        club_magazine?: string;
    }
>;
