import Image from "next/image";
import styles from "./page.module.scss";

import tshirt from "./img/t.png";

const back = "/img/back.png";

export const metadata = {
    title: "Goods | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

export default function Page() {
    return (
        <>
            {/* ここに書く */}
            <h1
                className="mt-[30px] mb-[25px] ml-[20px] text-[28px] font-bold md:mb-[30px] md:ml-[10svw]
                    md:text-[40px]"
            >
                <span className="text-[#de0d22]">G</span>oods
            </h1>
            <div className="md:mb-[50px]">
                <div className={styles.container}>
                    <div className={styles.goods}>
                        <div className={styles.f523}>
                            <h2 className={styles.name}>Tシャツ</h2>
                            <h2 className={styles.price}>900円</h2>
                        </div>
                        <div className={styles.f511}>在庫あり</div>

                        <div
                            className={styles.wrapper}
                            style={{
                                background: `url(${back}) no-repeat center/cover`,
                            }}
                        >
                            <div className={styles.squareImage} style={{ position: "relative" }}>
                                <Image src={tshirt} alt="Tシャツ" fill style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.goods}>
                        <div className={styles.f523}>
                            <h2 className={styles.name}>Tシャツ</h2>
                            <h2 className={styles.price}>900円</h2>
                        </div>
                        <div className={styles.f511}>在庫あり</div>

                        <div
                            className={styles.wrapper}
                            style={{
                                background: `url(${back}) no-repeat center/cover`,
                            }}
                        >
                            <div className={styles.squareImage} style={{ position: "relative" }}>
                                <Image src={tshirt} alt="Tシャツ" fill style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.goods}>
                        <div className={styles.f523}>
                            <h2 className={styles.name}>Tシャツ</h2>
                            <h2 className={styles.price}>900円</h2>
                        </div>
                        <div className={styles.f511}>在庫あり</div>

                        <div
                            className={styles.wrapper}
                            style={{
                                background: `url(${back}) no-repeat center/cover`,
                            }}
                        >
                            <div className={styles.squareImage} style={{ position: "relative" }}>
                                <Image src={tshirt} alt="Tシャツ" fill style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.goods}>
                        <div className={styles.f523}>
                            <h2 className={styles.name}>Tシャツ</h2>
                            <h2 className={styles.price}>900円</h2>
                        </div>
                        <div className={styles.f511}>在庫あり</div>

                        <div
                            className={styles.wrapper}
                            style={{
                                background: `url(${back}) no-repeat center/cover`,
                            }}
                        >
                            <div className={styles.squareImage} style={{ position: "relative" }}>
                                <Image src={tshirt} alt="Tシャツ" fill style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.goods}>
                        <div className={styles.f523}>
                            <h2 className={styles.name}>Tシャツ</h2>
                            <h2 className={styles.price}>900円</h2>
                        </div>
                        <div className={styles.f511}>在庫あり</div>

                        <div
                            className={styles.wrapper}
                            style={{
                                background: `url(${back}) no-repeat center/cover`,
                            }}
                        >
                            <div className={styles.squareImage} style={{ position: "relative" }}>
                                <Image src={tshirt} alt="Tシャツ" fill style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.f504}>
                <div className={styles.m}>
                    <h2 className={styles.zaiko}>在庫について</h2>
                </div>
                <p>
                    随時更新しておりますが多少の誤差がある場合がございます。
                    <br />
                    詳しくはグッズ販売所の掲示、もしくはスタッフにお尋ねください。
                </p>
            </div>
        </>
    );
}
