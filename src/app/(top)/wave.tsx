"use client";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useEffect, useRef } from "react";
import WaveAnimation from "./wave.lottie.json";

export default function Wave() {
    const ref = useRef<LottieRefCurrentProps>(null);
    useEffect(() => {
        ref.current?.setSpeed(0.5);
        ref.current?.play();
    }, []);
    return <Lottie lottieRef={ref} animationData={WaveAnimation} autoplay={false} loop />;
}
