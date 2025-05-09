"use client";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef, useState } from "react";
import LoadingAnimation from "./loading.json";

export default function Loading() {
    const [isFinished, setIsFinished] = useState(false);
    const animationRef = useRef<LottieRefCurrentProps>(null);
    return (
        <Lottie
            lottieRef={animationRef}
            animationData={LoadingAnimation}
            autoplay
            loop={false}
            className="h-[125%] w-full transform-[scale(1.35)]"
            onEnterFrame={(e) => {
                if (!animationRef.current || isFinished) return;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const currentFrame = (e as any).currentTime;
                if (typeof currentFrame !== "number") return;
                const totalFrames = animationRef.current?.animationItem?.totalFrames;
                if (totalFrames && currentFrame >= totalFrames * 0.8) {
                    setIsFinished(true);
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const style = (document.getElementsByClassName("top_loading")[0] as any).style;
                    if (!style) return;
                    //style.opacity = "0";
                    //style.pointerEvents = "none";
                }
            }}
        />
    );
}
