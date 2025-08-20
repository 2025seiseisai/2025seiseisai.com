import Link from "next/link";
import React from "react";
import { exhibitionIcons } from "../map/(exhibition)/exhibition-icons";
import Icon from "./dawnload_icon.svg";
import Icon_open from "./minas_icon.svg";
import styles from "./page.module.scss";
import Icon_closed from "./plus_icon.svg";
import Icon2 from "./reading_icon.svg";

export const metadata = {
    title: "Downloads | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

function Nameplate({ name }: { name: string }) {
    const icons = exhibitionIcons as Record<string, string>;
    const icon = icons[name] ?? icons["fallback"] ?? "";
    return (
        <li>
            <div className="mt-2 inline-flex w-full">
                <div className={styles.club_icons} dangerouslySetInnerHTML={{ __html: icon }} />
                <p className="ml-2 text-xl">{name}</p>
                <Link href="" className={styles.magazine_dawnload_botton}>
                    読む<Icon2 className="ml-1 h-3 w-3"></Icon2>
                </Link>
            </div>
        </li>
    );
}

function Container({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <details className={styles.club_magazine_headline}>
            <summary>
                <p className="ml-2.5 text-2xl">{title}</p>
                <Icon_open className={`${styles.magazine_icon} ${styles.icon_open}`}></Icon_open>
                <Icon_closed className={`${styles.magazine_icon} ${styles.icon_closed}`}></Icon_closed>
            </summary>
            <ul>{children}</ul>
        </details>
    );
}

// それぞれの行のクラブの整理 入れる箱ごとに分けています もうすでにあるのは、テストで入れてみたものです
const club_A = ["アニメ研究会", "囲碁将棋部", "英語部"];
const club_K = ["クイズ研究部"];
const club_S = [];
const club_T = [];
const club_N = [];
const club_H = [];
const club_M = [];
const club_R = [];
const club_Alphabet = [];

// いちばんしたのは　　A-Z  のやつです

export default function Page() {
    return (
        <>
            <div className={styles.total}>
                {/* 初めの説明 */}
                <div className={styles.title_total}>
                    <p className={styles.title}>Downloads</p>
                    <p className={styles.text}>
                        こちらでは菁々祭パンフレット、各部活の部誌をダウンロードしていただけます。菁々祭終了後も公開しておりますので、手に入れることのできなかった部活の部誌などを読んでいただくことができます。
                    </p>
                </div>
                {/* パンフレットについて */}
                <div>
                    <div className={styles.subtitle}>
                        <div>
                            <p className={`${styles.subtitle_English} ${styles.center}`}>Pamphlet</p>

                            <p className={`${styles.subtitle_Japanese} ${styles.center}`}>パンフレット</p>
                        </div>
                    </div>

                    {/* パンフレットダウンロードについての説明 */}
                    <div className="mt-4">
                        <p className="text-base">
                            校門でのパンフレット配布もございますが、ダウンロードしておくと便利です。
                            <br />
                            用途に合わせて、高画質版･中画質版･低画質版をご用意しました。東大寺学園は電波が弱い場所が多いため､校内では低画質版のダウンロードをおすすめします。
                        </p>
                        <div className={styles.pamphret_download}>
                            <div className="mb-2 inline-flex">
                                <p>高画質版(47MB)</p>
                                <Link href="" className={styles.pamphret_download_button}>
                                    ダウンロード <Icon className={styles.dawnload_icon}></Icon>
                                </Link>
                            </div>
                            <div className="mb-2 inline-flex">
                                <p>中画質版(11MB)</p>
                                <Link href="" className={styles.pamphret_download_button}>
                                    ダウンロード <Icon className={styles.dawnload_icon}></Icon>
                                </Link>
                            </div>
                            <div className="mb-2 inline-flex">
                                <p>低画質版(6MB)</p>
                                <Link href="" className={styles.pamphret_download_button}>
                                    ダウンロード <Icon className={styles.dawnload_icon}></Icon>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 部誌について */}
                <div className="mt-6 mb-11">
                    <div className={styles.subtitle}>
                        <div>
                            <p className={`${styles.subtitle_English} ${styles.center}`}>Club magazine</p>

                            <p className={`${styles.subtitle_Japanese} ${styles.center}`}>部誌</p>
                        </div>
                    </div>

                    {/* 部誌についての説明 */}

                    <div>
                        <div className={styles.magazine_total}>
                            <Container title="あ行">
                                {club_A.map((club) => (
                                    <Nameplate key={club} name={club} />
                                ))}
                            </Container>
                        </div>
                        <div className={styles.magazine_total}>
                            <Container title="か行">
                                {club_K.map((club) => (
                                    <Nameplate key={club} name={club} />
                                ))}
                            </Container>
                        </div>
                        <div className={styles.magazine_total}>
                            <Container title="さ行">
                                {club_S.map((club) => (
                                    <Nameplate key={club} name={club} />
                                ))}
                            </Container>
                        </div>
                        <div className={styles.magazine_total}>
                            <Container title="た行">
                                {club_T.map((club) => (
                                    <Nameplate key={club} name={club} />
                                ))}
                            </Container>
                        </div>
                        <div className={styles.magazine_total}>
                            <Container title="な行">
                                {club_N.map((club) => (
                                    <Nameplate key={club} name={club} />
                                ))}
                            </Container>
                        </div>
                        <div className={styles.magazine_total}>
                            <Container title="は行">
                                {club_H.map((club) => (
                                    <Nameplate key={club} name={club} />
                                ))}
                            </Container>
                        </div>
                        <div className={styles.magazine_total}>
                            <Container title="ま行">
                                {club_M.map((club) => (
                                    <Nameplate key={club} name={club} />
                                ))}
                            </Container>
                        </div>
                        <div className={styles.magazine_total}>
                            <Container title="ら行">
                                {club_R.map((club) => (
                                    <Nameplate key={club} name={club} />
                                ))}
                            </Container>
                        </div>
                        <div className={styles.magazine_total}>
                            <Container title="A - Z">
                                {club_Alphabet.map((club) => (
                                    <Nameplate key={club} name={club} />
                                ))}
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
            {/* ここに書く */}
        </>
    );
}
