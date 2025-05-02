"use client";
import ThemeLogo from "@/assets/theme-logo.svg";
import dynamic from "next/dynamic";
import styles from "./page.module.scss";

import CountdownTimer from "./CountdownTimer";

const Wave = dynamic(() => import("./wave"), { ssr: false });

export function Top() {
    return (
        <>
            <div className="relative z-10000 mt-[-64px] aspect-[1920/1080] max-h-[100svh] w-full overflow-hidden shadow-[0_0_3px_#0b0e0f]">
                <div className="absolute flex h-full w-full items-center justify-center bg-white">
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
            <p className={styles.example}>トップページ</p>
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
                        <p className={styles.countdown_title}>菁々祭まで</p>
                        <p className={styles.timer}>
                            <CountdownTimer />
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
