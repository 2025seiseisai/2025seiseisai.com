import { useEffect, useState } from "react";
import styles from "./CountdownTimer.module.scss";

export default function Countdown() {
    const [viewState, setViewState] = useState<"before" | "during1" | "intermission" | "during2" | "after">("before");
    const [timeLeft, setTimeLeft] = useState({ day: "0", hour: "00", minute: "00", second: "00" });
    const [title, setTitle] = useState<React.ReactNode>(<p></p>);
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        const day1Start = new Date(2025, 8, 6, 9, 0);
        const day1End = new Date(2025, 8, 6, 15, 0);
        const day2Start = new Date(2025, 8, 7, 9, 0);
        const day2End = new Date(2025, 8, 7, 15, 0);

        const updateTimer = () => {
            const now = new Date();
            const updateCountdown = (targetTime: Date) => {
                const restMillisecond = targetTime.getTime() - now.getTime();
                const day = Math.floor(restMillisecond / 1000 / 60 / 60 / 24);
                const hour = Math.floor(restMillisecond / 1000 / 60 / 60) % 24;
                const minute = Math.floor(restMillisecond / 1000 / 60) % 60;
                const second = Math.floor(restMillisecond / 1000) % 60;

                setTimeLeft({
                    day: String(day),
                    hour: String(hour).padStart(2, "0"),
                    minute: String(minute).padStart(2, "0"),
                    second: String(second).padStart(2, "0"),
                });
            };

            if (now < day1Start) {
                setViewState("before");
                updateCountdown(day1Start);
            } else if (now >= day1Start && now < day1End) {
                setViewState("during1");
            } else if (now >= day1End && now < day2Start) {
                setViewState("intermission");
                updateCountdown(day2Start);
            } else if (now >= day2Start && now < day2End) {
                setViewState("during2");
            } else {
                setViewState("after");
            }

            if (now < day1Start) {
                setTitle(<p className={styles.title_before}>菁々祭まで…</p>);
            } else if (now >= day1Start && now < day1End) {
                setTitle(<p className={styles.title_active}>菁々祭1日目開催中！</p>);
            } else if (now >= day1End && now < day2Start) {
                setTitle(<p className={styles.title_before}>菁々祭2日目まで…</p>);
            } else if (now >= day2Start && now < day2End) {
                setTitle(<p className={styles.title_active}>菁々祭2日目開催中！</p>);
            } else {
                setTitle(
                    <p className={styles.title_ended}>
                        終了しました。
                        <br />
                        ご来場ありがとうございました。
                    </p>,
                );
            }
        };

        updateTimer();
        setInitialized(true);
        const timerId = setInterval(updateTimer, 1000);
        return () => clearInterval(timerId);
    }, []);

    if (!initialized) {
        return null;
    }

    if (viewState === "after" || viewState === "during1" || viewState === "during2") {
        return <div className={styles.timer_container}></div>;
    }

    return (
        <>
            {title}
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
        </>
    );
}
