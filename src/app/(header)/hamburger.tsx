"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import HamburgerAnimation from "./hamburger.json";
import style from "./hamburger.module.scss";
export function Hamburger() {
    return (
        <>
            {/* eslint-disable-next-line */}
            <div className={style.hamburger_box + ` mr-5`}>
                <Player src={HamburgerAnimation} />
            </div>
        </>
    );
}
