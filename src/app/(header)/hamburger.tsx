"use client";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef } from "react";
import HamburgerAnimation from "./hamburger.json";

export default function Hamburger({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
    const hamburgerRef = useRef<LottieRefCurrentProps | null>(null);
    return (
        <button
            className="mr-[40px] flex aspect-1/1 h-80/134 cursor-pointer items-center justify-center"
            onClick={() => {
                hamburgerRef.current?.setDirection(open ? -1 : 1);
                hamburgerRef.current?.play();
                setOpen(!open);
            }}
        >
            <div className="h-1/2 w-1/2">
                <Lottie lottieRef={hamburgerRef} animationData={HamburgerAnimation} autoplay={false} loop={false} />
            </div>
        </button>
    );
}
