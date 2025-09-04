// import { clubMagazineLinks } from "@/app/downloads/downloads-data";
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
    "1年A組": ExhibitionFloor.中学棟1階,
    "1年B組": ExhibitionFloor.中学棟1階,
    "1年C組": ExhibitionFloor.中学棟1階,
    "1年C組, 1年D組, 1年E組": ExhibitionFloor.中学棟1階,
    "2年A組": ExhibitionFloor.中学棟2階,
    "2年B組": ExhibitionFloor.中学棟2階,
    "2年C組, 2年D組, 2年E組": ExhibitionFloor.中学棟2階,
    "3年A組": ExhibitionFloor.中学棟3階,
    "3年B組": ExhibitionFloor.中学棟3階,
    "3年C組": ExhibitionFloor.中学棟3階,
    "3年D組, 3年E組": ExhibitionFloor.中学棟3階,
    "4年A組": ExhibitionFloor.高校棟4階,
    "4年B組": ExhibitionFloor.高校棟4階,
    "4年C組": ExhibitionFloor.高校棟4階,
    "4年D組": ExhibitionFloor.高校棟4階,
    "4年E組": ExhibitionFloor.高校棟4階,
    "5年A組": ExhibitionFloor.高校棟3階,
    "5年B組": ExhibitionFloor.高校棟3階,
    "5年C組": ExhibitionFloor.高校棟3階,
    "5年D組": ExhibitionFloor.高校棟3階,
    "5年E組": ExhibitionFloor.高校棟3階,
    "6年A組": ExhibitionFloor.高校棟2階,
    "6年B組": ExhibitionFloor.高校棟2階,
    "6年C組": ExhibitionFloor.高校棟2階,
    "6年D組": ExhibitionFloor.高校棟2階,
    "6年E組": ExhibitionFloor.高校棟2階,
    "6年F組": ExhibitionFloor.高校棟1階,
    和室: ExhibitionFloor.中学棟2階,
    "演習室B, 演習室C": ExhibitionFloor.高校棟2階,
    演習室D: ExhibitionFloor.高校棟2階,
    生物室: ExhibitionFloor.高校棟3階,
    図書室: ExhibitionFloor.高校棟3階,
    情報教室: ExhibitionFloor.高校棟4階,
    美術室: ExhibitionFloor.高校棟4階,
} as const satisfies Record<string, ExhibitionFloor>;

/*
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
        tweet_link: "https://x.com/seiseisai_tdj/status/1954896745940615445", // 展示団体の紹介。まだ書かなくて大丈夫です。
    },
    帰宅部: {
        location: "6年B組",
        icon: exhibitionIcons["fallback"],
        description: "帰宅部の展示にぜひお越しください！",
        // twitter_link, instagram_link, facebook_link, website_link, events, blogs, club_magazineは省略可なので、必要に応じて追加してください。
    },
 */
const exhibitionDataRaw = {
    書道部: {
        location: "1年A組",
        icon: exhibitionIcons["書道部"],
        stamp: true,
        description: "1Aにて書道作品を展示しています。団扇、半紙に好きな文字も書かせてもらってるので是非お越し下さい。",
        twitter_link: "https://x.com/tdj_shodou",
        blogs: ["60/05"],
    },
    東菁会: {
        location: "1年B組",
        icon: exhibitionIcons["東菁会"],
        stamp: false,
        description:
            "東菁会は卒業生の保護者の会です。川柳・水墨画・陶芸・俳句の会が練習の成果を発表しています。ぜひ、ご覧ください。",
    },
    独楽研究会: {
        location: "1年C組",
        icon: exhibitionIcons["独楽研究会"],
        stamp: true,
        description: "ベーゴマとコマを展示してます。体験もできるので、ぜひ来てください！",
        twitter_link: "https://x.com/tdj_dokuraku",
    },
    中１学年展示: {
        location: "1年C組, 1年D組, 1年E組",
        icon: exhibitionIcons["学年展示"],
        stamp: false,
        description:
            "授業や班で制作した作品や、テーマの「分秒」に沿ったステンドグラス、黒板アート、モニュメントなどを展示しています。",
    },
    囲碁将棋部: {
        location: "2年A組",
        icon: exhibitionIcons["囲碁将棋部"],
        stamp: true,
        description: "今年も部員と対局できます。部員に平手で勝てたら景品も！！",
        twitter_link: "https://x.com/tdjsyogibu",
        blogs: ["59/02"],
    },
    オセロ同好会: {
        location: "2年B組",
        icon: exhibitionIcons["オセロ同好会"],
        stamp: true,
        description: "誰もがルールを知っているオセロで白熱の戦いを繰り広げませんか？ぜひ一度お越しください！",
        blogs: ["59/02"],
    },
    チェス研究会: {
        location: "2年B組",
        icon: exhibitionIcons["チェス研究会"],
        stamp: true,
        description: "皆さんにチェスのルールを知ってもらい、友達や部員と対戦することができます！",
        twitter_link: "https://x.com/tdj_chessken",
        events: ["チェスのルール説明"],
    },
    中２学年展示: {
        location: "2年C組, 2年D組, 2年E組",
        icon: exhibitionIcons["学年展示"],
        stamp: false,
        description:
            "・生徒が授業中に制作した美術作品等を展示しております。・「宇宙と生命の進歩 ～過去，現在，そして新時代へ～」というテーマで制作を行いました。ごゆるりとお楽しみください。・体験型のミニゲームで遊ぼう！あんなゲーム、こんなゲームがあなたの挑戦を待っています。",
    },
    お茶席: {
        location: "和室",
        icon: exhibitionIcons["お茶席"],
        stamp: false,
        description:
            "お抹茶と和菓子をご用意しております。お気軽にお越しください。（一般800円、在校生・小学生以下500円）",
    },
    暗号同好会: {
        location: "3年A組",
        icon: exhibitionIcons["暗号同好会"],
        stamp: true,
        description: "簡単な謎なぞから難解な暗号まで用意しています。今年は学校中を舞台にした新企画も！",
        twitter_link: "https://x.com/tdj_angou",
    },
    謎解き同好会: {
        location: "3年A組",
        icon: exhibitionIcons["謎解き研究会"],
        stamp: true,
        description: "謎解きに必要なのは「ひらめき」だけ！謎でしか味わえない爽快感がここに。",
        twitter_link: "https://x.com/tdj_nazo",
    },
    ロケット研究部: {
        location: "3年B組",
        icon: exhibitionIcons["ロケット研究部"],
        stamp: true,
        description: "部員達の果てしない宇宙への興味をぜひご覧ください！",
        twitter_link: "https://x.com/RocketTdj63",
        events: ["ロケット発射実験"],
        blogs: ["61/02"],
    },
    "VOCALOID&作曲同好会": {
        location: "3年B組",
        icon: exhibitionIcons["VOCALOID&作曲同好会"],
        stamp: true,
        description:
            "今年の展示はUTAU関連を中心に組み立てております。例年通りの楽曲発表等もございますので是非お越しください。",
        events: ["TVOCオリジナル曲発表"],
        twitter_link: "https://x.com/tdj_tvoc",
        blogs: ["59/02"],
    },
    休憩室: {
        location: "3年C組",
        icon: exhibitionIcons["休憩室"],
        stamp: false,
    },
    中３学年展示: {
        location: "3年D組, 3年E組",
        icon: exhibitionIcons["学年展示"],
        stamp: false,
        description:
            "今年のテーマはEXPO 77th。ゲートをくぐったあなたを、巨大迷路、ピンボール、映像など、数々のパビリオンが待っています。",
    },
    グッズ販売: {
        location: "6年A組",
        icon: exhibitionIcons["fallback"],
        stamp: false,
        description: "文化祭公式グッズを販売しております。記念に一品、如何でしょうか。",
    },
    園芸部: {
        location: "6年B組",
        icon: exhibitionIcons["園芸部"],
        stamp: true,
        description: "今年も植物展示とチューリップの球根販売を行います！お値打ち価格で販売中！（現金のみ取り扱い）",
        twitter_link: "https://x.com/tdj_engei",
    },
    民族音楽同好会: {
        location: "6年C組",
        icon: exhibitionIcons["民族音楽同好会"],
        stamp: true,
        description:
            "民族音楽同好会です！初展示です！主に世界の民族楽器や民族音楽についての紹介ポスターを展示しています！",
    },
    歴史部菁史会: {
        location: "6年C組",
        icon: exhibitionIcons["歴史部菁史会"],
        stamp: true,
        description: "歴史部とかけまして太陽の塔と解きます。その心はどちらも中に入ると、思ったより奥が深いでしょう。",
        twitter_link: "https://x.com/tdj_seisikai2",
        blogs: ["61/01"],
    },
    電子工作部: {
        location: "6年D組",
        icon: exhibitionIcons["電子工作部"],
        stamp: true,
        description:
            "部員たちが製作した作品を展示、解説しています。大会に出場したロボットから、実際に遊べるミニゲームまで！",
        twitter_link: "https://x.com/tdj_dennkou",
        events: ["レゴプログラミング講習会"],
        blogs: ["61/05"],
    },
    折り紙研究部: {
        location: "6年E組",
        icon: exhibitionIcons["折り紙研究部"],
        stamp: true,
        description: "折り紙って芸術だったんだ！",
        twitter_link: "https://x.com/tdj_oriken",
        blogs: ["59/06"],
    },
    鉄道研究部: {
        location: "6年F組",
        icon: exhibitionIcons["鉄道研究部"],
        stamp: true,
        description: "写真や鉄道部品,新規作成したジオラマの展示等に加え,Nゲージの運転体験を実施！色々やってます！",
        twitter_link: "https://x.com/tdj_tekken",
        blogs: ["61/01"],
    },
    お化け屋敷: {
        location: "演習室B, 演習室C",
        icon: exhibitionIcons["お化け屋敷"],
        stamp: false,
        description:
            "お化け屋敷です。毎年設計から考えて作っています。以前より進化したお化け屋敷をぜひ楽しんでください。",
        events: ["お化け屋敷"],
        blogs: ["60/11", "59/04"],
    },
    語学研究会: {
        location: "演習室D",
        icon: exhibitionIcons["語学研究会"],
        stamp: true,
        description: "フランス語、ドイツ語等を勉強する部員による展示です。",
        twitter_link: "https://x.com/tdj_gogaku",
    },
    登山同好会: {
        location: "演習室D",
        icon: exhibitionIcons["登山同好会"],
        stamp: true,
        description:
            "登山同好会で登った山の紹介や、登山道具の展示をしています。山が好きな方もそうでない方もぜひお越しください。",
        twitter_link: "https://x.com/tdjtozan",
    },
    旅行同好会: {
        location: "演習室D",
        icon: exhibitionIcons["旅行同好会"],
        stamp: true,
        description:
            "昨年復活した団体、旅行同好会です。各地のパンフレットの展示や参加型の企画等を行います。ぜひお越しください！",
        twitter_link: "https://x.com/TDJryokou",
    },
    自動車研究会: {
        location: "5年A組",
        icon: exhibitionIcons["自動車研究会"],
        stamp: true,
        description:
            "去年新しくできた団体です。今は大会出場用車両の設計を主にやっています。自動車に関する様々な展示を行います。",
        twitter_link: "https://x.com/automobile_tdj",
        events: ["ラジコンレース大会"],
    },
    ラーメン研究会: {
        location: "5年A組",
        icon: exhibitionIcons["fallback"],
        stamp: true,
        description: "ラーメンを愛している部活です。ちょっと変わってるかもですが、ぜひ来てください！！！",
        twitter_link: "https://x.com/tdjramen",
        instagram_link: "https://www.instagram.com/tdj_ramen/?igsh=YWI1NXBkMTVlenUw&utm_source=qr#",
    },
    英語部: {
        location: "5年B組",
        icon: exhibitionIcons["英語部"],
        stamp: true,
        description: "君の英語力試してみない？楽しい展示も！Join us for fun English challenges!",
        twitter_link: "https://x.com/tdjenglish",
    },
    写真部: {
        location: "5年B組",
        icon: exhibitionIcons["写真部"],
        stamp: true,
        description: "写真部の一年の集大成です。是非ご覧下さい。",
    },
    数学研究部: {
        location: "5年C組",
        icon: exhibitionIcons["数学研究部"],
        stamp: true,
        description:
            "数学研究部では、部誌や懸賞問題、計算テストといったみなさんに楽しんでいただけるコンテンツを用意しております。",
        twitter_link: "https://x.com/tdjsuken2",
        instagram_link: "https://www.instagram.com/tdjsuken/#",
    },
    新聞部: {
        location: "5年D組",
        icon: exhibitionIcons["新聞部"],
        stamp: true,
        description:
            "東大寺で最も古い部活、新聞部。例年大好評の部誌「番茶党」の配布の他、新聞のバックナンバーの展示などを行います。",
    },
    文藝同好会: {
        location: "5年D組",
        icon: exhibitionIcons["文藝同好会"],
        stamp: true,
        description:
            "節目を迎えた文藝同好会　展示は生まれ変わり文化祭に変化をもたらす　その凝り固まった考えを今こそ改めるのだ!",
    },
    クイズ研究部: {
        location: "5年E組",
        icon: exhibitionIcons["クイズ研究部"],
        stamp: true,
        description: "クイズ研究部員が作ったペーパークイズを解いたり、早押しボタンを用いてクイズ体験ができます！",
        twitter_link: "https://x.com/TDJquiz",
        events: ["クイズ大会"],
        blogs: ["60/09", "60/03", "59/02"],
    },
    科学部: {
        location: "生物室",
        icon: exhibitionIcons["科学部"],
        stamp: true,
        description:
            "常設で普段の活動の成果を展示しています。展示はすべて部員が作りました。演示実験もぜひ見に来てください！",
        twitter_link: "https://x.com/tdjscienceclub",
        events: ["化学の演示実験", "解剖の演示実験"],
    },
    書画展: {
        location: "図書室",
        icon: exhibitionIcons["fallback"],
        stamp: false,
        description:
            "東大寺塔頭の書画や菁々会会員の作品を展示しております。塔頭の書画は販売もしております。ぜひ、ご覧ください。",
    },
    MGA同好会: {
        location: "4年B組",
        icon: exhibitionIcons["MGA同好会"],
        stamp: true,
        description:
            "部員たちが試行錯誤して作り上げた、最高のボードゲームが皆さんを待っています！ワンゲーム、プレイしませんか?",
        twitter_link: "https://x.com/tdj_mgadoukou",
        events: ["体験型ミステリー"],
        blogs: ["60/03", "59/02"],
    },
    ポケモン同好会: {
        location: "4年C組",
        icon: exhibitionIcons["ポケモン同好会"],
        stamp: true,
        description:
            "今年は以前までのポケカブースやポケモン検定に加えて新たにポケポケのデッキリストも展示しております！",
        twitter_link: "https://x.com/pokedou60seisei",
        blogs: ["59/02"],
    },
    東方研究会: {
        location: "4年C組",
        icon: exhibitionIcons["東方研究会"],
        stamp: true,
        description:
            "遂に東大寺学園に東方研究会が発足！検定や部員の二次創作物など様々な展示をご用意してお待ちしております。",
    },
    アニメ研究会: {
        location: "4年D組",
        icon: exhibitionIcons["アニメ研究会"],
        stamp: true,
        description:
            "今年も菁々祭にアニメ研究会が！アニメクイズやイラスト展示など、部員達が精一杯表現する愛を感じてくださいッ！",
        twitter_link: "https://x.com/tdj_ANI_club",
    },
    ドラえもん研究会: {
        location: "4年D組",
        icon: exhibitionIcons["ドラえもん研究会"],
        stamp: true,
        description: "クイズ等々さまざまなイベントを用意しています！夢に満ちた世界へようこそ！",
        twitter_link: "https://x.com/DoraemonTDJ",
    },
    マジック同好会: {
        location: "4年E組",
        icon: exhibitionIcons["マジック同好会"],
        stamp: true,
        description:
            "皆さんの ”目の前”で繰り広げられる魔法に、目が離せなくなります！あなたも魔法の世界に立ち寄ってみませんか？",
        twitter_link: "https://x.com/tdjmagicclub",
        events: ["マジックショー"],
    },
    情報研究部: {
        location: "情報教室",
        icon: exhibitionIcons["情報研究部"],
        stamp: true,
        description: "今年も部員渾身のゲームや、ロボット「ロボホン」があります！涼みにきてね！",
        twitter_link: "https://x.com/tdj_sip",
        website_link: "https://tdjsip.wixsite.com/tdjsip",
        events: ["TDJ-RPGチャンピオンシップ", "競技プログラミング入門"],
        blogs: ["60/03"],
    },
    美術部: {
        location: "美術室",
        icon: exhibitionIcons["美術部"],
        stamp: true,
        description: "美術部では部員の作品を展示しています。個性豊かな部員たちの1年間の成果です。",
        twitter_link: "https://x.com/tdj_artclub",
    },
    紅茶同好会: {
        location: "美術室",
        icon: exhibitionIcons["紅茶同好会"],
        stamp: true,
        description:
            "普段はみんなで持ち寄って楽しんでいる同好会です。そんな中から茶葉を展示しております。紅茶を知らない人も是非！",
        twitter_link: "https://x.com/TOUDAIJIteaclub",
    },
} as const;

export const exhibitionData: Readonly<
    Record<
        string,
        Readonly<{
            location: keyof typeof locations;
            icon: string;
            stamp: boolean;
            description?: string;
            twitter_link?: string;
            instagram_link?: string;
            facebook_link?: string;
            website_link?: string;
            events?: Readonly<(typeof eventNames)[number][]>;
            blogs?: Readonly<BlogKey[]>;
            club_magazine?: string;
            tweet_link?: string;
        }>
    >
> = exhibitionDataRaw;
