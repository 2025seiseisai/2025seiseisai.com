import Image from "next/image";
import styles from "./page.module.scss";

export const metadata = {
    title: "Special | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

export default function Page() {
    return (
        <>
            <p className={styles.title}>
                    <span className={styles.red}>S</span>pecial
            </p>
            <p className={styles.sentence}>
                第61回菁々祭のテーマ"分秒"をイメージして作られた壁紙やアイコン・ヘッダーなどに使える画像をダウンロードすることができます。菁々祭に向け、SNS上でも"分秒"を感じて盛り上がっていきましょう！使用にあたっては、下記の禁止事項を遵守していただくようお願いいたします。
            </p>
            <p className={styles.subtitle}>禁止事項</p>
            <ul className={styles.list}>
                <li>データの改変および再編集</li>
                <li>データの二次配布</li>
                <li>データの著作権者を名乗るなどの著作権を侵害する行為</li>
                <li>データを無断で商用利用すること</li>
            <p className={styles.large}><span className={styles.red}>WALLPAPER</span></p>
            </ul>
            <Image
                src="/2025/special/wallpaper/1.png" // 1.png~5.pngまであります
                alt="壁紙"
                width={180}
                height={360}
            />
            <Image
                src="/2025/special/icon/2.png" // 1.png~4.pngまであります
                alt="アイコン"
                width={150}
                height={150}
            />
            <Image
                src="/2025/special/header/3.png" // 1.png~4.pngまであります
                alt="ヘッダー"
                width={495}
                height={165}
            />
            {/* ダウンロードボタンの作り方 */}
            {/* ボタンにしたい要素をaタグで囲う */}
            <a href="/special/wallpaper/4.png" download>
                <p>壁紙4をダウンロード</p>
            </a>
            {/* 等間隔に並べたい場合は以下のようにするといい感じになります */}
            <div className={styles.flexContainer}>
                <p>あ</p>
                <p>い</p>
                <p>う</p>
                <p>え</p>
                <p>お</p>
            </div>
        </>
    );
}
