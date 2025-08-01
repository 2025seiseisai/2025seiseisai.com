import Link from "next/link";
import Back from "./back.svg";
import styles from "./page.module.scss";
import SP_Back from "./sp_back.svg";

export const metadata = {
    title: "Privacy Policy | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

export default function Page() {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.back}>
                    <Back className={styles.back_image} />
                    <SP_Back className={styles.sp_back_image} />
                </div>
                <p className={styles.title}>
                    <span className={styles.red}>P</span>rivacy Policy
                </p>
                <p className={styles.subtitle}>プライバシーポリシー</p>
                <div>
                    <p className={styles.text1}>&gt;&gt;&emsp;アクセス解析ツールについて</p>
                    <p className={styles.text2}>
                        当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
                    </p>
                    <p className={styles.text3}>
                        この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細は
                        <Link
                            href="https://marketingplatform.google.com/about/analytics/terms/jp/"
                            rel="noopener noreferrer"
                            target="_blank"
                            className={styles.url}
                        >
                            Googleアナリティクスサービス利用規約ページ
                        </Link>
                        や
                        <Link
                            href="https://policies.google.com/?hl=ja"
                            rel="noopener noreferrer"
                            target="_blank"
                            className={styles.url}
                        >
                            Googleポリシーと規約ページ
                        </Link>
                        をご覧ください。
                    </p>
                </div>
            </div>
        </>
    );
}
