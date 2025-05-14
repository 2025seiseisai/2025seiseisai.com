import Logo from "@/assets/logo.svg";
import ThemeLogo from "@/assets/theme-logo.svg";
import NewsManager from "@/impl/news";
import { YouTubeEmbed } from "@next/third-parties/google";
import { IBM_Plex_Sans_JP } from "next/font/google";
import LoadingWrapper from "./loading-wrapper";
import styles from "./page.module.scss";
import WaveWrapper from "./wave-wrapper";
//リンク
import Link from "next/link";
//タイマー
import Countdown from "./CountdownTimer";
//イメージ
import FunbyoLogo from "./images/Funbyo-Logo.svg";
import Vector_lg from "./images/Vector (1).svg";
import Vector_sm from "./images/Vector.svg";
import MoreAllow from "./images/arrow-right-circle.svg";
import Headphone from "./images/headphones.svg";
import Logout from "./images/log-out.svg";
import Slide from "./slide";

const ibmPlexSansJP = IBM_Plex_Sans_JP({
    subsets: ["latin"],
    weight: "600",
});

export async function Top() {
    const news = await NewsManager.getNewsSortedByDate(3);
    return (
        <>
            <div
                className="top_loading z-20000 flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-[#ffffff]"
                style={{
                    transition: "none",
                    clipPath: "polygon(-100dvh 100dvh, 100svw 100dvh, 100svw -100svw)",
                    position: "fixed",
                    inset: 0,
                }}
            >
                <LoadingWrapper />
                <div
                    className="absolute flex h-[33%]
                w-full items-center justify-center brightness-0 filter"
                >
                    <Logo
                        className="top_loading_logo max-h-full max-w-full transform-[scale(0.42)_translateX(10%)_translateY(-15%)] transition-[opacity] duration-200"
                        style={{ opacity: 0 }}
                    />
                </div>
            </div>
            <div className={styles.wave_container_padding}></div>
            <div
                className={`${styles.wave_container} absolute z-10000 mt-[-45px] flex h-[50svh] w-full items-center justify-center overflow-hidden md:mt-[-64px] md:h-[100svh]`}
            >
                <div className="absolute h-full w-full">
                    <Logo className={styles.animation_logo2} />
                </div>
                <WaveWrapper />
                <div className="absolute h-full w-full">
                    <div className={styles.animation_float_x}>
                        <div className={styles.animation_float_y}>
                            <ThemeLogo className={styles.animation_logo1} />
                        </div>
                    </div>
                </div>
                <div className={`${ibmPlexSansJP.className} absolute h-full w-full select-none`}>
                    <div className={styles.animation_text_container1}>
                        <h1>第61回</h1>
                        <h1>東大寺学園</h1>
                        <h1>｢菁々祭｣</h1>
                        <h1 className={styles.animation_text_1_3}>{`"分秒"`}</h1>
                    </div>
                    <div className={styles.animation_text_container2}>
                        <h2>
                            <span className={styles.animation_text_2_1}>9/6</span>
                            <span className={styles.animation_text_2_2}>土</span>
                            <span className={styles.animation_text_2_3}>―</span>
                            <span className={styles.animation_text_2_4}>9/7</span>
                            <span className={styles.animation_text_2_5}>日</span>
                        </h2>
                    </div>
                </div>
            </div>
            <p className={styles.COUNTDOWN}>COUNTDOWN</p>
            <div className={styles.top_countdown}>
                <div className={styles.top_countdown_main_container}>
                    <div className={styles.top_countdown_main}>
                        <div className={styles.date_info_container}>
                            <div className={styles.date_info}>
                                <h1 className={styles.date}>9.6</h1>
                                <p className={styles.day}>SAT</p>
                            </div>
                            <p className={styles.between_date}>-</p>
                            <div className={styles.date_info}>
                                <h1 className={styles.date}>9.7</h1>
                                <p className={styles.day}>SUN</p>
                            </div>
                        </div>
                        <div className={styles.date_info_sub_container}>
                            <p className={styles.date_info_sub}>2025 Summer</p>
                            <p className={styles.date_info_sub}>9:00 - 15:00</p>
                        </div>
                    </div>
                    <div className={styles.red_container}>
                        <Countdown />
                    </div>
                </div>
            </div>
            <div className={styles.title_1}>
                <Vector_lg className={styles.mark_lg} />
                <Vector_sm className={styles.mark_sm} />
                <p>SEISEISAI</p>
            </div>
            <Slide />
            <p className={styles.main_text}>菁々祭とは東大寺学園で行われる文化祭のこと。</p>
            <p className={styles.main_text}>第61回菁々祭 「分秒」 は2025年9月に開催予定。</p>
            <p className={styles.main_text}>過去60年の伝統と令和の新しい風が鳴り響く菁々祭、ぜひご覧あれ!</p>
            <div className={styles.title_1}>
                <Vector_lg className={styles.mark_lg} />
                <Vector_sm className={styles.mark_sm} />
                <p>分秒</p>
            </div>
            <FunbyoLogo className={styles.logo} />
            <p className={styles.main_text}>{`第61回菁々祭のテーマは"分秒"です。`}</p>
            <p className={styles.main_text}>「1分1秒が“61”秒である」という遊び心を交えつつ、</p>
            <p className={styles.main_text}>生徒が一分一秒さえも惜しんで掛けてきた熱い想いが込められています。</p>
            <div className={styles.title_1}>
                <Vector_lg className={styles.mark_lg} />
                <Vector_sm className={styles.mark_sm} />
                <p>LOGO-PV</p>
            </div>
            <div className={styles.pv_container}>
                <div className={styles.youtube_link}>
                    <YouTubeEmbed videoid="4h_s7_eRCo0" />
                </div>
                <p className={styles.main_text_pv}>
                    ロゴ発表PVを公開中です！
                    <br />
                    ぜひご覧ください！
                </p>
            </div>
            <div className={styles.news_all_container}>
                <div className={styles.title_container}>
                    <p className={styles.title_2}>
                        <span style={{ color: "#de0d22" }}>N</span>ews
                    </p>
                </div>
                <div className={styles.news_text_container}>
                    {news.map((item) => {
                        const year = item.date.getFullYear();
                        const month = String(item.date.getMonth() + 1).padStart(2, "0");
                        const day = String(item.date.getDate()).padStart(2, "0");
                        return (
                            <Link
                                href={`/2025/news/${NewsManager.getLink(item._id)}`}
                                key={item._id.toString()}
                                className={styles.news_text}
                            >
                                <p className={styles.news_date}>
                                    {year}.{month}.{day}
                                </p>
                                <p className={styles.news_title}>{item.title}</p>
                            </Link>
                        );
                    })}
                </div>

                <div className={styles.more_container}>
                    <Link href="/2025/news" className={styles.more_parents}>
                        <MoreAllow className={styles.more_allow} />
                        <div className={styles.more}>
                            <p>More</p>
                        </div>
                    </Link>
                </div>
            </div>
            <p className={styles.title_3}>Access</p>
            <p className={styles.title_3_jn}>アクセス</p>
            <div className={styles.access_container}>
                <div className={styles.map}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6559.363254209741!2d135.78601437633282!3d34.7132092729152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60013c8734fc9973%3A0x55c23a5ae3354ec9!2z5p2x5aSn5a-65a2m5ZyS5Lit5a2m5qCh44O76auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1746189416051!5m2!1sja!2sjp"
                        loading="lazy"
                    ></iframe>
                </div>
                <div className={styles.adress}>
                    <p className={styles.schoolname}>東大寺学園中学校・高等学校</p>
                    <p className={styles.schooladress}>〒631-0803 奈良市山陵町1375</p>
                    <Link
                        href="https://www.tdj.ac.jp/"
                        className={styles.schoollink}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                    >
                        https://www.tdj.ac.jp/
                    </Link>
                </div>
            </div>
            <p className={styles.title_3}>Contact</p>
            <p className={styles.title_3_jn}>お問い合わせ</p>
            <p className={styles.contact_text}>菁々祭に関するご質問はお問い合わせページからお願いいたします。</p>
            <Link href={"/2025/contact"} className={styles.question}>
                <Headphone className={styles.headphone} />
                <p className={styles.question_text}>お問い合わせ</p>
                <Logout className={styles.logout} />
            </Link>
        </>
    );
}
