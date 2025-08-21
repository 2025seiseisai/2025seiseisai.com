/* eslint better-tailwindcss/no-unregistered-classes: 0 */
import { useRouter } from "next/navigation";
import { useState } from "react";
import Back from "./back.svg";
import { eventData } from "./event-data.js";
import Line from "./introduction-line.svg";
import Mappin from "./map-pin.svg";
import styles from "./page.module.scss";
import Play from "./play.svg";
import Ticket from "./ticket.svg";

export const metadata = {
    title: "Event | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

export default function Page() {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);
    const router = useRouter();

    const toggleOpen = (index: number, isOpen: boolean) => {
        setOpenIndexes((prev) => (isOpen ? [...prev, index] : prev.filter((i) => i !== index)));
    };

    const getAccordionTop = (index: number) => {
        let top = 820; // 1つ目のtop
        for (let i = 0; i < index; i++) {
            top += openIndexes.includes(i) ? 402 : 120; // 前のアコーディオンが開いているなら402、閉じているなら120
            top += 32; // 間隔
        }
        return top;
    };

    return (
        <>
            <Back className={styles.backIcon} onClick={() => router.back()} style={{ cursor: "pointer" }} />
            <Line className={styles.introductionIcon} />
            <p className={styles.introduction}>イベント紹介一覧</p>

            {eventData.map((event, i) => {
                const isOpen = openIndexes.includes(i);

                return (
                    <details
                        key={i}
                        className={styles.accordion}
                        open={isOpen}
                        onToggle={(e) => toggleOpen(i, (e.target as HTMLDetailsElement).open)}
                        style={{
                            position: "absolute",
                            left: "199px",
                            top: `${getAccordionTop(i)}px`,
                            width: "1042px",
                            height: isOpen ? 402 : 120,
                            overflow: "hidden",
                        }}
                    >
                        <summary className={`${styles.summary} ${isOpen ? styles.open : ""}`}>
                            <span className={styles.eventName}>{event.name}</span>
                            <Play className={styles.icon} />
                        </summary>

                        {event.ticket && (
                            <div className={styles.ticketPhoto}>
                                <Ticket />
                            </div>
                        )}

                        {isOpen && event.description && <p>{event.description}</p>}

                        {isOpen && event.day1.length > 0 && (
                            <>
                                <h4>Day 1</h4>
                                <div className={styles.detailsDay}>
                                    {event.day1.map((detail, j) => (
                                        <div key={j} className={styles.detailItem}>
                                            {<Mappin className={styles.mappinIcon} />}
                                            <div>
                                                {detail.label && <strong>{detail.label}</strong>}
                                                <p>{detail.location}</p>
                                                <p>
                                                    {detail.start} - {detail.end}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {isOpen && event.day2.length > 0 && (
                            <>
                                <h4>Day 2</h4>
                                <div className={styles.detailsDay}>
                                    {event.day2.map((detail, j) => (
                                        <div key={j} className={styles.detailItem}>
                                            {<Mappin className={styles.mappinIcon} />}
                                            <div>
                                                {detail.label && <strong>{detail.label}</strong>}
                                                <p>{detail.location}</p>
                                                <p>
                                                    {detail.start} - {detail.end}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </details>
                );
            })}
        </>
    );
}
