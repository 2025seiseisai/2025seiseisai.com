import Image from "next/image";
import tshirt from "./img/t.png";
import styles from "./page.module.scss";

import back from "./img/back.png";

export const metadata = {
    title: "Goods | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

export default function Page() {
    return (
        <>
            <h1
                className="mt-[30px] mb-[25px] ml-[20px] text-[28px] font-bold md:mb-[30px] md:ml-[10svw]
                    md:text-[40px]"
            >
                <span className="text-[#de0d22]">G</span>oods
            </h1>
            <div className="md:mb-[50px]">
                <div className={styles.container}>
                    {/* 商品 */}
                    <div className={styles.goods}>
                        <div className={styles.f523}>
                            <h2 className={styles.name}>Tシャツ1</h2>
                            <h2 className={styles.price}>900円</h2>
                        </div>
                        <div className={styles.f511}>在庫あり</div>
                        <div
                            className={styles.wrapper}
                            style={
                                {
                                    "--bg-img": `url(${back.src})`,
                                } as React.CSSProperties
                            }
                        >
                            <div className={styles.squareImage}>
                                <Image src={tshirt} alt="Tシャツ1" fill style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                        <p className={styles.desc}>
                            第61回菁々祭のオリジナルTシャツです。S,M,L,XLのサイズをご用意しております。
                        </p>
                    </div>
                    <div className={styles.goods}>
                        <div className={styles.f523}>
                            <h2 className={styles.name}>Tシャツ2</h2>
                            <h2 className={styles.price}>900円</h2>
                        </div>
                        <div className={styles.f511}>在庫あり</div>
                        <div
                            className={styles.wrapper}
                            style={
                                {
                                    "--bg-img": `url(${back.src})`,
                                } as React.CSSProperties
                            }
                        >
                            <div className={styles.squareImage}>
                                <Image src={tshirt} alt="Tシャツ1" fill style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                        <p className={styles.desc}>
                            第61回菁々祭のオリジナルTシャツです。S,M,L,XLのサイズをご用意しております。
                        </p>
                    </div>
                    <div className={styles.goods}>
                        <div className={styles.f523}>
                            <h2 className={styles.name}>Tシャツ3</h2>
                            <h2 className={styles.price}>900円</h2>
                        </div>
                        <div className={styles.f511}>在庫あり</div>
                        <div
                            className={styles.wrapper}
                            style={
                                {
                                    "--bg-img": `url(${back.src})`,
                                } as React.CSSProperties
                            }
                        >
                            <div className={styles.squareImage}>
                                <Image src={tshirt} alt="Tシャツ1" fill style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                        <p className={styles.desc}>
                            第61回菁々祭のオリジナルTシャツです。S,M,L,XLのサイズをご用意しております。
                        </p>
                    </div>
                    <div className={styles.goods}>
                        <div className={styles.f523}>
                            <h2 className={styles.name}>Tシャツ4</h2>
                            <h2 className={styles.price}>900円</h2>
                        </div>
                        <div className={styles.f511}>在庫あり</div>
                        <div
                            className={styles.wrapper}
                            style={
                                {
                                    "--bg-img": `url(${back.src})`,
                                } as React.CSSProperties
                            }
                        >
                            <div className={styles.squareImage}>
                                <Image src={tshirt} alt="Tシャツ1" fill style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                        <p className={styles.desc}>
                            第61回菁々祭のオリジナルTシャツです。S,M,L,XLのサイズをご用意しております。
                        </p>
                    </div>
                    <div className={styles.goods}>
                        <div className={styles.f523}>
                            <h2 className={styles.name}>Tシャツ5</h2>
                            <h2 className={styles.price}>900円</h2>
                        </div>
                        <div className={styles.f511}>在庫あり</div>
                        <div
                            className={styles.wrapper}
                            style={
                                {
                                    "--bg-img": `url(${back.src})`,
                                } as React.CSSProperties
                            }
                        >
                            <div className={styles.squareImage}>
                                <Image src={tshirt} alt="Tシャツ1" fill style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                        <p className={styles.desc}>
                            第61回菁々祭のオリジナルTシャツです。S,M,L,XLのサイズをご用意しております。
                        </p>
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
