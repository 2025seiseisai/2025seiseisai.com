/* eslint better-tailwindcss/no-unregistered-classes: 0 */

"use client";
import React, { useState } from "react";
import { eventData, locations} from "./event-data";
import pagestyles from "./event.module.scss";
import timestyles from "./time.module.scss";
import Events from "./events-photo/Events.svg"
import Play from "./events-photo/play.svg";
import Ticket from "./events-photo/ticket.svg";
import Mappin from "./events-photo/map-pin.svg";
import Seriken from "./events-photo/seriken.svg";
import Utenji from "./events-photo/utenji.svg";
import Day1on from "./events-photo/.svg";

<Events className={pagestyles.events} />

export default function TimeTablePage() {
  // --- タイムテーブル用 state ---
  const [day, setDay] = useState<"day1" | "day2">("day1");
  const [locationIndex, setLocationIndex] = useState(0);

  // --- アコーディオン用 state ---
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const toggleOpen = (index: number, isOpen: boolean) => {
    setOpenIndexes((prev) =>
      isOpen ? [...prev, index] : prev.filter((i) => i !== index)
    );
  };
  const getAccordionTop = (index: number) => {
    let top = 1704; // 1つ目のtop
    for (let i = 0; i < index; i++) {
      top += openIndexes.includes(i) ? 402 : 120;
      top += 20;
    }
    return top;
  };

  // --- 時間目盛り ---
  const hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

    // --- 表示する場所 ---
  const location = locations[locationIndex];

  // --- 時間を分に変換する関数 ---
  const toMinutes = (time: string) => {
    const [h, m] = time.split(":").map(Number);
    return (h - 9) * 60 + m;
  };

  return (
    <div className={timestyles.page}>
      {/* --- Day切り替え --- */}
      <div className={timestyles.controls}>
        <button onClick={() => setDay("day1")}>Day 1</button>
        <button onClick={() => setDay("day2")}>Day 2</button>
      </div>

      {/* --- 場所切り替え --- */}
      <div className={timestyles.controls}>
        <button
          onClick={() =>
            setLocationIndex((prev) =>
              prev === 0 ? locations.length - 1 : prev - 1
            )
          }
        >
          ←
        </button>
        <span>{location}</span>
        <button
          onClick={() =>
            setLocationIndex((prev) =>
              prev === locations.length - 1 ? 0 : prev + 1
            )
          }
        >
          →
        </button>
      </div>

      {/* --- 時間軸 --- */}
      <div className={timestyles.timeline}>
        <div className={timestyles.timeScale}>
          {hours.map((h) => (
            <div key={h} className={timestyles.timeMark}>
              {h}:00
            </div>
          ))}
        </div>

        {/* --- イベントバー --- */}
        <div className={timestyles.events}>
          {eventData.map((event, i) =>
            event[day]
              .filter((d) => d.location === location)
              .map((d, j) => {
                const start = toMinutes(d.start);
                const end = toMinutes(d.end);
                const duration = end - start;
                return (
                  <div
                    key={`${i}-${j}`}
                    className={timestyles.event}
                    style={{
                      left: `${(start / (8 * 60)) * 100}%`,
                      width: `${(duration / (8 * 60)) * 100}%`,
                    }}
                  >
                    {event.name}
                    {d.label && <span>（{d.label}）</span>}
                  </div>
                );
              })
          )}
        </div>
      </div>

          <Utenji className={pagestyles.utenji} />
          <Seriken className={pagestyles.seriken} />

            <p className={pagestyles.introduction}>イベント紹介一覧</p>

            {eventData.map((event, i) => {
                const isOpen = openIndexes.includes(i);

                return (
                    <details
                        key={i}
                        className={pagestyles.accordion}
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
                        <summary className={`${pagestyles.summary} ${isOpen ? pagestyles.open : ""}`}>
                            <span className={pagestyles.eventName}>{event.name}</span>
                            <Play className={pagestyles.icon} />
                        </summary>

                        {event.ticket && (
                            <div className={pagestyles.ticketPhoto}>
                                <Ticket />
                            </div>
                        )}

                        {isOpen && event.description && <p>{event.description}</p>}

                        {isOpen && event.day1.length > 0 && (
                            <>
                                <h4>Day 1</h4>
                                <div className={pagestyles.detailsDay}>
                                    {event.day1.map((detail, j) => (
                                        <div key={j} className={pagestyles.detailItem}>
                                            {<Mappin className={pagestyles.mappinIcon} />}
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
                                <div className={pagestyles.detailsDay}>
                                    {event.day2.map((detail, j) => (
                                        <div key={j} className={pagestyles.detailItem}>
                                            {<Mappin className={pagestyles.mappinIcon} />}
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
        </div>
    );
}
