import Image from "next/image";
import styles from "./page.module.scss";

export const metadata = {
    title: "Special | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

export default function Page() {
    return (
        <>
            {/* ここに書く */}
            <p className={styles.example}>スペシャル</p>
            {/* Special用画像の張り方 */}
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
