import styles from "./page.module.scss";

export const metadata = {
    title: "Goods | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

export default function Page() {
    return (
        <>
            {/* ここに書く */}
            <p className={styles.example}>グッズ</p>
            <h1
                className="mt-[30px] mb-[25px] ml-[20px] text-[28px] font-bold md:mb-[30px] md:ml-[10svw]
                    md:text-[40px]"
            >
                <span className="text-[#de0d22]">G</span>oods
            </h1>
            <div className={styles.goods}>
                <div className={styles.f523}></div>
                <div className={styles.f511}></div>
                <div className={styles.f529}></div>
            </div>
        </>
    );
}
