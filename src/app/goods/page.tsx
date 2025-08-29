import Image from "next/image";
import key from "./img/key.png";
import mag from "./img/mag.png";
import pen from "./img/pen.png";
import tshirt from "./img/t.png";
import ttb from "./img/ttb.png";
import styles from "./page.module.scss";

import back from "./img/back.png";

import { getGoodsStock } from "@/impl/goods";

export const metadata = {
    title: "Goods | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

export const revalidate = 60;

export default async function Page() {
    const stock = await getGoodsStock();
    return (
        <>
            <h1
                className="mt-[30px] mb-[25px] ml-[20px] text-[28px] font-bold text-pri-black md:mb-[30px] md:ml-[10svw]
                    md:text-[40px]"
            >
                <span className="text-[#de0d22]">G</span>oods
            </h1>
            <p
                className="mb-[10px] w-full px-[20px] text-[16px] text-pri-black md:mb-[16px] md:px-[10svw]
                    md:text-[18px]"
            >
                こだわりのオリジナルグッズを取り揃えております。
                <br />
                来場記念におひとついかがでしょうか？
            </p>
            <div className="mb-[45px] text-pri-black">
                <div className={styles.container}>
                    {/* 商品 */}
                    <div className={styles.goods}>
                        <div className={styles.f523}>
                            <h2 className={styles.name}>Tシャツ</h2>
                            <h2 className={styles.price}>900円</h2>
                        </div>
                        <div className={styles.f511wrap}>
                            <div className={styles.f511}>S: {stock["Tシャツ-S"]}</div>
                            <div className={styles.f511}>M: {stock["Tシャツ-M"]}</div>
                            <div className={styles.f511}>L: {stock["Tシャツ-L"]}</div>
                            <div className={styles.f511}>XL: {stock["Tシャツ-XL"]}</div>
                            <div style={{ marginRight: "9px" }} />
                        </div>
                        <div className={styles.wrapper}>
                            <Image src={back} alt="" className={styles.back} fill style={{ objectFit: "cover" }} />
                            <div className={styles.squareImage}>
                                <Image
                                    src={tshirt}
                                    alt="Tシャツ"
                                    fill
                                    style={{
                                        objectFit: "cover",
                                        transform: "translateX(-3%) scale(1.04)",
                                        filter: "brightness(0.98)",
                                    }}
                                />
                            </div>
                        </div>
                        <p className={styles.desc}>
                            第61回菁々祭のオリジナルTシャツです。S･M･L･XLのサイズをご用意しております。
                        </p>
                    </div>
                    <div className={styles.goods}>
                        <div className={styles.f523}>
                            <h2 className={styles.name}>ボールペン</h2>
                            <h2 className={styles.price}>300円</h2>
                        </div>
                        <div className={styles.f511wrap}>
                            <div className={styles.f511}>赤: {stock["ボールペン-赤"]}</div>
                            <div className={styles.f511}>黒: {stock["ボールペン-黒"]}</div>
                            <div style={{ marginRight: "9px" }} />
                        </div>
                        <div className={styles.wrapper}>
                            <Image src={back} alt="" className={styles.back} fill style={{ objectFit: "cover" }} />
                            <div className={styles.squareImage}>
                                <Image
                                    src={pen}
                                    alt="ボールペン"
                                    fill
                                    style={{ objectFit: "cover", transform: "scale(1.4)" }}
                                />
                            </div>
                        </div>
                        <p className={styles.desc}>
                            「分秒」のロゴがあしらわれたチャームのついたボールペンです。赤・黒の２種類をご用意しております。
                        </p>
                    </div>
                    <div className={styles.goods}>
                        <div className={styles.f523}>
                            <h2 className={styles.name}>マグカップ</h2>
                            <h2 className={styles.price}>600円</h2>
                        </div>
                        <div className={styles.f511wrap}>
                            <div className={styles.f511}>{stock["マグカップ"]}</div>
                        </div>
                        <div className={styles.wrapper}>
                            <Image src={back} alt="" className={styles.back} fill style={{ objectFit: "cover" }} />
                            <div className={styles.squareImage}>
                                <Image
                                    src={mag}
                                    alt="マグカップ"
                                    fill
                                    style={{
                                        objectFit: "cover",
                                        transform: "translateY(4%) scale(1.03)",
                                        filter: "brightness(1.05)",
                                    }}
                                />
                            </div>
                        </div>
                        <p className={styles.desc}>ロゴ入りのマグカップです。優雅なひとときをお楽しみください。</p>
                    </div>
                    <div className={styles.goods}>
                        <div className={styles.f523}>
                            <h2 className={styles.name}>トートバッグ</h2>
                            <h2 className={styles.price}>600円</h2>
                        </div>
                        <div className={styles.f511wrap}>
                            <div className={styles.f511}>{stock["トートバッグ"]}</div>
                        </div>
                        <div className={styles.wrapper}>
                            <Image src={back} alt="" className={styles.back} fill style={{ objectFit: "cover" }} />
                            <div className={styles.squareImage}>
                                <Image
                                    src={ttb}
                                    alt="トートバッグ"
                                    fill
                                    style={{
                                        objectFit: "cover",
                                        transform: "scale(1.125)",
                                        filter: "brightness(1.15)",
                                    }}
                                />
                            </div>
                        </div>
                        <p className={styles.desc}>時計がデザインに取り入れられた使いやすいトートバッグです。</p>
                    </div>
                    <div className={styles.goods}>
                        <div className={styles.f523}>
                            <h2 className={styles.name}>キーホルダー</h2>
                            <h2 className={styles.price}>300円</h2>
                        </div>
                        <div className={styles.f511wrap}>
                            <div className={styles.f511}>{stock["アクリルキーホルダー"]}</div>
                        </div>
                        <div className={styles.wrapper}>
                            <Image src={back} alt="" className={styles.back} fill style={{ objectFit: "cover" }} />
                            <div className={styles.squareImage}>
                                <Image
                                    src={key}
                                    alt="アクリルキーホルダー"
                                    fill
                                    style={{ objectFit: "cover", transform: "scale(1.04)" }}
                                />
                            </div>
                        </div>
                        <p className={styles.desc}>
                            お土産などに適したアクリルキーホルダーです。カバンなどに付けてみてはいかがでしょうか。
                        </p>
                    </div>
                </div>
            </div>

            <div className={`${styles.f504} ${styles.small_gap}`}>
                <div className={styles.m}>
                    <h2 className={styles.zaiko}>購入に関する注意点</h2>
                </div>
                <ul
                    className="flex w-full list-disc flex-col gap-1 pl-6 text-[16px] font-normal text-pri-black
                        md:text-[18px]"
                >
                    <li>グッズの購入には整理券が必要です。</li>
                    <li>整理券はグラウンドの配布場所にてお求めください。</li>
                    <li>整理券があっても必ず購入できるとは限りません。</li>
                    <li>購入はお一人様につき各グッズ2点までです。</li>
                    <li>在校生は購入できません。</li>
                </ul>
            </div>

            <div className={styles.f504}>
                <div className={styles.m}>
                    <h2 className={styles.zaiko}>在庫について</h2>
                </div>
                <p className={styles.stock_desc}>
                    随時更新しておりますが多少の誤差がある場合がございます。
                    <br />
                    詳しくはグッズ販売所の掲示、もしくはスタッフにお尋ねください。
                </p>
            </div>
        </>
    );
}
