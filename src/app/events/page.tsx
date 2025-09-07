/* eslint better-tailwindcss/no-unregistered-classes: 0 */

"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { EventData, eventData, locations } from "./event-data";
import pagestyles from "./event.module.scss";
import Left from "./events-photo/left.svg";
import Mappin from "./events-photo/map-pin.svg";
import Right from "./events-photo/right.svg";
import Seriken from "./events-photo/seriken.svg";
import Shosai from "./events-photo/shosai.svg";
import Play from "./events-photo/yajirusi.svg";
import timestyles from "./time.module.scss";

export default function TimeTablePage() {
    // --- アコーディオン用 state ---
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);
    const toggleOpen = (index: number, isOpen: boolean) => {
        setOpenIndexes((prev) => (isOpen ? [...prev, index] : prev.filter((i) => i !== index)));
    };

    // Day切替
    const [day, setDay] = useState<"day1" | "day2">("day2");

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        breakpoints: {
            // 768px以上の画面幅で適用
            "(min-width: 768px)": {
                slidesToScroll: 2, // 1回のスクロールで2つ移動
            },
            // 1200px以上の画面幅で適用
            "(min-width: 1024px)": {
                slidesToScroll: 3, // 1回のスクロールで4つ移動
            },
            "(min-width: 1440px)": {
                slidesToScroll: 4, // 1回のスクロールで4つ移動
            },
        },
    });

    // Emblaスライド変更時にlocationIndex更新
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
    }, [emblaApi]);

    useEffect(() => {
        if (emblaApi) {
            emblaApi.on("select", onSelect);
        }
    }, [emblaApi, onSelect]);

    // 左右ボタン
    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const halfHours = Array.from({ length: 8 * 2 + 1 }, (_, i) => i * 0.5);

    //時間目盛り
    const hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

    //時間を分に変換する関数
    const toMinutes = (time: string) => {
        const [h, m] = time.split(":").map(Number);
        return (h - 9) * 60 + m;
    };

    function eventListElement(event: EventData, i: number) {
        const isOpen = openIndexes.includes(i);

        return (
            <details
                id={`event-${i}`}
                key={i}
                className={pagestyles.accordion}
                open={isOpen}
                onToggle={(e) => toggleOpen(i, (e.target as HTMLDetailsElement).open)}
            >
                <summary className={`${pagestyles.summary} ${isOpen ? pagestyles.open : ""}`}>
                    <div>
                        <div className={pagestyles.titleRow}>
                            <Play className={pagestyles.icon} />
                            <span className={pagestyles.eventName}>{event.name}</span>
                        </div>

                        {event.ticket && <div className={pagestyles.ticketLabel}>要整理券</div>}
                    </div>
                </summary>

                <div className={pagestyles.content}>
                    {/* Day1 */}
                    {event.day1.length > 0 && (
                        <>
                            <div>
                                <div className={pagestyles.headerRow}>
                                    <Mappin className={pagestyles.mappinIcon} />
                                    <h4 className={pagestyles.dayTitle}>【1日目】</h4>
                                </div>
                                <div className={pagestyles.detailsDay}>
                                    {event.day1.map((detail, j) => (
                                        <div key={j} className={pagestyles.detailItem}>
                                            <span className={pagestyles.location}>{detail.location}</span>
                                            <span className={pagestyles.time}>
                                                {detail.start} - {detail.end}
                                            </span>
                                            <span>{detail.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}

                    {/* Day2 */}
                    {event.day2.length > 0 && (
                        <>
                            <div>
                                <div className={pagestyles.headerRow}>
                                    <Mappin className={pagestyles.mappinIcon} />
                                    <h4 className={pagestyles.dayTitle}>【2日目】</h4>
                                </div>
                                <div className={pagestyles.detailsDay}>
                                    {event.day2.map((detail, j) => (
                                        <div key={j} className={pagestyles.detailItem}>
                                            <span className={pagestyles.location}>{detail.location}</span>
                                            <span className={pagestyles.time}>
                                                {detail.start} - {detail.end}
                                            </span>
                                            <span>{detail.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}

                    {/* 説明文 */}
                    {event.description && <p className={pagestyles.description}>{event.description}</p>}
                </div>
            </details>
        );
    }

    return (
        <div className={timestyles.page}>
            <div className={timestyles.eventsWrapper}>
                <div className={timestyles.eventsTitle}>
                    <span className={timestyles.firstLetter}>E</span>vents
                </div>
            </div>
            <div className={timestyles.timeTableSection}>
                <div className={timestyles.topControls}>
                    <button onClick={scrollPrev} className={timestyles.arrowBtn}>
                        <Left />
                    </button>

                    <div className={timestyles.dayControls}>
                        <div className={timestyles.dayButtonWrapper}>
                            <button
                                className={`${timestyles.dayBtn} ${day === "day1" ? timestyles.active : ""}`}
                                onClick={() => setDay("day1")}
                            >
                                <span className={timestyles.dayNumber}>1</span>日目
                            </button>
                            <span className={timestyles.dayLabel}>9.06 sat</span>
                        </div>

                        <div className={timestyles.dayButtonWrapper}>
                            <button
                                className={`${timestyles.dayBtn} ${day === "day2" ? timestyles.active : ""}`}
                                onClick={() => setDay("day2")}
                            >
                                <span className={timestyles.dayNumber}>2</span>日目
                            </button>
                            <span className={timestyles.dayLabel}>9.07 sun</span>
                        </div>
                    </div>

                    <button onClick={scrollNext} className={timestyles.arrowBtn}>
                        <Right />
                    </button>
                </div>
                <div className={timestyles.embla} ref={emblaRef}>
                    <div className={timestyles.emblaContainer}>
                        {locations.map((loc, index) => (
                            <div className={timestyles.emblaSlide} key={index} id={`slide-${index}`}>
                                <span className={timestyles.locationName}>{loc}</span>

                                {/* タイムテーブル*/}
                                <div className={timestyles.timeline}>
                                    {/* 時間軸 */}
                                    {hours.map((h, i) => (
                                        <div key={h} className={timestyles.timeMark} style={{ top: `${128 * i}px` }}>
                                            {h}:00
                                        </div>
                                    ))}

                                    {halfHours.map((halfHour, i) => {
                                        return (
                                            <div
                                                key={i}
                                                className={timestyles.dashed}
                                                style={{ top: `${12 + 64 * i}px` }}
                                            />
                                        );
                                    })}

                                    {/* イベントバー */}
                                    {eventData.map((event, i) =>
                                        event[day]
                                            .filter((d) => d.location === loc)
                                            .map((d, j) => {
                                                const start = toMinutes(d.start);
                                                const end = toMinutes(d.end);
                                                const duration = end - start;
                                                return (
                                                    <div
                                                        key={`${i}-${j}`}
                                                        className={timestyles.event}
                                                        style={{
                                                            top: `${12 + (start / 60) * 128}px`,
                                                            height: `${(duration / 60) * 128}px`,
                                                        }}
                                                        onClick={() => {
                                                            setOpenIndexes((prev) =>
                                                                prev.includes(i) ? prev : [...prev, i],
                                                            );
                                                            setTimeout(() => {
                                                                document.getElementById(`event-${i}`)?.scrollIntoView({
                                                                    behavior: "smooth",
                                                                    block: "start",
                                                                });
                                                            }, 0);
                                                        }}
                                                    >
                                                        <span className={timestyles.startTime}>{d.start}</span>
                                                        <div className={timestyles.eventName}>
                                                            {event.name}
                                                            {d.label && <span>（{d.label}）</span>}
                                                        </div>
                                                        <span className={timestyles.endTime}>{d.end}</span>
                                                        <button className={timestyles.shosaiBtn}>
                                                            <Shosai />
                                                        </button>
                                                    </div>
                                                );
                                            }),
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={pagestyles.utenjiSection}>
                <div className={pagestyles.utenjiBox}>
                    <div className={pagestyles.utenjiHeader}>
                        <Seriken className={pagestyles.utenjiIcon} />
                        <div className={pagestyles.utenjiTitle}>整理券について</div>
                    </div>
                    <p className={pagestyles.utenjiText}>
                        「要整理券」のマークがついたイベントには整理券が必要です。各種整理券は整理券配布場所にてイベント開始の一時間前から配布します。
                    </p>
                </div>
            </div>
            <div className={pagestyles.eventListHeader}>イベント紹介</div>

            <div className={pagestyles.accordionContainer}>
                <div className={pagestyles.accordionWrapper}>
                    {eventData.slice(0, 22).map((event, i) => {
                        return eventListElement(event, i);
                    })}
                </div>
                <div className={pagestyles.accordionWrapper}>
                    {eventData.slice(22).map((event, i) => {
                        return eventListElement(event, i + 22);
                    })}
                </div>
            </div>
        </div>
    );
}
