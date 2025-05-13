"use client";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useEffect, useRef, useState } from "react";
import LoadingAnimation from "./loading.json";

export default function Loading() {
    const isLoaded = useRef(0);
    const [isStarted, setIsStarted] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const animationRef = useRef<LottieRefCurrentProps>(null);
    useEffect(() => {
        const startLoading = () => {
            if (isLoaded.current != 0) {
                if (isLoaded.current == 2) animationRef.current?.play();
                return;
            }
            if (sessionStorage.getItem("loaded")) {
                isLoaded.current = 1;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const style = (document.getElementsByClassName("top_loading")[0] as any)?.style;
                if (!style) return;
                style.transition = "clip-path 0.3s linear, background-color 0.3s ease-in-out";
                style.backgroundColor = "#f4f4f4";
                setTimeout(() => {
                    style.clipPath = "polygon(100svw 100svh, 100svw 100svh, 100svw 100svh)";
                    style.pointerEvents = "none";
                }, 300);
                return;
            }
            isLoaded.current = 2;
            sessionStorage.setItem("loaded", "true");
            window.scrollTo(0, 0);
        };
        startLoading();
        if (process.env.NODE_ENV !== "development") startLoading();
    }, [isLoaded]);
    return (
        <Lottie
            lottieRef={animationRef}
            animationData={LoadingAnimation}
            autoplay={false}
            loop={false}
            className="top_loading_animation h-[125%] w-full transform-[scale(1.35)] transition-[opacity] duration-200"
            style={{ opacity: 0 }}
            onEnterFrame={(e) => {
                if (!isStarted) {
                    setIsStarted(true);
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const style3 = (document.getElementsByClassName("top_loading")[0] as any)?.style;
                    if (style3) {
                        style3.transition = "clip-path 0.3s linear, background-color 0.12s ease";
                        style3.backgroundColor = "#de0d22";
                    }
                    setTimeout(() => {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const style1 = (document.getElementsByClassName("top_loading_logo")[0] as any)?.style;
                        if (style1) style1.opacity = "100";
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const style2 = (document.getElementsByClassName("top_loading_animation")[0] as any)?.style;
                        if (style2) style2.opacity = "100";
                    }, 80);
                }
                if (!animationRef.current || isFinished) return;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const currentFrame = (e as any).currentTime;
                if (typeof currentFrame !== "number") return;
                const totalFrames = animationRef.current?.animationItem?.totalFrames;
                if (totalFrames && currentFrame >= totalFrames * 0.85) {
                    setIsFinished(true);
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const style = (document.getElementsByClassName("top_loading")[0] as any)?.style;
                    if (!style) return;
                    style.clipPath = "polygon(100svw 100svh, 100svw 100svh, 100svw 100svh)";
                    style.pointerEvents = "none";
                }
            }}
        />
    );
}
