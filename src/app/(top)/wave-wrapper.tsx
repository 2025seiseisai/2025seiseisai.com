"use client";
import { eventBus } from "@/impl/eventBus";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
const Wave = dynamic(() => import("./wave"), { ssr: false });

export default function WaveWrapper() {
    const targetRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const target = targetRef.current;
        if (!target) {
            eventBus.emit("overlap", false);
            return;
        }
        const observer = new IntersectionObserver(([entry]) => eventBus.emit("overlap", entry.isIntersecting), {
            root: null,
            threshold: 0,
        });
        eventBus.emit("overlap", false);
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
