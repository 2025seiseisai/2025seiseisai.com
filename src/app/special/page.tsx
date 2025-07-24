import Image from "next/image";
import Back from "./back.svg";
import Download from "./download.svg";
import styles from "./page.module.scss";

export const metadata = {
    title: "Special | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

export default function Page() {
    return (
        <>
            <p className={styles.title}>
                <span className={styles.red}>S</span>
                <span className={styles.black}>pecial</span>
            </p>
            <p className={`${styles.sentence} ${styles.black}`}>
                第61回菁々祭のテーマ&quot;分秒&quot;をイメージして作られた壁紙やアイコン・ヘッダーなどに使える画像をダウンロードすることができます。菁々祭に向け、SNS上でも&quot;分秒&quot;を感じて盛り上がっていきましょう！使用にあたっては、下記の禁止事項を遵守していただくようお願いいたします。
            </p>

            <div className={styles.subtitle_block}>
                <span className={`${styles.subtitle} ${styles.red}`}>禁止事項</span>
                <ul className={`${styles.list} ${styles.black}`}>
                    <li>・データの改変および再編集</li>
                    <li>・データの二次配布</li>
                    <li>・データの著作権者を名乗るなどの著作権を侵害する行為</li>
                    <li>・データを無断で商用利用すること</li>
                </ul>
                <div className={styles.border}></div>
                <div className={styles.border2}></div>
                <div className={styles.border3}></div>
            </div>

            <p className={`${styles.large} ${styles.red}`}>WALLPAPER</p>
            <div className={styles.wallpaper}>
                <Image src="/2025/special/wallpaper/1.png" alt="壁紙" width={180} height={360} />
                <Image src="/2025/special/wallpaper/2.png" alt="壁紙" width={180} height={360} />
                <Image src="/2025/special/wallpaper/3.png" alt="壁紙" width={180} height={360} />
                <Image src="/2025/special/wallpaper/4.png" alt="壁紙" width={180} height={360} />
                <Image src="/2025/special/wallpaper/5.png" alt="壁紙" width={180} height={360} />
                <p className={styles.downloadIcon}>
                    <a href="/2025/special/wallpaper/1.png" title="壁紙1をダウンロード" download>
                        <Download />
                    </a>
                    <a href="/2025/special/wallpaper/2.png" title="壁紙2をダウンロード" download>
                        <Download />
                    </a>
                    <a href="/2025/special/wallpaper/3.png" title="壁紙3をダウンロード" download>
                        <Download />
                    </a>
                    <a href="/2025/special/wallpaper/4.png" title="壁紙4をダウンロード" download>
                        <Download />
                    </a>
                    <a href="/2025/special/wallpaper/5.png" title="壁紙5をダウンロード" download>
                        <Download />
                    </a>
                </p>
            </div>
            <p className={styles.wall}>
                <Back className={styles.back} />
            </p>
            <p className={`${styles.large} ${styles.red} ${styles.iconblock}`}>ICON</p>
            <div className={styles.icon}>
                <Image src="/2025/special/icon/1.png" alt="アイコン" width={240} height={240} />
                <Image src="/2025/special/icon/2.png" alt="アイコン" width={240} height={240} />
                <Image src="/2025/special/icon/3.png" alt="アイコン" width={240} height={240} />
                <Image src="/2025/special/icon/4.png" alt="アイコン" width={240} height={240} />
                <p className={`${styles.downloadIcon} ${styles.icon_download}`}>
                    <a href="/2025/special/icon/1.png" title="アイコン1をダウンロード" download>
                        <Download />
                    </a>
                    <a href="/2025/special/icon/2.png" title="アイコン2をダウンロード" download>
                        <Download />
                    </a>
                    <a href="/2025/special/icon/3.png" title="アイコン3をダウンロード" download>
                        <Download />
                    </a>
                    <a href="/2025/special/icon/4.png" title="アイコン4をダウンロード" download>
                        <Download />
                    </a>
                </p>
            </div>
            <p className={`${styles.large} ${styles.red} ${styles.headerblock}`}>HEADER</p>
            <div className={styles.header}>
                <Image src="/2025/special/header/1.png" alt="ヘッダー" width={495} height={165} />
                <Image src="/2025/special/header/2.png" alt="ヘッダー" width={495} height={165} />
                <p className={`${styles.downloadIcon} ${styles.header_download}`}>
                    <a href="/2025/special/header/1.png" title="ヘッダー1をダウンロード" download>
                        <Download />
                    </a>
                    <a href="/2025/special/header/2.png" title="ヘッダー2をダウンロード" download>
                        <Download />
                    </a>
                </p>
            </div>
            <div className={styles.header}>
                <Image src="/2025/special/header/3.png" alt="ヘッダー" width={495} height={165} />
                <Image src="/2025/special/header/4.png" alt="ヘッダー" width={495} height={165} />
                <p className={`${styles.downloadIcon} ${styles.header_download}`}>
                    <a href="/2025/special/header/3.png" title="ヘッダー3をダウンロード" download>
                        <Download />
                    </a>
                    <a href="/2025/special/header/4.png" title="ヘッダー4をダウンロード" download>
                        <Download />
                    </a>
                </p>
            </div>
        </>
    );
}
