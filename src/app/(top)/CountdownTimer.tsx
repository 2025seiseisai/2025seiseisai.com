// タイマー用tsx
import { useEffect, useState } from "react";
import styles from "./CountdownTimer.module.scss";
export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({
        day: 0,
        hour: 0,
        minute: "00",
        second: "00",
    });

    useEffect(() => {
        const updateTimer = () => {
            const now = new Date();
            const goal = new Date(2025, 8, 6); // 2025年9月6日 (月は0-index)

            const restMillisecond = goal.getTime() - now.getTime();
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
        return () => clearInterval(timerId); // クリーンアップ
    }, []);

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
