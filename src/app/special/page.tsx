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
                第61回菁々祭のテーマ&quot;分秒&quot;をイメージして作られた壁紙やアイコン・ヘッダーなどに使える画像をダウンロードすることができます。菁々祭に向け、SNS上でも&quot;分秒&quot;を感じて盛り上がっていきましょう！使用にあたっては、下記の禁止事項を遵守していただくようお願いいたします。
            </p>

            <div className={styles.subtitle_block}>
                <span className={`${styles.subtitle} ${styles.red}`}>禁止事項</span>
                <span className={styles.list}>
                    <p>・データの改変および再編集</p>
                    <p>・データの二次配布</p>
                    <p>・データの著作権者を名乗るなどの著作権を侵害する行為</p>
                    <p>・データを無断で商用利用すること</p>
                </span>
                <div className={styles.border}></div>
                <div className={styles.border2}></div>
                <div className={styles.border3}></div>
            </div>

            <p className={`${styles.large} ${styles.red}`}>WALLPAPER</p>
            <p className={styles.wallpaper}>
                <Image src="/2025/special/wallpaper/1.png" alt="壁紙" width={180} height={360} />
                <Image src="/2025/special/wallpaper/2.png" alt="壁紙" width={180} height={360} />
                <Image src="/2025/special/wallpaper/3.png" alt="壁紙" width={180} height={360} />
                <Image src="/2025/special/wallpaper/4.png" alt="壁紙" width={180} height={360} />
                <Image src="/2025/special/wallpaper/5.png" alt="壁紙" width={180} height={360} />
            </p>
            <p id="icon" className={`${styles.large} ${styles.red}`}>
                ICON
            </p>
            <p className={styles.icon}>
                <Image src="/2025/special/icon/1.png" alt="アイコン" width={240} height={240} />
                <Image src="/2025/special/icon/2.png" alt="アイコン" width={240} height={240} />
                <Image src="/2025/special/icon/3.png" alt="アイコン" width={240} height={240} />
                <Image src="/2025/special/icon/4.png" alt="アイコン" width={240} height={240} />
            </p>
            <p id="header" className={`${styles.large} ${styles.red}`}>
                HEADER
            </p>
            <p className={styles.header}>
                <Image src="/2025/special/header/1.png" alt="ヘッダー" width={495} height={165} />
                <Image src="/2025/special/header/2.png" alt="ヘッダー" width={495} height={165} />
            </p>
            <p className={styles.header}>
                <Image src="/2025/special/header/3.png" alt="ヘッダー" width={495} height={165} />
                <Image src="/2025/special/header/4.png" alt="ヘッダー" width={495} height={165} />
            </p>
            {/* ダウンロードボタンの作り方 */}
            {/* ボタンにしたい要素をaタグで囲う */}
            <a href="/special/wallpaper/4.png" download>
                <p>壁紙4をダウンロード</p>
            </a>
        </>
    );
}
