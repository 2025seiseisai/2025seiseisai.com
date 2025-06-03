"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Theme from "../(assets)/theme.svg";
import styles from "./header.module.scss";
import InstagramIcon from "./instagram.svg";
import { overlapEvent } from "./overlap-event";
import XIcon from "./x.svg";
import YouTubeIcon from "./youtube.svg";

const Hamburger = dynamic(() => import("./hamburger"), { ssr: false });

function HeaderLink({
    href,
    title1,
    title2,
    setOpen,
    disabled = false,
}: {
    href: string;
    title1: string;
    title2: string;
    setOpen: (open: boolean) => void;
    disabled?: boolean;
}) {
    return disabled ? (
        <div className={styles.headerLink}>
            <div className={styles.headerLinkText}>
                <span className={`${styles.headerLinkTitle1} ${styles.disabledHeaderLinkText}`}>{title1}</span>
            </div>
        </div>
    ) : (
        <Link href={href} className={styles.headerLink} onClick={() => setOpen(false)}>
            <div className={styles.headerLinkText}>
                <span className={styles.headerLinkTitle1}>{title1}</span>
                <span className={styles.headerLinkTitle2}>{title2}</span>
            </div>
            <div className={`${styles.headerLinkText} ${styles.headerLinkFront}`}>
                <span className={styles.headerLinkTitle1}>{title1}</span>
                <span className={styles.headerLinkTitle2}>{title2}</span>
            </div>
        </Link>
    );
}

export function Header() {
    const [open, setOpen] = useState(false);
    const [isOverlapping, setIsOverlapping] = useState(true);

    const setOpenImpl = (open: boolean) => {
        setOpen(open);
        if (open && document.body.offsetHeight > window.innerHeight) {
            const div = document.createElement("div");
            div.style.width = "100px";
            div.style.height = "100px";
            div.style.overflow = "scroll";
            div.style.position = "absolute";
            div.style.top = "-9999px";
            document.body.appendChild(div);
            const scrollbarWidth = div.offsetWidth - div.clientWidth;
            document.body.removeChild(div);
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollbarWidth}px`;
            document.body.style.backgroundColor = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "#2c2c2c"
                : "#fcfcfc";
        } else {
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = "0px";
            document.body.style.backgroundColor = "white";
        }
    };

    const pathname = usePathname();

    useEffect(() => {
        setIsOverlapping(false);
        overlapEvent.setFunc(setIsOverlapping);
    }, [pathname]);

    return (
        <header className={styles.header}>
            <div className={`${styles.headerContent} ${isOverlapping && !open ? styles.headerContentOverlapping : ""}`}>
                <Link href="/2025" className={styles.logoLink}>
                    <Theme className={styles.logo} />
                </Link>
                <div className={styles.navLinks}>
                    <Link href="/2025" className={styles.navLink}>
                        Top
                    </Link>
                    <Link href="/2025/news" className={styles.navLink}>
                        News
                    </Link>
                    <Link href="/2025/blog" className={styles.navLink}>
                        Blog
                    </Link>
                    <Link href="/2025/contact" className={styles.navLink}>
                        Contact
                    </Link>
                </div>
                <Hamburger open={open} setOpen={setOpenImpl} />
            </div>
            <div className={`${styles.menuOverlay} ${open ? "" : styles.menuOverlayHidden}`}>
                <div className={`${styles.menuContent} ${!open ? styles.menuContentClosed : styles.menuContentOpen}`}>
                    <div className={styles.menuLinksContainer}>
                        <HeaderLink href="/2025" title1="Top" title2="Webサイトトップページ" setOpen={setOpenImpl} />
                        <HeaderLink
                            href="/2025/news"
                            title1="News"
                            title2="菁々祭に関する最新のお知らせ"
                            setOpen={setOpenImpl}
                        />
                        <HeaderLink
                            href="/2025/theme-logo"
                            title1="Theme & Logo"
                            title2="テーマとロゴの紹介"
                            setOpen={setOpenImpl}
                            disabled
                        />
                        <HeaderLink
                            href="/2025/access"
                            title1="Access"
                            title2="東大寺学園へのアクセス方法"
                            setOpen={setOpenImpl}
                            disabled
                        />
                        <HeaderLink
                            href="/2025/events"
                            title1="Events"
                            title2="イベント内容やタイムテーブル"
                            setOpen={setOpenImpl}
                            disabled
                        />
                        <HeaderLink
                            href="/2025/map"
                            title1="Map"
                            title2="校内の展示・バザーの地図"
                            setOpen={setOpenImpl}
                            disabled
                        />
                        <HeaderLink
                            href="/2025/goods"
                            title1="Goods"
                            title2="菁々祭オリジナルグッズ一覧"
                            setOpen={setOpenImpl}
                            disabled
                        />
                        <HeaderLink
                            href="/2025/tickets"
                            title1="Tickets"
                            title2="Web整理券の取得・申込ページ"
                            setOpen={setOpenImpl}
                            disabled
                        />
                        <HeaderLink
                            href="/2025/blog"
                            title1="Blog"
                            title2="PRパート員による菁々祭紹介"
                            setOpen={setOpenImpl}
                        />
                        <HeaderLink
                            href="/2025/special"
                            title1="Special"
                            title2="壁紙やアイコンなど特別コンテンツ"
                            setOpen={setOpenImpl}
                            disabled
                        />
                        <HeaderLink
                            href="/2025/downloads"
                            title1="Downloads"
                            title2="部誌などのダウンロードページ"
                            setOpen={setOpenImpl}
                            disabled
                        />
                        <HeaderLink
                            href="/2025/gallery"
                            title1="Gallery"
                            title2="菁々祭デザインのギャラリー"
                            setOpen={setOpenImpl}
                            disabled
                        />
                    </div>
                    <div className={styles.snsContainer}>
                        <div className={styles.snsLinks}>
                            <h1 className={styles.snsTitle}>SNS</h1>
                            <div className={styles.snsIconLinks}>
                                <Link
                                    href="https://x.com/seiseisai_tdj"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className={styles.snsLink}
                                >
                                    <XIcon className={styles.snsIcon} />
                                    <p className={styles.snsText}>X (Twitter)</p>
                                </Link>
                                <Link
                                    href="https://www.youtube.com/@seiseisai_tdj"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className={styles.snsLink}
                                >
                                    <YouTubeIcon className={styles.snsIcon} />
                                    <p className={styles.snsText}>YouTube</p>
                                </Link>
                                <Link
                                    href="https://www.instagram.com/seiseisai_tdj"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className={styles.snsLink}
                                >
                                    <InstagramIcon className={styles.snsIcon} />
                                    <p className={styles.snsText}>Instagram</p>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.snsPlaceholder}></div>
                    </div>
                </div>
                <div
                    className={`${styles.menuBackground} ${!open ? styles.menuBackgroundClosed : styles.menuBackgroundOpen}`}
                    onClick={() => setOpenImpl(false)}
                ></div>
            </div>
        </header>
    );
}
