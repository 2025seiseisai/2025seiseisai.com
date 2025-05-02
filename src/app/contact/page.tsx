import styles from "./page.module.scss";

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
                    <div className={styles.top}></div>
                    <p className={styles.middle_text}></p>
                    <div className={styles.bottom}></div>
                </div>
                <div className={styles.form}></div>
            </div>
        </>
    );
}
