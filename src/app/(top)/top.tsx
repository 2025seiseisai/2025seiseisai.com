"use client";
import ThemeLogo from "@/assets/theme-logo.svg";
import dynamic from "next/dynamic";
import styles from "./page.module.scss";
//リンク
import Link from "next/link";
//タイマー
import Countdown from "./CountdownTimer";
//イメージ
import { eventBus } from "@/impl/eventBus";
import { useEffect, useRef } from "react";
import FunbyoLogo from "./images/Funbyo-Logo.svg";
import TdjLogo from "./images/TDJ-Logo.svg";
import Vector_lg from "./images/Vector (1).svg";
import Vector_sm from "./images/Vector.svg";
import MoreAllow from "./images/arrow-right-circle.svg";
import Headphone from "./images/headphones.svg";
import Logout from "./images/log-out.svg";

const Wave = dynamic(() => import("./wave"), { ssr: false });

export function Top() {
    const targetRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const target = targetRef.current;
        if (!target) {
            eventBus.emit("overlap", false);
            return;
        }
        const observer = new IntersectionObserver(([entry]) => eventBus.emit("overlap", entry.isIntersecting), {
            root: null,
            threshold: 0,
        });
        eventBus.emit("overlap", false);
        observer.observe(target);
        return () => {
            observer.unobserve(target);
        };
    }, []);
    return (
        <>
            <div className="relative z-10000 mt-[-64px] aspect-[1920/1080] max-h-[100svh] w-full overflow-hidden">
                <div
                    ref={targetRef}
                    className="top_animation absolute flex h-full w-full items-center justify-center bg-white"
                >
                    <Wave />
                </div>
                <div className="absolute h-full w-full">
                    <div className={styles.animation_float_x}>
                        <div className={styles.animation_float_y}>
                            <ThemeLogo className="h-[18%] w-[50%]" />
                        </div>
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
            <div className={styles.tytle_1}>
                <Vector_lg className={styles.mark_lg} />
                <Vector_sm className={styles.mark_sm} />
                <p>SEISEISAI</p>
            </div>
            <TdjLogo className={styles.logo} />
            <p className={styles.main_text}>菁々祭とは東大寺学園で行われる文化祭のこと。</p>
            <p className={styles.main_text}>第61回菁々祭 「分秒」 は2025年9月に開催予定。</p>
            <p className={styles.main_text}>過去60年の伝統と令和の新しい風が鳴り響く菁々祭、ぜひご覧あれ!</p>
            <div className={styles.tytle_1}>
                <Vector_lg className={styles.mark_lg} />
                <Vector_sm className={styles.mark_sm} />
                <p>分秒</p>
            </div>
            <FunbyoLogo className={styles.logo} />
            <p className={styles.main_text}>「分秒」には文化祭にかけてきた一分一秒も惜しまぬ情熱が込められています。</p>
            <p className={styles.main_text}>
                また、一分一秒が61秒であると言う意味から第61回にふさわしいテーマとなっています。
            </p>
            <div className={styles.tytle_1}>
                <Vector_lg className={styles.mark_lg} />
                <Vector_sm className={styles.mark_sm} />
                <p>LOGO-PV</p>
            </div>
            <div className={styles.pv_container}>
                <div className={styles.youtube_link}>
                    <iframe src="https://www.youtube.com/embed/4h_s7_eRCo0"></iframe>
                </div>
                <p className={styles.main_text_pv}>LogoPVが公開されています!</p>
            </div>
            <div className={styles.news_all_container}>
                <div className={styles.tytle_container}>
                    <p className={styles.tytle_2}>
                        <span style={{ color: "#de0d22" }}>N</span>ews
                    </p>
                </div>
                <div className={styles.news_text_container}>
                    <div className={styles.news_text}>
                        <p className={styles.news_date}>2025.06.08</p>
                        <p className={styles.news_tytle}>第61回菁々祭開幕！</p>
                    </div>
                    <div className={styles.news_text}>
                        <p className={styles.news_date}>2025.06.08</p>
                        <p className={styles.news_tytle}>第61回菁々祭開幕！</p>
                    </div>
                    <div className={styles.news_text}>
                        <p className={styles.news_date}>2025.06.08</p>
                        <p className={styles.news_tytle}>第61回菁々祭開幕！</p>
                    </div>
                </div>

                <div className={styles.more_container}>
                    <Link href="/news" className={styles.more_parents}>
                        <MoreAllow className={styles.more} />
                        <p className={styles.more}>More</p>
                    </Link>
                </div>
            </div>
            <p className={styles.tytle_3}>Access</p>
            <p className={styles.tytle_3_jn}>アクセス</p>
            <div className={styles.access_container}>
                <div className={styles.map}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6559.363254209741!2d135.78601437633282!3d34.7132092729152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60013c8734fc9973%3A0x55c23a5ae3354ec9!2z5p2x5aSn5a-65a2m5ZyS5Lit5a2m5qCh44O76auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1746189416051!5m2!1sja!2sjp"></iframe>
                </div>
                <div className={styles.adress}>
                    <p className={styles.schoolname}>東大寺学園中学校・高等学校</p>
                    <p className={styles.schooladress}>〒631-0803 奈良市山陵町1375</p>
                    <Link
                        href="https://tdj.ac.jp/"
                        className={styles.schoollink}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                    >
                        https://tdj.ac.jp/
                    </Link>
                </div>
            </div>
            <p className={styles.tytle_3}>Contact</p>
            <p className={styles.tytle_3_jn}>お問い合わせ</p>
            <p className={styles.contact_text}>菁々祭に関するご質問はお問い合わせページからお願いいたします。</p>
            <Link href={"/contact"} className={styles.question}>
                <Headphone className={styles.headphone} />
                <p className={styles.question_text}>お問い合わせ</p>
                <Logout className={styles.logout} />
            </Link>
        </>
    );
}
