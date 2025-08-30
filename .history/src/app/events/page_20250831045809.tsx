/* eslint better-tailwindcss/no-unregistered-classes: 0 */

"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { eventData, locations } from "./event-data";
import pagestyles from "./event.module.scss";
import Day1off from "./events-photo/day1off.svg";
import Day1on from "./events-photo/day1on.svg";
import Day2off from "./events-photo/day2off.svg";
import Day2on from "./events-photo/day2on.svg";
import Events from "./events-photo/Events.svg";
import Left from "./events-photo/left.svg";
import Mappin from "./events-photo/map-pin.svg";
import Right from "./events-photo/right.svg";
import Seriken from "./events-photo/seriken.svg";
import Ticket from "./events-photo/ticket.svg";
import Utenji from "./events-photo/utenji.svg";
import Play from "./events-photo/yajirusi.svg";
import timestyles from "./time.module.scss";
import Line from "./events-photo/line.svg";

export default function TimeTablePage() {
    // --- アコーディオン用 state ---
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);
    const toggleOpen = (index: number, isOpen: boolean) => {
        setOpenIndexes((prev) => (isOpen ? [...prev, index] : prev.filter((i) => i !== index)));
    };

    const getAccordionTop = (index: number) => {
        let top = 1704; // 1つ目のtop
        for (let i = 0; i < index; i++) {
            top += openIndexes.includes(i) ? 402 : 120;
            top += 20;
        }
        return top;
    };

    // Day切替
    const [day, setDay] = useState<"day1" | "day2">("day1");
    // Location切替
    const [locationIndex, setLocationIndex] = useState(0);

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    // Emblaスライド変更時にlocationIndex更新
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setLocationIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (emblaApi) {
            emblaApi.on("select", onSelect);
        }
    }, [emblaApi, onSelect]);

    // 左右ボタン
    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const HOUR_HEIGHT = 105;
    const OFFSET_TOP = 53;
    const halfHours = Array.from({ length: 8 * 2 + 1 }, (_, i) => i * 0.5);

    // --- 時間目盛り ---
    const hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

    // --- 時間を分に変換する関数 ---
    const toMinutes = (time: string) => {
        const [h, m] = time.split(":").map(Number);
        return (h - 9) * 60 + m;
    };

  return (
        <div className={timestyles.page}>
      {/* --- Location切り替え（左右ボタン＋スワイプ） --- */}
        <Events className={pagestyles.eventsIcon} />

            <div className={timestyles.topControls}>
                <button onClick={scrollPrev} className={timestyles.arrowBtn}>
                    <Left />
                </button>

                <div className={timestyles.dayControls}>
                    <button onClick={() => setDay("day1")}>{day === "day1" ? <Day1on /> : <Day1off />}</button>
                    <button onClick={() => setDay("day2")}>{day === "day2" ? <Day2on /> : <Day2off />}</button>
                </div>

                <button onClick={scrollNext} className={timestyles.arrowBtn}>
                    <Right />
                </button>
            </div>
            <div className={timestyles.embla} ref={emblaRef}>
                <div className={timestyles.emblaContainer}>
                    {locations.map((loc, index) => (
                        <div className={timestyles.emblaSlide} key={index}>
                            <span className={timestyles.locationName}>{loc}</span>

                            {/* タイムテーブル*/}
                            <div className={timestyles.timeline}>
                                {/* 時間軸 */}
                                <div className={timestyles.timeScale}>
                                    {hours.map((h) => (
                                        <div key={h} className={timestyles.timeMark}>
                                            {h}:00
                                        </div>
                                    ))}
                                </div>

                                <div className={timestyles.timelineLines}>
                                    {halfHours.map((halfHour, idx) => {
                                    const top = OFFSET_TOP + halfHour * HOUR_HEIGHT; // 30分=0.5時間
                                    return <Line key={idx} className={timestyles.line} style={{ top: `${top}px` }} />;
                                    })}
                                </div>

                                {/* イベントバー */}
                                <div className={timestyles.events}>
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
                                                            top: `${OFFSET_TOP +(start / 60) * HOUR_HEIGHT}px`,
                                                            height: `${(duration / 60) * HOUR_HEIGHT}px`,
                                                        }}
                                                    >
                                                        <span className={timestyles.startTime}>{d.start}</span>
                                                        <div className={timestyles.eventName}>
                                                            {event.name}
                                                            {d.label && <span>（{d.label}）</span>}
                                                        </div>
                                                        <span className={timestyles.endTime}>{d.end}</span>
                                                    </div>
                                                );
                                            }),
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Utenji className={pagestyles.utenjiIcon} />
            <Seriken className={pagestyles.serikenIcon} />
            <p className={pagestyles.introduction}>イベント紹介一覧</p>

            {eventData.map((event, i) => {
                const isOpen = openIndexes.includes(i);

                return (
                    <details
                        key={i}
                        className={pagestyles.accordion}
                        open={isOpen}
                        onToggle={(e) => toggleOpen(i, (e.target as HTMLDetailsElement).open)}
                    >
                        <summary className={`${pagestyles.summary} ${isOpen ? pagestyles.open : ""}`}>
                            <Play className={pagestyles.icon} />
                            <span className={pagestyles.eventName}>{event.name}</span>
                        </summary>

                        {event.ticket && (
                            <div className={pagestyles.ticketPhoto}>
                                <Ticket className={pagestyles.ticketicon} />
                            </div>
                        )}

                        <div className={pagestyles.content}>
                        {/* Day1 */}
                        {event.day1.length > 0 && (
                        <>
                            <h4 className={pagestyles.dayTitle}>【1日目】</h4>
                            <div className={pagestyles.detailsDay}>
                                {event.day1.map((detail, j) => (
                            <div key={j} className={pagestyles.detailItem}>
                            <Mappin className={pagestyles.mappinIcon} />
                            <span className={pagestyles.location}>{detail.location}</span>
                            <span className={pagestyles.time}>{detail.start} - {detail.end}</span>
                            <span className={pagestyles.label}>{detail.label}</span>
                        </div>
                        ))}
                        </div>
                        </>
                        )}

                        {/* Day2 */}
                        {event.day2.length > 0 && (
                        <>
                            <h4 className={pagestyles.dayTitle}>【2日目】</h4>
                            <div className={pagestyles.detailsDay}>
                                {event.day2.map((detail, j) => (
                                    <div key={j} className={pagestyles.detailItem}>
                                    <Mappin className={pagestyles.mappinIcon} />
                                    <span className={pagestyles.location}>{detail.location}</span>
                                    <span className={pagestyles.time}>{detail.start} - {detail.end}</span>
                                    <span className={pagestyles.label}>{detail.label}</span>
                                </div>
                                ))}
                            </div>
                            </>
                        )}

                            {/* 説明文 */}
                                    {event.description && (
                                    <p className={pagestyles.description}>{event.description}</p>
                                )}
                            </div>
                    </details>
                );
            })}
        </div>
    );
}
