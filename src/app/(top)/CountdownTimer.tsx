// タイマー用tsx
import { useEffect, useState } from "react";
import styles from "./CountdownTimer.module.scss";

// ======== テスト用 ========
const TEST_NOW = new Date(2025, 8, 10, 10, 30); // ←テスト用
const now = TEST_NOW;
// =========================

export default function CountdownTimer() {
    const [viewState, setViewState] = useState<"before" | "during1" | "intermission" | "during2" | "after">("before");
    const [timeLeft, setTimeLeft] = useState({
        day: 0,
        hour: 0,
        minute: "00",
        second: "00",
    });

    useEffect(() => {
        const updateTimer = () => {
            //const now = new Date(); // テストの時はここをコメントアウト
            const start = new Date(2025, 8, 6, 9, 0); // 9/6 9:00
            const intermissionStart = new Date(2025, 8, 6, 15, 0); // 9/6 15:00
            const intermissionEnd = new Date(2025, 8, 7, 9, 0); // 9/7 9:00
            const end = new Date(2025, 8, 7, 15, 0); // 9/7 15:00

            if (now < start) {
                setViewState("before"); //開始前
                updateCountdown(start);
            } else if (now >= start && now < intermissionStart) {
                setViewState("during1"); //一日目開催中
            } else if (now >= intermissionStart && now < intermissionEnd) {
                setViewState("intermission"); //間
                updateCountdown(intermissionEnd);
            } else if (now >= intermissionEnd && now < end) {
                setViewState("during2"); //二日目開催中
            } else {
                setViewState("after"); //終了後
            }
        };

        const updateCountdown = (targetTime: Date) => {
            //const now = new Date(); // テストの時はここをコメントアウト
            const restMillisecond = targetTime.getTime() - now.getTime();
            const day = Math.floor(restMillisecond / 1000 / 60 / 60 / 24);
            const hour = Math.floor(restMillisecond / 1000 / 60 / 60) % 24;
            const minute = Math.floor(restMillisecond / 1000 / 60) % 60;
            const second = Math.floor(restMillisecond / 1000) % 60;

            setTimeLeft({
                day,
                hour,
                minute: String(minute).padStart(2, "0"),
                second: String(second).padStart(2, "0"),
            });
        };

        updateTimer(); // 初期表示
        const timerId = setInterval(updateTimer, 1000);
        return () => clearInterval(timerId);
    }, []);

    if (viewState === "after") {
        //タイマー非表示
        return <div className={styles.timer_container}></div>;
    }

    if (viewState === "during1" || viewState === "during2") {
        // 開催中
        return <div className={styles.timer_container}></div>;
    }

    // 通常カウントダウン (before, intermission)
    return (
        <div className={styles.timer_container}>
            <div className={styles.unit}>
                <p className={styles.number}>{timeLeft.day}</p>
                <p className={styles.label}>DAYS</p>
            </div>
            <div className={styles.unit}>
                <p className={styles.number}>{timeLeft.hour}</p>
                <p className={styles.label}>HOURS</p>
            </div>
            <div className={styles.unit}>
                <p className={styles.number}>{timeLeft.minute}</p>
                <p className={styles.label}>MIN</p>
            </div>
            <div className={styles.unit}>
                <p className={styles.number}>{timeLeft.second}</p>
                <p className={styles.label}>SEC</p>
            </div>
        </div>
    );
}
export function CountdownTitle() {
    const [title, setTitle] = useState("");
    const [titleClass, setTitleClass] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            //const now = new Date(); //テストの時はここをコメントアウト

            const day1Start = new Date(2025, 8, 6, 9, 0); // 9/6 9:00
            const day1End = new Date(2025, 8, 6, 15, 0); // 9/6 15:00
            const day2Start = new Date(2025, 8, 7, 9, 0); // 9/7 9:00
            const day2End = new Date(2025, 8, 7, 15, 0); // 9/7 15:00

            let newTitle = "";

            if (now < day1Start) {
                newTitle = "菁々祭まで…";
                setTitleClass(styles.title_before);
            } else if (now >= day1Start && now < day1End) {
                newTitle = "菁々祭1日目開催中！";
                setTitleClass(styles.title_active);
            } else if (now >= day1End && now < day2Start) {
                newTitle = "菁々祭2日目まで…";
                setTitleClass(styles.title_before);
            } else if (now >= day2Start && now < day2End) {
                newTitle = "菁々祭2日目開催中！";
                setTitleClass(styles.title_active);
            } else {
                newTitle = "終了しました。ご来場ありがとうございました。";
                setTitleClass(styles.title_ended);
            }

            setTitle(newTitle);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return <p className={titleClass}>{title}</p>;
}
