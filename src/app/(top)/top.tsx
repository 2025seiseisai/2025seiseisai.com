"use client";
import ThemeLogo from "@/assets/theme-logo.svg";
import dynamic from "next/dynamic";
import styles from "./page.module.scss";
const Wave = dynamic(() => import("./wave"), { ssr: false });

export function Top() {
    return (
        <>
            <div className="relative z-10000 mt-[-64px] aspect-[1920/1080] max-h-[100svh] w-full overflow-hidden shadow-[0_0_3px_#0b0e0f]">
                <div className="absolute flex h-full w-full items-center justify-center bg-white">
                    <Wave />
                </div>
                <div className="absolute h-full w-full">
                    <div className={styles.animation_float_x}>
                        <div className={styles.animation_float_y}>
                            <ThemeLogo className="h-[18%] w-[50%]" />
                        </div>
                    </div>
                </div>
            </div>
            <p className={styles.example}>トップページ</p>
        </>
    );
}
