// src/app/goods/page.tsx
/* eslint-disable @next/next/no-img-element */
import { goodsList } from "./goodsData";
import styles from "./page.module.scss";

export const metadata = {
    title: "Goods | 第61回菁々祭「分秒」 – 東大寺学園文化祭2025",
};

export default function Page() {
    return (
        <div className={styles.container}>
            <p className={styles.example}>
                <span id="g">G</span>oods
            </p>
            <div className={styles.goodsGrid}>
                {goodsList.map((item) => (
                    <section key={item.id} className={styles.item}>
                        <div className={styles.header}>
                            <span className={styles.name}>{item.name}</span>
                            <span className={styles.price}>{item.price}円</span>
                        </div>
                        <p className={styles.stock}>
                            {item.inStock ? (
                                <span className={styles.available}>在庫あり</span>
                            ) : (
                                <span className={styles.out}>在庫なし</span>
                            )}
                        </p>
                        <img src={item.image} alt={item.name} className={styles.image} />
                        <p className={styles.desc}>{item.description}</p>
                    </section>
                ))}
            </div>
        </div>
    );
}
