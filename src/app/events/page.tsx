/* eslint better-tailwindcss/no-unregistered-classes: 0 */
import { eventData } from "./event-data.js";
import styles from "./page.module.scss";
import React, { useState } from "react";
import Play from "./play.svg";
import Mappin from "./map-pin.svg";


export const metadata = {
    title: "Event | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

export default function Page() {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const toggleOpen = (index: number, isOpen: boolean) => {
    setOpenIndexes(prev =>
      isOpen ? [...prev, index] : prev.filter(i => i !== index)
    );
    };

    return (
        <>
            <p className={styles.example}>イベント紹介一覧</p>

            {eventData.map((event, i) => {
                const isOpen = openIndexes.includes(i);

                return (
                    <details
                        key={i}
                        className={styles.accordion}
                        open={isOpen}
                        onToggle={e =>
                            toggleOpen(i, (e.target as HTMLDetailsElement).open)}
                        style={{
                            position: "absolute",
                            left: "199px",
                            top: `${820 + i * 152}px`,
                            width: "1042px",
                            height: "120px",
                            overflow: "hidden",
                        }}
                    >
                        <summary className={styles.summary}>
                            <span>{event.name}</span>
                            <Play className={`${styles.icon} ${isOpen ? styles.open : ""}`} />
                            {event.name}
                        </summary>
                        {event.description && <p>{event.description}</p>}

                        {event.day1.length > 0 && (
                            <>
                                <h4>Day 1</h4>
                                {event.day1.map((detail, j) => (
                                    <div key={j} className={styles.detailItem}>
                                        <Mappin className={styles.mappinIcon} />
                                        <div>
                                            {detail.label && <strong>{detail.label}</strong>}
                                            <p>{detail.location}</p>
                                            <p>{detail.start} - {detail.end}</p>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}

                        {event.day2.length > 0 && (
                            <>
                                <h4>Day 2</h4>
                                {event.day2.map((detail, j) => (
                                    <div key={j} className={styles.detailItem}>
                                        <Mappin className={styles.mappinIcon} />
                                        <div>
                                            {detail.label && <strong>{detail.label}</strong>}
                                            <p>{detail.location}</p>
                                            <p>{detail.start} - {detail.end}</p>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </details>
                );
            })}
        </>
    );
}
