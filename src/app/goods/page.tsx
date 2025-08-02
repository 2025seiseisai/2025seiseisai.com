/* eslint-disable @next/next/no-img-element */
import styles from "./page.module.scss";

export const metadata = {
    title: "Goods | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

export default function Page() {
    return (
        <>
            <p className={styles.example}>
                <span id="g">G</span>oods
            </p>
            <p>
                <span>Tシャツ</span>
                <span>900円</span>
            </p>
            <p>在庫あり</p>
            <img src="app/goods/tshirt.svg" alt="Tシャツ" />
            <p>第61回菁々祭のオリジナルTシャツです。S,M,L,XLのサイズをご用意しております。</p>
        </>
    );
}
