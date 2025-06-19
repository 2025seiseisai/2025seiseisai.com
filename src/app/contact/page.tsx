import { Nunito_Sans } from "next/font/google";
import Link from "next/link";
import Instagram from "./img/instagram.svg";
import Redirect from "./img/log-out.svg";
import Hukidashi from "./img/message-circle.svg";
import Twitter from "./img/twitter_26px.svg";
import styles from "./page.module.scss";

const nunitoSans = Nunito_Sans({
    subsets: ["latin"],
    weight: ["500"],
});

export const metadata = {
    title: "Contact | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

export default function Page() {
    return (
        <>
            <div className={styles.content}>
                <p className={styles.title}>
                    <span className={styles.red}>C</span>ontact
                </p>
                <p className={styles.text1}>何かご不明な点などございましたら、いつでもお気軽にご相談ください。</p>
                <p className={styles.text2}>
                    下記のフォームに必要事項をご⼊⼒の上、「送信」ボタンを押してください。
                    <br />
                    担当者より回答・返信させていただきます。
                </p>
                <div className={styles.square}>
                    <div className={styles.top}>
                        <Hukidashi />
                        <p className={styles.top_text}>各種SNSでのお問い合わせ</p>
                    </div>
                    <p className={styles.middle_text}>各種SNSでも受け付けております。</p>
                    <div className={`${styles.bottom}`}>
                        {" "}
                        <Link href="https://x.com/seiseisai_tdj" rel="noopener noreferrer" target="_blank">
                            <div className={styles.sns_button}>
                                <Twitter className={styles.btn_img} />
                                <p className={[styles.bottom_text, nunitoSans.className].join("")}>X</p>
                                <Redirect className={styles.btn_img} />
                            </div>{" "}
                        </Link>{" "}
                        <Link href="https://www.instagram.com/seiseisai_tdj/" rel="noopener noreferrer" target="_blank">
                            <div className={styles.sns_button}>
                                <Instagram className={styles.btn_img} />
                                <p className={[styles.bottom_text, nunitoSans.className].join("")}>Instagram</p>
                                <Redirect className={styles.btn_img} />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.form}>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScyOVUb2E6NZDz0VpntnAs3ASfm47ztiksuerzL9LhAbVbVjA/viewform?embedded=true"
                    width="100%"
                    height="700px"
                >
                    読み込んでいます…
                </iframe>
            </div>
        </>
    );
}
