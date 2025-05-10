"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { overlapEvent } from "../(header)/overlap-event";
const Wave = dynamic(() => import("./wave"), { ssr: false });

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
            threshold: 0,
        });
        overlapEvent.emit(false);
        observer.observe(target);
        return () => {
            observer.unobserve(target);
        };
    }, []);
    return (
        <div ref={targetRef} className="top_animation absolute flex h-full w-full items-center justify-center bg-white">
            <Wave />
        </div>
    );
}
