import Link from "next/link";
import Back from "./back.svg";
import styles from "./page.module.scss";
import ReturnTop from "./ReturnTop.svg";

export function NotFound() {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.back}>
                    <Back className={styles.back_image} />
                </div>
                <p className={styles.title}>
                    <span className={styles.red}>4</span>04
                </p>
                <p className={styles.subtitle}>
                    <span className={styles.red}>P</span>age Not Found
                </p>
                <div className={styles.text_box}>
                    <p className={styles.text}>
                        アクセスしようとしたページは削除、変更されたか、現在利用できない可能性があります。
                    </p>
                    <p className={styles.text}>お手数をおかけしますが、ホームページのトップ、</p>
                    <p className={styles.text}>または上部のメニューよりおさがしいただきますようお願いいたします。</p>
                </div>
                <Link href="/">
                    <ReturnTop className={styles.button} />
                </Link>
            </div>
        </>
    );
}
