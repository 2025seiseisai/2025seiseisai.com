type HourType = "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17";
type MinuteType = "00" | "05" | "10" | "15" | "20" | "25" | "30" | "35" | "40" | "45" | "50" | "55";
export type EventData = {
    name: string;
    description?: string;
    ticket?: true;
    day1: EventDetail[];
    day2: EventDetail[];
};
export type EventDetail = {
    label?: string;
    location: (typeof locations)[number];
    start: `${HourType}:${MinuteType}`;
    end: `${HourType}:${MinuteType}`;
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
    "5A",
    "情報教室",
    "物理室",
    "地学室",
    "上グラウンド",
    "お化け屋敷",
] as const;
export const eventData: EventData[] = [
    {
        name: "中2演劇",
        day1: [{ location: "体育館", start: "09:00", end: "09:50" }],
        day2: [],
    },
    {
        name: "中1合唱・ハンドベル",
        day1: [{ location: "体育館", start: "10:10", end: "11:00" }],
        day2: [],
    },
    {
        name: "中1ダンス",
        day1: [
            { label: "晴天時", location: "転心殿前", start: "11:30", end: "11:50" },
            { label: "雨天時", location: "体育館", start: "10:50", end: "11:00" },
        ],
        day2: [{ label: "晴天時", location: "転心殿前", start: "12:10", end: "12:30" }],
    },
    {
        name: "和太鼓演奏",
        description: "和太鼓を演奏します",
        day1: [
            { label: "晴天時", location: "転心殿前", start: "09:00", end: "09:50" },
            { label: "晴天時", location: "転心殿前", start: "13:30", end: "14:10" },
            { label: "雨天時", location: "体育館", start: "11:10", end: "11:40" },
        ],
        day2: [
            { label: "晴天時", location: "転心殿前", start: "09:00", end: "09:50" },
            { label: "晴天時", location: "転心殿前", start: "13:30", end: "14:10" },
            { label: "雨天時", location: "体育館", start: "11:10", end: "11:40" },
        ],
    },
    {
        name: "ラブライブ！サンスクリット‼︎",
        description: "ラブライブシリーズのコピーダンスユニットです。",
        day1: [
            { location: "体育館", start: "11:50", end: "12:10" },
            { location: "体育館", start: "15:50", end: "16:10" },
        ],
        day2: [
            { location: "体育館", start: "12:40", end: "13:00" },
            { location: "体育館", start: "16:50", end: "17:10" },
        ],
    },
    {
        name: "TDJ48",
        description: "坂道系を中心とした曲を女装して踊ります。",
        day1: [
            { location: "体育館", start: "12:10", end: "12:30" },
            { location: "体育館", start: "16:30", end: "16:50" },
        ],
        day2: [
            { location: "体育館", start: "13:10", end: "13:30" },
            { location: "体育館", start: "16:30", end: "16:50" },
        ],
    },
    {
        name: "寺マス",
        description: "アイドルマスターズの曲を女装して踊ります",
        day1: [
            { location: "体育館", start: "12:30", end: "12:50" },
            { location: "体育館", start: "15:30", end: "15:50" },
        ],
        day2: [
            { location: "体育館", start: "12:00", end: "12:20" },
            { location: "体育館", start: "15:50", end: "16:10" },
        ],
    },
    {
        name: "E卍ILE",
        description:
            "BTSをはじめとしたK-POPの楽曲で、キレのあるパフォーマンスをお届けします! ダンス、表情、フォーメーション——細部までこだわって仕上げたステージは必見。憧れのアーティストに少しでも近づけるよう、全力で練習してきました。 一緒に盛り上がってください！応援よろしくお願いします！",
        day1: [
            { location: "体育館", start: "12:50", end: "13:10" },
            { location: "体育館", start: "16:10", end: "16:30" },
        ],
        day2: [
            { location: "体育館", start: "12:20", end: "12:40" },
            { location: "体育館", start: "15:30", end: "15:50" },
        ],
    },
    {
        name: "令和の小町コンテスト",
        day1: [{ label: "予選", location: "体育館", start: "13:20", end: "14:00" }],
        day2: [{ label: "決勝", location: "体育館", start: "14:30", end: "15:00" }],
    },
    {
        name: "T(DJ)²",
        day1: [
            { location: "4A", start: "11:50", end: "12:10" },
            { location: "体育館", start: "14:10", end: "15:00" },
        ],
        day2: [{ location: "4A", start: "11:20", end: "12:20" }],
    },
    {
        name: "例の集団",
        day1: [{ location: "体育館", start: "16:50", end: "17:00" }],
        day2: [],
    },
    {
        name: "中3演劇",
        day1: [],
        day2: [{ location: "体育館", start: "09:00", end: "09:40" }],
    },
    {
        name: "中1演劇・ハンドベル・ダンス",
        day1: [],
        day2: [{ location: "体育館", start: "10:00", end: "10:50" }],
    },
    {
        name: "T1グランプリ",
        day1: [],
        day2: [{ location: "体育館", start: "11:10", end: "11:50" }],
    },
    {
        name: "マッスルコンテスト",
        description: "色々な種目により、東大寺学園の筋肉王を決める。1対1で勝ち上がりで行う。",
        day1: [],
        day2: [{ location: "体育館", start: "13:30", end: "14:00" }],
    },
    {
        name: "イケメンコンテスト",
        day1: [],
        day2: [{ location: "体育館", start: "14:00", end: "14:30" }],
    },
    {
        name: "結婚式",
        day1: [],
        day2: [{ location: "体育館", start: "16:10", end: "16:30" }],
    },
    {
        name: "？？？",
        day1: [],
        day2: [{ location: "体育館", start: "17:10", end: "17:30" }],
    },
    {
        name: "菁々コンサート",
        description: "有志の生徒が、圓融館で、曲を演奏する。",
        day1: [{ location: "圓融館", start: "09:00", end: "09:50" }],
        day2: [{ location: "圓融館", start: "09:00", end: "09:50" }],
    },
    {
        name: "カラオケコンテスト",
        day1: [{ label: "予選", location: "圓融館", start: "09:00", end: "09:50" }],
        day2: [{ label: "決勝", location: "圓融館", start: "09:00", end: "09:50" }],
    },
    {
        name: "室内学部定期演奏会",
        description: "室内楽部による圓融館での演奏会",
        day1: [{ location: "圓融館", start: "11:20", end: "13:00" }],
        day2: [{ location: "圓融館", start: "13:20", end: "15:00" }],
    },
    {
        name: "音楽部ライブ",
        description: "音楽部によるバンド演奏",
        day1: [{ location: "圓融館", start: "13:20", end: "15:00" }],
        day2: [{ location: "圓融館", start: "10:10", end: "11:50" }],
    },
    {
        name: "映画祭",
        description: "小講堂で生徒が作ったオリジナル映画を上映します",
        day1: [
            { location: "小講堂", start: "10:50", end: "11:30" },
            { location: "小講堂", start: "12:40", end: "13:20" },
            { location: "小講堂", start: "14:10", end: "14:50" },
        ],
        day2: [
            { location: "小講堂", start: "10:50", end: "11:30" },
            { location: "小講堂", start: "12:40", end: "13:20" },
            { location: "小講堂", start: "14:10", end: "14:50" },
        ],
    },
    {
        name: "模擬授業",
        day1: [
            { location: "視聴覚室", start: "09:30", end: "10:00" },
            { location: "視聴覚室", start: "13:00", end: "13:30" },
        ],
        day2: [
            { location: "視聴覚室", start: "09:30", end: "10:00" },
            { location: "視聴覚室", start: "13:00", end: "13:30" },
        ],
    },
    {
        name: "クイズ研究部",
        description: "クイズ大会他校のクイズ研究部を招待し、早押しクイズなどを行って優勝チームを決める。",
        day1: [{ location: "視聴覚室", start: "10:50", end: "11:50" }],
        day2: [],
    },
    {
        name: "無差別級ビブリオバトル",
        description: "紹介するものが広義の本なビブリオバトル",
        day1: [{ location: "視聴覚室", start: "13:50", end: "14:50" }],
        day2: [{ location: "視聴覚室", start: "13:50", end: "14:50" }],
    },
    {
        name: "やさしい落語",
        description: "現代口語で落語をする",
        day1: [],
        day2: [{ location: "4A", start: "10:30", end: "11:00" }],
    },
    {
        name: "スリーレッドメン",
        description: "有志バンド",
        day1: [{ location: "音楽室", start: "10:10", end: "10:40" }],
        day2: [],
    },
    {
        name: "PTAコーラス",
        day1: [],
        day2: [
            { label: "高校生", location: "音楽室", start: "09:30", end: "10:00" },
            { label: "中学生", location: "音楽室", start: "11:10", end: "11:30" },
        ],
    },
    {
        name: "PTAコーラス",
        day1: [
            { location: "2B", start: "11:00", end: "11:20" },
            { location: "2B", start: "13:00", end: "13:20" },
            { location: "2B", start: "14:30", end: "14:50" },
        ],
        day2: [
            { location: "2B", start: "11:00", end: "11:20" },
            { location: "2B", start: "13:00", end: "13:20" },
            { location: "2B", start: "14:30", end: "14:50" },
        ],
    },
    {
        name: "謎解きをキザめ",
        day1: [{ location: "3A", start: "10:00", end: "15:00" }],
        day2: [{ location: "3A", start: "09:00", end: "15:00" }],
    },
    {
        name: "TVOCオリジナル曲発表",
        day1: [{ location: "3B", start: "12:00", end: "12:15" }],
        day2: [{ location: "3B", start: "12:00", end: "12:15" }],
    },
    {
        name: "マジックショー",
        day1: [
            { location: "4E", start: "10:50", end: "11:15" },
            { location: "4E", start: "11:25", end: "11:50" },
            { location: "4E", start: "13:50", end: "14:15" },
            { location: "4E", start: "14:25", end: "14:50" },
        ],
        day2: [
            { location: "4E", start: "10:50", end: "11:15" },
            { location: "4E", start: "11:25", end: "11:50" },
            { location: "4E", start: "13:50", end: "14:15" },
            { location: "4E", start: "14:25", end: "14:50" },
        ],
    },
    {
        name: "ラジコンレース大会",
        day1: [
            { location: "5A", start: "09:30", end: "09:50" },
            { location: "5A", start: "10:30", end: "10:50" },
            { location: "5A", start: "11:30", end: "11:50" },
            { location: "5A", start: "13:30", end: "13:50" },
        ],
        day2: [
            { location: "5A", start: "10:50", end: "11:15" },
            { location: "5A", start: "11:25", end: "11:50" },
            { location: "5A", start: "13:50", end: "14:15" },
            { location: "5A", start: "14:25", end: "14:50" },
        ],
    },
    {
        name: "TDJ-RPGチャンピオンシップ",
        day1: [{ location: "情報教室", start: "11:00", end: "13:00" }],
        day2: [{ location: "情報教室", start: "11:00", end: "13:00" }],
    },
    {
        name: "競技プログラミング入門",
        day1: [{ location: "情報教室", start: "14:00", end: "15:00" }],
        day2: [{ location: "情報教室", start: "14:00", end: "15:00" }],
    },
    {
        name: "化学の演示実験",
        day1: [
            { location: "物理室", start: "11:30", end: "12:00" },
            { location: "物理室", start: "13:00", end: "13:30" },
        ],
        day2: [
            { location: "物理室", start: "11:30", end: "12:00" },
            { location: "物理室", start: "13:00", end: "13:30" },
        ],
    },
    {
        name: "解剖の演示実験",
        day1: [{ location: "物理室", start: "14:00", end: "14:30" }],
        day2: [{ location: "物理室", start: "14:00", end: "14:30" }],
    },
    {
        name: "体験型ミステリー",
        day1: [{ location: "地学室", start: "09:20", end: "10:50" }],
        day2: [{ location: "地学室", start: "13:00", end: "14:30" }],
    },
    {
        name: "レゴプログラミング講習会",
        description:
            "レゴで作られたロボットを動かすプログラミングを体験してもらいます。地学室を使って2日とも1時間の講習を2回ずつ行います。一回の講習で5人までの参加が可能です。",
        day1: [
            { location: "地学室", start: "11:00", end: "12:00" },
            { location: "地学室", start: "13:00", end: "14:00" },
        ],
        day2: [
            { location: "地学室", start: "09:30", end: "10:30" },
            { location: "地学室", start: "11:00", end: "12:00" },
        ],
    },
    {
        name: "ロケット発射実験",
        description: "上グラウンドでロケットを打ち上げる",
        day1: [
            { location: "上グラウンド", start: "10:30", end: "10:50" },
            { location: "上グラウンド", start: "13:30", end: "13:50" },
        ],
        day2: [
            { location: "上グラウンド", start: "10:30", end: "10:50" },
            { location: "上グラウンド", start: "14:00", end: "14:20" },
        ],
    },
    {
        name: "お化け屋敷",
        ticket: true,
        day1: [
            { label: "9時の部", location: "お化け屋敷", start: "09:00", end: "09:50" },
            { label: "10時の部", location: "お化け屋敷", start: "10:00", end: "10:50" },
            { label: "11時の部", location: "お化け屋敷", start: "11:00", end: "11:50" },
            { label: "13時の部", location: "お化け屋敷", start: "13:00", end: "13:50" },
            { label: "14時の部", location: "お化け屋敷", start: "14:00", end: "14:50" },
        ],
        day2: [
            { label: "9時の部", location: "お化け屋敷", start: "09:00", end: "09:50" },
            { label: "10時の部", location: "お化け屋敷", start: "10:00", end: "10:50" },
            { label: "11時の部", location: "お化け屋敷", start: "11:00", end: "11:50" },
            { label: "13時の部", location: "お化け屋敷", start: "13:00", end: "13:50" },
            { label: "14時の部", location: "お化け屋敷", start: "14:00", end: "14:50" },
        ],
    },
];
