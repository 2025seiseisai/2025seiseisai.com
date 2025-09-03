"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Theme from "../(assets)/theme.svg";
import ContactIcon from "./contact.svg";
import HamburgerFallback from "./hamburger-fallback.svg";
import styles from "./header.module.scss";
import InstagramIcon from "./instagram.svg";
import { overlapEvent } from "./overlap-event";
import PrivacyIcon from "./privacy.svg";
import ReservationIcon from "./reservation.svg";
import XIcon from "./x.svg";
import YouTubeIcon from "./youtube.svg";

const Hamburger = dynamic(() => import("./hamburger"), {
    ssr: false,
    loading: () => (
        <div
            className="z-100000002 mr-[min(40px,8svw)] flex aspect-1/1 h-[30px] w-auto items-center justify-center
                md:h-[40px]"
        >
            <div className={"h-2/3 w-2/3 md:h-1/2 md:w-1/2"}>
                <HamburgerFallback />
            </div>
        </div>
    ),
});

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
            <div className={`${styles.headerLinkText} ${styles.headerLinkBack}`}>
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
    const [isOverlapping, setIsOverlapping] = useState(false);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);

    const setOpenImpl = (open_flag: boolean) => {
        setOpen(open_flag);
        if (!open_flag) setIsMouseOver(false);
        if (open_flag) {
            const scrollTop = window.scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollTop}px`;
            document.body.style.overflowY = "scroll";
            if (headerRef.current) {
                headerRef.current.style.position = "relative";
                headerRef.current.style.transform = `translateY(${scrollTop}px)`;
            }
            const background = document.getElementsByClassName("background")[0] as HTMLElement;
            if (background) {
                background.style.transform = `translateY(${scrollTop}px)`;
            }
        } else {
            const scrollTop = -parseInt(document.body.style.top || "0", 10);
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.overflowY = "";
            window.scrollTo(0, scrollTop);
            if (headerRef.current) {
                headerRef.current.style.position = "";
                headerRef.current.style.transform = "";
            }
            const background = document.getElementsByClassName("background")[0] as HTMLElement;
            if (background) {
                background.style.transform = "";
            }
        }
    };

    const pathname = usePathname();

    useEffect(() => {
        setIsOverlapping(false);
        overlapEvent.setFunc(setIsOverlapping);
    }, [pathname]);

    return (
        <header
            ref={headerRef}
            className={styles.header}
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
        >
            <div className={styles.headerBackground}></div>
            <div
                className={`${styles.headerContent}
                    ${isOverlapping && !open && !isMouseOver ? styles.headerContentOverlapping : ""}`}
            >
                <Link href="/" className={styles.logoLink}>
                    <Theme className={styles.logo} />
                </Link>
                <div className={styles.navLinks}>
                    <Link href="/" className={styles.navLink}>
                        Top
                    </Link>
                    <Link href="/news" className={styles.navLink}>
                        News
                    </Link>
                    <Link href="/blog" className={styles.navLink}>
                        Blog
                    </Link>
                    <Link href="/contact" className={styles.navLink}>
                        Contact
                    </Link>
                </div>
                <Link href="/reservation" className={styles.navReservationLink}>
                    事前予約
                </Link>
                <Hamburger open={open} setOpen={setOpenImpl} />
            </div>
            <div className={`${styles.menuOverlay} ${open ? "" : styles.menuOverlayHidden}`}>
                <div className={`${styles.menuContent} ${!open ? styles.menuContentClosed : styles.menuContentOpen}`}>
                    <div className={styles.menuLinksContainer}>
                        <HeaderLink href="/" title1="Top" title2="Webサイトトップページ" setOpen={setOpenImpl} />
                        <HeaderLink
                            href="/news"
                            title1="News"
                            title2="菁々祭に関する最新のお知らせ"
                            setOpen={setOpenImpl}
                        />
                        <HeaderLink
                            href="/theme-logo"
                            title1="Theme & Logo"
                            title2="テーマとロゴの紹介"
                            setOpen={setOpenImpl}
                            disabled
                        />
                        <HeaderLink
                            href="/access"
                            title1="Access"
                            title2="東大寺学園へのアクセス方法"
                            setOpen={setOpenImpl}
                        />
                        <HeaderLink
                            href="/events"
                            title1="Events"
                            title2="イベント内容やタイムテーブル"
                            setOpen={setOpenImpl}
                            disabled
                        />
                        <HeaderLink
                            href="/map"
                            title1="Map"
                            title2="校内の展示・バザーの地図"
                            setOpen={setOpenImpl}
                            disabled
                        />
                        <HeaderLink
                            href="/goods"
                            title1="Goods"
                            title2="菁々祭オリジナルグッズ一覧"
                            setOpen={setOpenImpl}
                        />
                        <HeaderLink
                            href="/tickets"
                            title1="Tickets"
                            title2="Web整理券の取得・申込ページ"
                            setOpen={setOpenImpl}
                            disabled
                        />
                        <HeaderLink
                            href="/blog"
                            title1="Blog"
                            title2="PRパート員による菁々祭紹介"
                            setOpen={setOpenImpl}
                        />
                        <HeaderLink
                            href="/special"
                            title1="Special"
                            title2="壁紙やアイコンなど特別コンテンツ"
                            setOpen={setOpenImpl}
                        />
                        <HeaderLink
                            href="/downloads"
                            title1="Downloads"
                            title2="部誌などのダウンロードページ"
                            setOpen={setOpenImpl}
                            disabled
                        />
                        <HeaderLink
                            href="/archives"
                            title1="Archives"
                            title2="過去の菁々祭Webサイト"
                            setOpen={setOpenImpl}
                        />
                    </div>
                    <div className={styles.linksContainer}>
                        <div className={styles.snsLinks}>
                            <div className={styles.snsLinkItem}>
                                <Link
                                    href="https://x.com/seiseisai_tdj"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className={`${styles.snsLink} ${styles.linkButton}`}
                                >
                                    <XIcon className={styles.snsIcon} />
                                    <p className={styles.snsText}>
                                        X <span className={styles.twitterText}>(Twitter)</span>
                                    </p>
                                </Link>
                            </div>
                            <div className={styles.snsLinkItem}>
                                <Link
                                    href="https://www.youtube.com/@seiseisai_tdj"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className={`${styles.snsLink} ${styles.linkButton}`}
                                >
                                    <YouTubeIcon className={styles.snsIcon} />
                                    <p className={styles.snsText}>YouTube</p>
                                </Link>
                            </div>
                            <div className={styles.snsLinkItem}>
                                <Link
                                    href="https://www.instagram.com/seiseisai_tdj"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className={`${styles.snsLink} ${styles.linkButton}`}
                                >
                                    <InstagramIcon className={styles.snsIcon} />
                                    <p className={styles.snsText}>Instagram</p>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.snsLinks}>
                            <div className={styles.snsLinkItem}>
                                <Link
                                    href="/contact"
                                    onClick={() => setOpenImpl(false)}
                                    className={`${styles.snsLink} ${styles.linkButton}`}
                                >
                                    <ContactIcon className={styles.snsIcon} />
                                    <p className={styles.contactText}>お問い合わせ</p>
                                </Link>
                            </div>
                            <div className={styles.snsLinkItem}>
                                <Link
                                    href="/privacy-policy"
                                    onClick={() => setOpenImpl(false)}
                                    className={`${styles.snsLink} ${styles.linkButton}`}
                                >
                                    <PrivacyIcon className={styles.snsIcon} />
                                    <p className={styles.privacyText}>
                                        プライバシー
                                        <br />
                                        ポリシー
                                    </p>
                                </Link>
                            </div>
                            <div className={styles.snsLinkItem}>
                                <Link
                                    href="/reservation"
                                    onClick={() => setOpenImpl(false)}
                                    className={`${styles.snsLink} ${styles.linkButton}`}
                                >
                                    <ReservationIcon className={styles.snsIcon} />
                                    <p className={styles.contactText}>事前予約</p>
                                </Link>
                            </div>
                        </div>
                        <p className={styles.copyright}>© 2025 61st seiseisai “FUNBYO”, Created by PR part</p>
                    </div>
                </div>
                <div
                    className={`${styles.menuBackground}
                        ${!open ? styles.menuBackgroundClosed : styles.menuBackgroundOpen}`}
                    onClick={() => setOpenImpl(false)}
                ></div>
            </div>
        </header>
    );
}
