/* eslint better-tailwindcss/no-unregistered-classes: 0 */

"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { eventData, locations } from "./event-data";
import pagestyles from "./event.module.scss";
import Left from "./events-photo/left.svg";
import Mappin from "./events-photo/map-pin.svg";
import Right from "./events-photo/right.svg";
import Seriken from "./events-photo/seriken.svg";
import Ticket from "./events-photo/tickets.svg";
import Utenji from "./events-photo/utenji.svg";
import Play from "./events-photo/yajirusi.svg";
import timestyles from "./time.module.scss";
import Line from "./events-photo/line.svg";
import Shosai from "./events-photo/shosai.svg";

export default function TimeTablePage() {
    // --- アコーディオン用 state ---
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);
    const toggleOpen = (index: number, isOpen: boolean) => {
        setOpenIndexes((prev) => (isOpen ? [...prev, index] : prev.filter((i) => i !== index)));
    };

    // Day切替
    const [day, setDay] = useState<"day1" | "day2">("day1");;

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

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

    const HOUR_HEIGHT = 105;
    const OFFSET_TOP = 17;
    const halfHours = Array.from({ length: 8 * 2 + 1 }, (_, i) => i * 0.5);

    //時間目盛り
    const hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

    //時間を分に変換する関数
    const toMinutes = (time: string) => {
        const [h, m] = time.split(":").map(Number);
        return (h - 9) * 60 + m;
    };

  return (
        <div className={timestyles.page}>
          <div className={timestyles.eventsWrapper}>
              <div className={timestyles.eventsTitle}>
                <span className={timestyles.firstLetter}>E</span>vents
              </div>
            </div>
            <div className={timestyles.topControls}>
                <button onClick={scrollPrev} className={timestyles.arrowBtn}>
                    <Left />
                </button>

              <div className={timestyles.dayControls}>
                    <button
                        className={`${timestyles.dayBtn} ${day === "day1" ? timestyles.active : ""}`}
                        onClick={() => setDay("day1")}
                    >
                        1日目
                    </button>
                    <button
                        className={`${timestyles.dayBtn} ${day === "day2" ? timestyles.active : ""}`}
                        onClick={() => setDay("day2")}
                    >
                        2日目
                    </button>
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
                                <div className={timestyles.dashedLines}>
                                {hours.map((h, i) => (
                                <div
                                    {halfHours.map((halfHour, idx) => {
                                        const top = OFFSET_TOP + halfHour * HOUR_HEIGHT; // 30分=0.5時間
                                        key={i}
                                        className={timestyles.dashed}
                                        style={{ top: `${top}px` }} // 1時間=105px の高さ
                                    })}
                                </>
                                ))}
                                </div>
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
                                                        <button
                                                            className={timestyles.shosaiBtn}
                                                            onClick={() => {
                                                                setOpenIndexes((prev) =>
                                                                    prev.includes(i) ? prev : [...prev, i]
                                                                );
                                                                setTimeout(() => {
                                                                    document.getElementById(`event-${i}`)?.scrollIntoView({
                                                                        behavior: "smooth",
                                                                        block: "start",
                                                                    });
                                                                }, 0);
                                                            }}
                                                            >
                                                            <Shosai />
                                                        </button>
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

            <div className={pagestyles.utenjiSection}>
              <div className={pagestyles.utenjiBox}>
                <div className={pagestyles.utenjiHeader}>
                    <Utenji className={pagestyles.utenjiIcon} />
                    <div className={pagestyles.utenjiTitle}>雨天時について</div>
                </div>
                <p className={pagestyles.utenjiText}>雨天時は転心殿前・グラウンドのイベントはすべて中止になります。雨天時のスケジュールをご確認ください。</p>
              </div>
            </div>
            <div className={pagestyles.utenjiSection}>
              <div className={pagestyles.utenjiBox}>
                <div className={pagestyles.utenjiHeader}>
                    <Seriken className={pagestyles.utenjiIcon} />
                    <div className={pagestyles.utenjiTitle}>整理券について</div>
                </div>
                <p className={pagestyles.utenjiText}>「要整理券」のマークがついたイベントには整理券が必要です。各種整理券は整理券配布場所にてイベント開始の一時間前から配布します。</p>
              </div>
            </div>
            <div className={pagestyles.eventListHeader}>
                <div className={pagestyles.redBar}></div>
                <span className={pagestyles.introduction}>イベント紹介</span>
            </div>

          <div className={pagestyles.accordionWrapper}>
            {eventData.map((event, i) => {
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
                            <div className={pagestyles.summaryContent}>
                                <div className={pagestyles.titleRow}>
                                    <Play className={pagestyles.icon} />
                                    <span className={pagestyles.eventName}>{event.name}</span>
                                </div>

                                {event.ticket && (
                                <div className={pagestyles.ticketPhoto}>
                                    <Ticket className={pagestyles.ticketicon} />
                                </div>
                                )}
                            </div>
                        </summary>

                        <div className={pagestyles.content}>
                        {/* Day1 */}
                        {event.day1.length > 0 && (
                        <>
                            <div className={pagestyles.detailsBlock}>
                                <div className={pagestyles.headerRow}>
                                    <Mappin className={pagestyles.mappinIcon} />
                                    <h4 className={pagestyles.dayTitle}>【1日目】</h4>
                                </div>
                                <div className={pagestyles.detailsDay}>
                                    {event.day1.map((detail, j) => (
                                <div key={j} className={pagestyles.detailItem}>
                                <span className={pagestyles.location}>{detail.location}</span>
                                <span className={pagestyles.time}>{detail.start} - {detail.end}</span>
                                <span className={pagestyles.label}>{detail.label}</span>
                            </div>
                        ))}
                        </div>
                        </div>
                        </>
                        )}

                        {/* Day2 */}
                            {event.day2.length > 0 && (
                        <>
                            <div className={pagestyles.detailsBlock}>
                                <div className={pagestyles.headerRow}>
                                    <Mappin className={pagestyles.mappinIcon} />
                                    <h4 className={pagestyles.dayTitle}>【2日目】</h4>
                                </div>
                                <div className={pagestyles.detailsDay}>
                                    {event.day2.map((detail, j) => (
                                <div key={j} className={pagestyles.detailItem}>
                                <span className={pagestyles.location}>{detail.location}</span>
                                <span className={pagestyles.time}>{detail.start} - {detail.end}</span>
                                <span className={pagestyles.label}>{detail.label}</span>
                            </div>
                        ))}
                        </div>
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
          </div>
    );
}
