import Link from "next/link";
import React from "react";
import { exhibitionIcons } from "../map/(exhibition)/exhibition-icons";
import Icon from "./dawnload_icon.svg";
import IconPC from "./download_icon_pc.svg";
import { clubMagazineLinks } from "./downloads-data";
import Icon_open from "./minas_icon.svg";
import styles from "./page.module.scss";
import Icon_closed from "./plus_icon.svg";
import Icon2 from "./reading_icon.svg";

export const metadata = {
    title: "Brochures | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

function Nameplate({ name }: { name: string }) {
    const icons = exhibitionIcons as Record<string, string>;
    const icon = icons[name] ?? icons["fallback"] ?? "";
    const link = clubMagazineLinks[name] ?? "";
    return (
        <li>
            <div className={styles.club_magazine_detail}>
                <div className={styles.club_icons} dangerouslySetInnerHTML={{ __html: icon }} />
                <p className={styles.club_name}>{name}</p>
                <Link target="_blank" rel="noopener noreferrer" href={link} className={styles.magazine_download_button}>
                    読む<Icon2 className={styles.magazine_download_icon}></Icon2>
                </Link>
            </div>
        </li>
    );
}

function Container({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <details className={styles.club_magazine_headline} name="club">
            <summary className="items-center">
                <p className={styles.club_subtitle}>{title}</p>
                <Icon_open className={`${styles.magazine_icon} ${styles.icon_open}`}></Icon_open>
                <Icon_closed className={`${styles.magazine_icon} ${styles.icon_closed}`}></Icon_closed>
            </summary>
            <div className={styles.magazine_content}>
                <ul className={styles.magazine_list}>{children}</ul>
            </div>
        </details>
    );
}

// それぞれの行のクラブの整理 入れる箱ごとに分けています もうすでにあるのは、テストで入れてみたものです
const club_A = ["アニメ研究会", "暗号同好会", "囲碁将棋部", "英語部", "園芸部", "オセロ同好会", "折り紙研究部"];
const club_K = ["科学部", "クイズ研究部", "語学研究会", "独楽研究会"];
const club_S = ["自動車研究会", "情報研究部", "書道部", "新聞部", "数学研究部"];
const club_T = ["チェス研究会", "鉄道研究部", "電子工作部", "東方研究会", "登山同好会", "ドラえもん研究会"];
const club_N = ["謎解き研究会"];
const club_H = ["文藝同好会"];
const club_R = ["ラーメン研究会", "歴史部菁史会", "ロケット研究部"];
const club_Alphabet = ["MGA同好会", "VOCALOID&作曲同好会"];

// いちばんしたのは　　A-Z  のやつです

export default function Page() {
    return (
        <>
            <div className={styles.total}>
                {/* 初めの説明 */}
                <div className={styles.title_total}>
                    <p className={styles.title}>Brochures</p>
                    <p className={styles.text}>
                        こちらでは菁々祭パンフレット、各部活の部誌をご覧いただけます。菁々祭終了後も公開しておりますので、手に入れることのできなかった部活の部誌などを読んでいただくことができます。
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
                    <div className={styles.pamphlet_detail}>
                        <p className={styles.text}>
                            校門でのパンフレット配布もございますが、ダウンロードしておくと便利です。
                            <br />
                            用途に合わせて、高画質版･中画質版･低画質版をご用意しました。東大寺学園は電波が弱い場所が多いため､校内では低画質版のダウンロードをおすすめします。
                        </p>
                        <div className={styles.pamphlet_download}>
                            <div className={styles.pamphlet_download_detail}>
                                <p>高画質版(13.8MB)</p>
                                <a
                                    download="第61回菁々祭パンフレット高画質版.pdf"
                                    href="/2025/downloads/pamphlet_high.pdf"
                                    className={styles.pamphlet_download_button}
                                >
                                    ダウンロード
                                    <Icon className={styles.download_icon_sm} />
                                    <IconPC className={styles.download_icon_lg} />
                                </a>
                            </div>
                            <div className={styles.pamphlet_download_detail}>
                                <p>中画質版(7.1MB)</p>
                                <a
                                    download="第61回菁々祭パンフレット中画質版.pdf"
                                    href="/2025/downloads/pamphlet_medium.pdf"
                                    className={styles.pamphlet_download_button}
                                >
                                    ダウンロード
                                    <Icon className={styles.download_icon_sm} />
                                    <IconPC className={styles.download_icon_lg} />
                                </a>
                            </div>
                            <div className={styles.pamphlet_download_detail}>
                                <p>低画質版(3.5MB)</p>
                                <a
                                    download="第61回菁々祭パンフレット低画質版.pdf"
                                    href="/2025/downloads/pamphlet_low.pdf"
                                    className={styles.pamphlet_download_button}
                                >
                                    ダウンロード
                                    <Icon className={styles.download_icon_sm} />
                                    <IconPC className={styles.download_icon_lg} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 部誌について */}
                <div className={styles.magazine_all}>
                    <div className={styles.subtitle}>
                        <div>
                            <p className={`${styles.subtitle_English} ${styles.center}`}>Club magazine</p>

                            <p className={`${styles.subtitle_Japanese} ${styles.center}`}>部誌</p>
                        </div>
                    </div>

                    {/* 部誌についての説明 */}

                    <div className={styles.magazine_detail}>
                        <div className={styles.magazine_detail_left}>
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
                        </div>
                        <div className={styles.magazine_detail_right}>
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
            </div>
            {/* ここに書く */}
        </>
    );
}
