type HourType = "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17";
type MinuteType = "00" | "05" | "10" | "15" | "20" | "25" | "30" | "35" | "40" | "45" | "50" | "55";
export type EventData = {
    name: string;
    description?: string;
    ticket?: true;
    events: {
        display?: string;
        day: 1 | 2;
        location: (typeof locations)[number];
        start: `${HourType}:${MinuteType}`;
        end: `${HourType}:${MinuteType}`;
    }[];
};

// 場所の候補は適宜更新してください。
export const locations = ["中庭", "体育館", "転心殿前"] as const;
export const eventData: EventData[] = [
    // 以下は一例です。
    {
        name: "Mr.美少女コンテスト",

        // descriptionは省略可です。
        description:
            "え可愛くない？可愛すぎない？惚れるよ？好き！大好き！あーもうずっと見てたい…もちろん君も見るよね？",

        // 整理券が必要なイベントは以下のようにしてください。
        ticket: true,

        events: [
            {
                // displayは省略可です。
                display: "予選A (晴天時)",

                day: 1,
                location: "中庭",
                start: "09:30",
                end: "10:00",
            },

            {
                display: "予選B (晴天時)",

                day: 1,
                location: "中庭",
                start: "11:50",
                end: "12:10",
            },

            {
                display: "決勝",

                day: 2,
                location: "体育館",
                start: "15:40",
                end: "16:00",
            },

            {
                display: "予選A (雨天時)",

                day: 1,
                location: "体育館",
                start: "11:40",
                end: "12:10",
            },

            {
                display: "予選B (雨天時)",

                day: 1,
                location: "体育館",
                start: "14:00",
                end: "14:30",
            },
        ],
    },
];
