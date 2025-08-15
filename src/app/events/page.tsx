/* eslint better-tailwindcss/no-unregistered-classes: 0 */
import { eventData } from "./event-data.js";
import styles from "./page.module.scss";

export const metadata = {
    title: "Event | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

export default function Page() {
    return (
        <>
            <p className={styles.example}>イベント紹介一覧</p>

            {eventData.map((event, i) => (
                <details key={i}>
                    <summary>{event.name}</summary>
                    {event.description && <p>{event.description}</p>}

                    {event.day1.length > 0 && (
                        <>
                            <h4>Day 1</h4>
                            {event.day1.map((detail, j) => (
                                <div key={j}>
                                    {detail.label && <strong>{detail.label}</strong>}
                                    <p>{detail.location}</p>
                                    <p>
                                        {detail.start} - {detail.end}
                                    </p>
                                </div>
                            ))}
                        </>
                    )}

                    {event.day2.length > 0 && (
                        <>
                            <h4>Day 2</h4>
                            {event.day2.map((detail, j) => (
                                <div key={j}>
                                    {detail.label && <strong>{detail.label}</strong>}
                                    <p>{detail.location}</p>
                                    <p>
                                        {detail.start} - {detail.end}
                                    </p>
                                </div>
                            ))}
                        </>
                    )}
                </details>
            ))}
        </>
    );
}
