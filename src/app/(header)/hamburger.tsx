"use client";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useEffect, useRef } from "react";
import HamburgerAnimation from "./hamburger.lottie.json";
import styles from "./hamburger.module.scss";

export default function Hamburger({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
    const hamburgerRef = useRef<LottieRefCurrentProps | null>(null);
    useEffect(() => {
        hamburgerRef.current?.setDirection(open ? 1 : -1);
        hamburgerRef.current?.play();
    }, [open]);
    return (
        <button
            className={`z-100000002 flex aspect-1/1 h-[30px] cursor-pointer items-center justify-center transition-all duration-500 outline-none
                md:h-[40px] ${open ? styles.opening : "mr-[min(40px,8svw)]"}`}
            onClick={() => {
                setOpen(!open);
            }}
        >
            <div className={"h-2/3 w-2/3 md:h-1/2 md:w-1/2"}>
                <Lottie lottieRef={hamburgerRef} animationData={HamburgerAnimation} autoplay={false} loop={false} />
            </div>
        </button>
    );
}
