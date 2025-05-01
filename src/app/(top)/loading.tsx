"use client";
import Lottie from "lottie-react";
import LoadingAnimation from "./loading.json";

export default function Loading() {
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-[#f7f7f7]">
            <Lottie animationData={LoadingAnimation} autoplay loop />
        </div>
    );
}
