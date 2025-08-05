type HourType = "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "?";
type MinuteType = "00" | "05" | "10" | "15" | "20" | "25" | "30" | "35" | "40" | "45" | "50" | "55" | "?";
export type EventData = {
    name: string;
    description?: string;
    ticket?: true | false | "pending";
    events: {
        display?: string;
        day: 1 | 2 | "pending";
        location: (typeof locations)[number];
        start: `${HourType}:${MinuteType}`;
        end: `${HourType}:${MinuteType}`;
    }[];
};
export const locations = [
    "中庭",
    "体育館",
    "転心殿前",
    "圓融館",
    "小講堂",
    "視聴覚室",
    "4A",
    "音楽室",
    "2B",
    "3A",
    "3B",
    "4E",
    "5E",
    "情報教室",
    "物理室",
    "地学室",
    "上グラウンド",
    "お化け屋敷",
    "pending",
] as const;
export const eventData: EventData[] = [
    {
        name: "かわいいだけじゃだめですか？",
        description: "CUTIE STREETの、かわいいだけじゃだめですか？を踊ります",
        ticket: "pending",
        events: [
            {
                display: "",
                day: 1,
                location: "pending",
                start: "?:?",
                end: "?:?",
            },
        ],
    },
    {
        name: "レゴプログラミング講習会",
        description:
            "レゴで作られたロボットを動かすプログラミングを体験してもらいます。地学室を使って2日とも1時間の講習を2回ずつ行います。一回の講習で5人までの参加が可能です。",
        ticket: true,
        events: [
            {
                day: 1,
                location: "地学室",
                start: "11:00",
                end: "12:00",
            },
            {
                day: 1,
                location: "地学室",
                start: "13:00",
                end: "14:00",
            },
            {
                day: 2,
                location: "地学室",
                start: "09:30",
                end: "10:30",
            },
            {
                day: 2,
                location: "地学室",
                start: "11:00",
                end: "12:00",
            },
        ],
    },
    {
        name: "無差別級ビブリオバトル",
        description: "紹介するものが広義の本なビブリオバトル",
        ticket: "pending",
        events: [
            {
                day: 1,
                location: "視聴覚室",
                start: "13:50",
                end: "14:50",
            },
            {
                day: 2,
                location: "視聴覚室",
                start: "13:50",
                end: "14:50",
            },
        ],
    },
    {
        name: "釈迦釈迦BOYS",
        description: "バンドをします。",
        ticket: "pending",
        events: [
            {
                day: "pending",
                location: "pending",
                start: "?:?",
                end: "?:?",
            },
        ],
    },
    {
        name: "音楽部ライブ",
        description: "音楽部によるバンド演奏",
        ticket: "pending",
        events: [
            {
                day: 1,
                location: "圓融館",
                start: "13:20",
                end: "15:00",
            },
            {
                day: 2,
                location: "圓融館",
                start: "10:10",
                end: "11:50",
            },
        ],
    },
    {
        name: "映画祭",
        description: "小講堂で生徒が作ったオリジナル映画を上映します",
        ticket: "pending",
        events: [
            {
                day: 1,
                location: "小講堂",
                start: "10:50",
                end: "11:30",
            },
            {
                day: 1,
                location: "小講堂",
                start: "12:40",
                end: "13:20",
            },
            {
                day: 1,
                location: "小講堂",
                start: "14:10",
                end: "14:50",
            },
            {
                day: 2,
                location: "小講堂",
                start: "10:50",
                end: "11:30",
            },
            {
                day: 2,
                location: "小講堂",
                start: "12:40",
                end: "13:20",
            },
            {
                day: 2,
                location: "小講堂",
                start: "14:10",
                end: "14:50",
            },
        ],
    },
    {
        name: "和太鼓演奏",
        description: "和太鼓を演奏します",
        ticket: false,
        events: [
            {
                day: 1,
                location: "転心殿前",
                start: "09:00",
                end: "09:50",
            },
            {
                day: 1,
                location: "転心殿前",
                start: "13:30",
                end: "14:10",
            },
            {
                day: 2,
                location: "転心殿前",
                start: "09:00",
                end: "09:50",
            },
            {
                day: 2,
                location: "転心殿前",
                start: "13:30",
                end: "14:10",
            },
        ],
    },
    {
        name: "スリーレッドメン",
        description: "有志バンド",
        ticket: "pending",
        events: [
            {
                day: 1,
                location: "音楽室",
                start: "10:10",
                end: "10:40",
            },
        ],
    },
    {
        name: "江南無スタイル",
        description: "カンナムスタイルを踊る",
        ticket: "pending",
        events: [
            {
                day: "pending",
                location: "pending",
                start: "?:?",
                end: "?:?",
            },
        ],
    },
    {
        name: "室内楽部定期演奏会",
        description: "室内楽部による圓融館での演奏会",
        ticket: "pending",
        events: [
            {
                day: 1,
                location: "圓融館",
                start: "11:20",
                end: "13:00",
            },
            {
                day: 2,
                location: "圓融館",
                start: "13:20",
                end: "15:00",
            },
        ],
    },
    {
        name: "菁々コンサート",
        description: "有志の生徒が、圓融館で、曲を演奏する。",
        ticket: "pending",
        events: [
            {
                day: 1,
                location: "圓融館",
                start: "09:00",
                end: "09:50",
            },
            {
                day: 2,
                location: "圓融館",
                start: "09:00",
                end: "09:50",
            },
        ],
    },
    {
        name: "やさしい落語",
        description: "現代口語で落語をする",
        ticket: "pending",
        events: [
            {
                day: 2,
                location: "4A",
                start: "10:30",
                end: "11:00",
            },
        ],
    },
    {
        name: "TDJ48",
        description: "坂道系を中心とした曲を女装して踊ります。",
        ticket: false,
        events: [
            {
                day: 1,
                location: "体育館",
                start: "12:10",
                end: "12:30",
            },
            {
                day: 1,
                location: "体育館",
                start: "16:30",
                end: "16:50",
            },
            {
                day: 2,
                location: "体育館",
                start: "13:10",
                end: "13:30",
            },
            {
                day: 2,
                location: "体育館",
                start: "16:30",
                end: "16:50",
            },
        ],
    },
    {
        name: "ロケット発射実験",
        description: "上グラウンドでロケットを打ち上げる",
        ticket: false,
        events: [
            {
                day: 1,
                location: "上グラウンド",
                start: "10:30",
                end: "10:50",
            },
            {
                day: 1,
                location: "上グラウンド",
                start: "13:30",
                end: "13:50",
            },
            {
                day: 2,
                location: "上グラウンド",
                start: "10:30",
                end: "10:50",
            },
            {
                day: 2,
                location: "上グラウンド",
                start: "14:00",
                end: "14:20",
            },
        ],
    },
    {
        name: "ラブライブ！サンスクリット‼︎",
        description: "ラブライブシリーズのコピーダンスユニットです。",
        ticket: false,
        events: [
            {
                day: 1,
                location: "体育館",
                start: "11:50",
                end: "12:10",
            },
            {
                day: 1,
                location: "体育館",
                start: "15:50",
                end: "16:10",
            },
            {
                day: 2,
                location: "体育館",
                start: "12:40",
                end: "13:00",
            },
            {
                day: 2,
                location: "体育館",
                start: "16:50",
                end: "17:10",
            },
        ],
    },
    {
        name: "T(DJ)²",
        description:
            "東大寺生によるDJイベントです。ジャンル問わず様々な曲を流します。1日数名程度、持ち時間は30〜50分を想定しています。",
        ticket: "pending",
        events: [
            {
                day: 1,
                location: "4A",
                start: "11:50",
                end: "12:10",
            },
            {
                day: 1,
                location: "体育館",
                start: "14:10",
                end: "15:00",
            },
            {
                day: 2,
                location: "4A",
                start: "11:20",
                end: "12:20",
            },
        ],
    },
    {
        name: "マッスルコンテスト",
        description: "色々な種目により、東大寺学園の筋肉王を決める。1対1で勝ち上がりで行う。",
        ticket: false,
        events: [
            {
                day: "pending",
                location: "pending",
                start: "?:?",
                end: "?:?",
            },
        ],
    },
    {
        name: "E卍ILE",
        description:
            "BTSをはじめとしたK-POPの楽曲で、キレのあるパフォーマンスをお届けします! ダンス、表情、フォーメーション——細部までこだわって仕上げたステージは必見。憧れのアーティストに少しでも近づけるよう、全力で練習してきました。 一緒に盛り上がってください！応援よろしくお願いします！",
        ticket: false,
        events: [
            {
                day: 1,
                location: "体育館",
                start: "12:50",
                end: "13:10",
            },
            {
                day: 1,
                location: "体育館",
                start: "16:10",
                end: "16:30",
            },
            {
                day: 2,
                location: "体育館",
                start: "12:20",
                end: "12:40",
            },
            {
                day: 2,
                location: "体育館",
                start: "15:30",
                end: "15:50",
            },
        ],
    },
    {
        name: "異次元フェス",
        description: "マスとラ！の合同イベント",
        ticket: "pending",
        events: [
            {
                day: "pending",
                location: "pending",
                start: "?:?",
                end: "?:?",
            },
        ],
    },
    {
        name: "クイズ研究部",
        description: "クイズ大会他校のクイズ研究部を招待し、早押しクイズなどを行って優勝チームを決める。",
        ticket: "pending",
        events: [
            {
                day: 1,
                location: "視聴覚室",
                start: "10:50",
                end: "11:50",
            },
        ],
    },
    {
        name: "プレゼン、ゲーム大会の二種類",
        description: "プログラミングに関するプレゼンと、部員の自作ゲームのゲーム大会",
        ticket: "pending",
        events: [
            {
                day: "pending",
                location: "pending",
                start: "?:?",
                end: "?:?",
            },
        ],
    },
    {
        name: "寺マス",
        description: "アイドルマスターズの曲を女装して踊ります",
        ticket: false,
        events: [
            {
                day: 1,
                location: "体育館",
                start: "12:30",
                end: "12:50",
            },
            {
                day: 1,
                location: "体育館",
                start: "15:30",
                end: "15:50",
            },
            {
                day: 2,
                location: "体育館",
                start: "12:00",
                end: "12:20",
            },
            {
                day: 2,
                location: "体育館",
                start: "15:50",
                end: "16:10",
            },
        ],
    },
];
