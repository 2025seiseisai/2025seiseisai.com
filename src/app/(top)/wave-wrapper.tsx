"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { overlapEvent } from "../(header)/overlap-event";
import "./wave.css";
const Wave = dynamic(() => import("./wave"), {
    ssr: false,
});

export default function WaveWrapper() {
    const targetRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const target = targetRef.current;
        if (!target) {
            overlapEvent.emit(false);
            return;
        }
        const observer = new IntersectionObserver(([entry]) => overlapEvent.emit(entry.isIntersecting), {
            root: null,
            threshold: 0.05,
        });
        overlapEvent.emit(false);
        observer.observe(target);
        return () => {
            observer.unobserve(target);
        };
    }, []);
    return (
        <div
            ref={targetRef}
            className={
                // eslint-disable-next-line
                "top_animation absolute flex aspect-1920/1080 min-h-full min-w-full items-center justify-center overflow-hidden"
            }
        >
            <Wave />
        </div>
    );
}
