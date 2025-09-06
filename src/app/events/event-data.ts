type HourType = "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17";
type MinuteType = "00" | "05" | "10" | "15" | "20" | "25" | "30" | "35" | "40" | "45" | "50" | "55";
export type EventData = {
    name: (typeof eventNames)[number];
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
    "体育館",
    "転心殿前",
    "圓融館",
    "小講堂",
    "視聴覚室",
    "4年A組",
    "音楽室",
    "2年B組",
    "3年B組",
    "4年E組",
    "5年A組",
    "情報教室",
    "物理室",
    "地学室",
    "上グラウンド",
    "お化け屋敷",
] as const;

export const eventNames = [
    "中2学年演劇", // 中２学年演劇
    "中1学年発表", // 中１学年発表
    "中1ダンス", // 中１学年ダンス
    "チェスのルール説明",
    "和太鼓演奏",
    "ラブライブ！サンスクリット‼︎",
    "TDJ48",
    "寺マス",
    "E卍ILE",
    "令和の小町コンテスト",
    "T(DJ)²",
    "中3学年演劇", // 中３学年演劇
    "T-1グランプリ", // T-1グランプリ
    "マッスルコンテスト",
    "イケてるメンズコンテスト", // イケてるメンズコンテスト
    "結婚式",
    "菁々コンサート",
    "カラオケコンテスト",
    "室内学部定期演奏会",
    "音楽部ライブ",
    "映画祭",
    "模擬授業「菁々祭プランとUKクイズ」",
    "模擬授業「アニメde社会科」",
    "クイズ大会",
    "無差別級ビブリオバトル",
    "かんたん落語", // かんたん落語
    "スリーレッドメン",
    "PTAコーラス",
    "TVOCオリジナル曲発表",
    "マジックショー",
    "ラジコンレース大会",
    "TDJ-RPGチャンピオンシップ",
    "競技プログラミング入門",
    "科学部演示実験",
    "体験型ミステリー",
    "レゴプログラミング講習会",
    "ロケット発射実験",
    "お化け屋敷",
    "かわいいだけじゃだめですか？",
    "釈迦釈迦BOYS",
    "江南無スタイル",
    "菁々祭ツアー", // 追加
    "学校案内", // 追加
] as const;

export const eventData: EventData[] = [
    {
        name: "中2学年演劇",
        description: "今年は、生徒脚本原作で「走れメロス」のアナザーストーリーを上映する予定です。ぜひご覧ください",
        day1: [{ location: "体育館", start: "09:00", end: "09:50" }],
        day2: [],
    },
    {
        name: "中1学年発表",
        description:
            "演劇「ハリー・ポッターと賢者の石」と、ハンドベルで「喜びの歌」「校歌」などを披露します。初々しい演技と少数精鋭でのぞむ発表をご期待ください。",
        day1: [{ location: "体育館", start: "10:10", end: "10:50" }],
        day2: [{ location: "体育館", start: "10:00", end: "10:50" }],
    },
    {
        name: "中1ダンス",
        description: "ダンスを踊ります。レッスンの成果を発揮し、キレッキレのダンスをお見せします。",
        day1: [{ location: "転心殿前", start: "11:30", end: "11:50" }],
        day2: [{ location: "転心殿前", start: "12:10", end: "12:30" }],
    },
    {
        name: "和太鼓演奏",
        description: "和太鼓のみを使った演奏です。迫力満点の演奏をお届けするのでぜひお楽しみください。",
        day1: [
            { location: "転心殿前", start: "09:00", end: "09:50" },
            { location: "転心殿前", start: "13:30", end: "14:10" },
        ],
        day2: [
            { location: "転心殿前", start: "09:00", end: "09:50" },
            { location: "転心殿前", start: "13:30", end: "14:10" },
        ],
    },
    {
        name: "ラブライブ！サンスクリット‼︎",
        description: "2日限りのステージ、12人のスクールアイドル達が一つになって輝きます!",
        day1: [
            { location: "体育館", start: "12:50", end: "13:10" },
            { location: "体育館", start: "15:50", end: "16:10" },
        ],
        day2: [
            { location: "体育館", start: "12:40", end: "13:00" },
            { location: "体育館", start: "16:50", end: "17:10" },
        ],
    },
    {
        name: "TDJ48",
        description: "青春捧げ2日限りで美少女アイドルとなった男たちが可愛く舞います!",
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
        description:
            "2日間だけの魔法にかかったアイドルが、最高のステージで輝きます!プロデューサーさん、菁々祭ですよっ、菁々祭!!",
        day1: [
            { location: "体育館", start: "11:50", end: "12:10" },
            { location: "体育館", start: "15:30", end: "15:50" },
        ],
        day2: [
            { location: "体育館", start: "12:00", end: "12:20" },
            { location: "体育館", start: "15:50", end: "16:10" },
        ],
    },
    {
        name: "E卍ILE",
        description: "磨き上げたダイナミックなパフォーマンスで皆さんを魅了します!一緒に盛り上がりましょう!!",
        day1: [
            { location: "体育館", start: "12:30", end: "12:50" },
            { location: "体育館", start: "16:10", end: "16:30" },
        ],
        day2: [
            { location: "体育館", start: "12:20", end: "12:40" },
            { location: "体育館", start: "15:30", end: "15:50" },
        ],
    },
    {
        name: "令和の小町コンテスト",
        description: "実は出演する傾国の美女たちがその近郊を一定に保ち、国が傾かないように維持しているのだという…",
        day1: [],
        day2: [{ location: "体育館", start: "14:30", end: "15:00" }],
    },
    {
        name: "T(DJ)²",
        description:
            "東大寺学園史上初?!音楽好きによるDJパフォーマンスです!有名曲からマイナー曲まで幅広く流します!ぜひどうぞ!",
        day1: [
            { location: "4年A組", start: "11:50", end: "12:50" },
            { location: "体育館", start: "14:10", end: "15:00" },
        ],
        day2: [{ location: "4年A組", start: "11:20", end: "12:20" }],
    },
    {
        name: "江南無スタイル",
        description: "ぜひ見に来てください!!!",
        day1: [{ location: "体育館", start: "16:50", end: "17:00" }],
        day2: [],
    },
    {
        name: "中3学年演劇",
        description: "学園で浮上した「ある疑惑」がきっかけで校内の派閥争いが明るみに!さぁ、学校の命運やいかに!",
        day1: [],
        day2: [{ location: "体育館", start: "09:00", end: "09:40" }],
    },
    {
        name: "T-1グランプリ",
        description: "圧倒的知識量、圧倒的思考力から繰り出される強烈な笑いの一撃に、君は耐えきれるかな？",
        day1: [],
        day2: [{ location: "体育館", start: "11:10", end: "11:50" }],
    },
    {
        name: "マッスルコンテスト",
        description: "東大寺学園のトップオブマッスル。突き進め、漢道。唸れ、筋肉。弾けろ、筋肉。輝け、筋肉。",
        day1: [],
        day2: [{ location: "体育館", start: "13:30", end: "14:00" }],
    },
    {
        name: "イケてるメンズコンテスト",
        description:
            "大仏様にもまけないイケてる漢が菁々祭を沸かせにやってきた!あなたの心だけでなく勝利まで掴むのはいったい誰だ!",
        day1: [],
        day2: [{ location: "体育館", start: "14:00", end: "14:30" }],
    },
    {
        name: "結婚式",
        day1: [],
        day2: [{ location: "体育館", start: "16:10", end: "16:30" }],
    },
    {
        name: "菁々コンサート",
        description:
            "学園から集まった、音楽好きの生徒によるクラシックを主体とした演奏会です。様々な楽器演奏をお楽しみください。",
        day1: [{ location: "圓融館", start: "09:00", end: "09:50" }],
        day2: [{ location: "圓融館", start: "09:00", end: "09:50" }],
    },
    {
        name: "カラオケコンテスト",
        description: "その歌声はまるでセイレーン。あなたを盲目にさせるほどの魅力があるんです。ぜひ一度お耳を拝借。",
        day1: [{ label: "予選", location: "圓融館", start: "10:20", end: "11:00" }],
        day2: [{ label: "決勝", location: "圓融館", start: "12:30", end: "13:00" }],
    },
    {
        name: "室内学部定期演奏会",
        description:
            "小編成のオーケストラによる演奏会です。モーツァルトの交響曲から映画化で話題のミュージカル「Wicked」まで様々なジャンルを演奏します。生の演奏ならではの迫力をぜひご体感ください。",
        day1: [{ location: "圓融館", start: "11:20", end: "13:00" }],
        day2: [{ location: "圓融館", start: "13:20", end: "15:00" }],
    },
    {
        name: "音楽部ライブ",
        description: "今年もアツいライブを開催！ 迫力満点のビートであなたの心を沸き上がらせます！！",
        day1: [{ location: "圓融館", start: "13:20", end: "15:00" }],
        day2: [{ location: "圓融館", start: "10:10", end: "11:50" }],
    },
    {
        name: "映画祭",
        description:
            "生徒が脚本から演技まで自分達で行った映画を上映します。個性とアイデアが詰まった作品をぜひご覧ください!",
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
        name: "模擬授業「菁々祭プランとUKクイズ」",
        description: "",
        ticket: true,
        day1: [{ location: "視聴覚室", start: "09:30", end: "10:00" }],
        day2: [{ location: "視聴覚室", start: "09:30", end: "10:00" }],
    },
    {
        name: "模擬授業「アニメde社会科」",
        description: "",
        ticket: true,
        day1: [{ location: "視聴覚室", start: "13:00", end: "13:30" }],
        day2: [{ location: "視聴覚室", start: "13:00", end: "13:30" }],
    },
    {
        name: "クイズ大会",
        description:
            "全国優勝校の灘をはじめとする関西のクイズ強豪校が東大寺学園に集結。今年栄冠に輝くのはどの学校かーーー",
        day1: [{ location: "視聴覚室", start: "10:50", end: "11:50" }],
        day2: [],
    },
    {
        name: "無差別級ビブリオバトル",
        description: "鉄壁から同人誌まで!何でもありの菁々祭特別仕様ビブリオバトル!!",
        day1: [{ location: "視聴覚室", start: "13:50", end: "14:50" }],
        day2: [],
    },
    {
        name: "かんたん落語",
        description:
            "落語を始めて聴く方、なんとなく難しそうだと感じている方におすすめです。現代口語での優しい落語です。",
        day1: [],
        day2: [{ location: "4年A組", start: "10:30", end: "11:00" }],
    },
    {
        name: "スリーレッドメン",
        description: "軽音などのバンドでは扱わないこともあるいろいろなジャンルを弾きます。ぜひお越しください",
        day1: [{ location: "音楽室", start: "09:50", end: "10:05" }],
        day2: [],
    },
    {
        name: "PTAコーラス",
        description:
            "新曲「エール」は聴く人みんなを元気にして、元気を押してくれる応援ソング!室内楽部とのコラボでお届けします♪",
        day1: [],
        day2: [
            { label: "高校生", location: "音楽室", start: "09:30", end: "10:00" },
            { label: "中学生", location: "音楽室", start: "11:10", end: "11:30" },
        ],
    },
    {
        name: "チェスのルール説明",
        description:
            "未経験者・初心者でも分かりやすいようにチェスのルールを説明します。世界で最も遊ばれている盤ゲームをあなたも!!",
        day1: [
            { location: "2年B組", start: "11:00", end: "11:20" },
            { location: "2年B組", start: "13:00", end: "13:20" },
            { location: "2年B組", start: "14:30", end: "14:50" },
        ],
        day2: [
            { location: "2年B組", start: "11:00", end: "11:20" },
            { location: "2年B組", start: "13:00", end: "13:20" },
            { location: "2年B組", start: "14:30", end: "14:50" },
        ],
    },
    {
        name: "TVOCオリジナル曲発表",
        description: "今年の文化祭も新楽曲を用意しております。12時より公開となりますので、ぜひお越しください。",
        day1: [{ location: "3年B組", start: "12:00", end: "12:15" }],
        day2: [{ location: "3年B組", start: "12:00", end: "12:15" }],
    },
    {
        name: "マジックショー",
        description:
            "一歩踏み入れると、そこはまるで別世界。次々と巻き起こる魔法をたいかんしてみませんか。”時よ、止まれ”",
        day1: [
            { location: "4年E組", start: "10:50", end: "11:15" },
            { location: "4年E組", start: "11:25", end: "11:50" },
            { location: "4年E組", start: "13:50", end: "14:15" },
            { location: "4年E組", start: "14:25", end: "14:50" },
        ],
        day2: [
            { location: "4年E組", start: "10:50", end: "11:15" },
            { location: "4年E組", start: "11:25", end: "11:50" },
            { location: "4年E組", start: "13:50", end: "14:15" },
            { location: "4年E組", start: "14:25", end: "14:50" },
        ],
    },
    {
        name: "ラジコンレース大会",
        description: "特製のミニサーキットで実施するラジコンカーレースです。初心者から上級者まで楽しめます。",
        ticket: true,
        day1: [
            { location: "5年A組", start: "09:30", end: "09:50" },
            { location: "5年A組", start: "10:30", end: "10:50" },
            { location: "5年A組", start: "11:30", end: "11:50" },
            { location: "5年A組", start: "13:30", end: "13:50" },
        ],
        day2: [
            { location: "5年A組", start: "10:50", end: "11:15" },
            { location: "5年A組", start: "11:25", end: "11:50" },
            { location: "5年A組", start: "13:50", end: "14:15" },
            { location: "5年A組", start: "14:25", end: "14:50" },
        ],
    },
    {
        name: "TDJ-RPGチャンピオンシップ",
        description: "菁々祭初のPCゲーム大会開催!情報研究部が作成したオリジナルターン制RPGで参加者たちと戦おう!!!",
        ticket: true,
        day1: [{ location: "情報教室", start: "11:00", end: "13:00" }],
        day2: [{ location: "情報教室", start: "11:00", end: "13:00" }],
    },
    {
        name: "競技プログラミング入門",
        description: "今流行りのプログラミング。その競技としての入門編を部員が解説します!",
        day1: [{ location: "情報教室", start: "14:00", end: "15:00" }],
        day2: [{ location: "情報教室", start: "14:00", end: "15:00" }],
    },
    {
        name: "科学部演示実験",
        description:
            "小学生でも知っている実験や、普段の生活では関わることのない解剖等、科学部らしいことをゆる～く実験、かいせつするよ",
        day1: [
            { label: "化学", location: "物理室", start: "11:30", end: "12:00" },
            { label: "化学", location: "物理室", start: "13:00", end: "13:30" },
            { label: "解剖", location: "物理室", start: "14:00", end: "14:30" },
        ],
        day2: [
            { label: "化学", location: "物理室", start: "11:30", end: "12:00" },
            { label: "化学", location: "物理室", start: "13:00", end: "13:30" },
            { label: "解剖", location: "物理室", start: "14:00", end: "14:30" },
        ],
    },
    {
        name: "体験型ミステリー",
        description: "物語の登場人物になって、事件の真相を暴け!ただし、おきをつけあれ。犯人は、あなたの隣かも⋯？",
        ticket: true,
        day1: [{ location: "地学室", start: "09:20", end: "10:50" }],
        day2: [{ location: "地学室", start: "13:00", end: "14:30" }],
    },
    {
        name: "レゴプログラミング講習会",
        description:
            "LEGOのロボットを、プログラムで動かしてみましょう!初心者でも簡単にプログラムが作れるので、是ぜひ参加してみてください!",
        ticket: true,
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
        description: "火薬を使った本格的なロケットの発射実験です。是非お越しください!",
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
    {
        name: "釈迦釈迦BOYS",
        description:
            "竹迫・野中・伊藤・藤本・初田・全によるスーパーロックバンド。サザンの名曲から最近のヒット曲まで演奏。よろしく!",
        day1: [{ location: "音楽室", start: "10:05", end: "10:20" }],
        day2: [],
    },
    {
        name: "菁々祭ツアー",
        description:
            "中学3年生が展示を巡り、取材で得た情報を紹介します。見どころや裏話を交え、生成祭をより深く楽しめます。時間は10:30~/11:30~/12:30~/13:30~/14:30~となっております。",
        ticket: true,
        day1: [],
        day2: [],
    },
    {
        name: "学校案内",
        description:
            "PRパート員が図書館や食堂など学園の施設を案内します。特徴や魅力を紹介しながら、校内を楽しく巡ります。時間は10:00~/11:00~/12:00~/13:00~/14:00~となっております。",
        ticket: true,
        day1: [],
        day2: [],
    },
] as const satisfies EventData[];
