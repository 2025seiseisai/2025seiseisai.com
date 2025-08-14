import Link from "next/link";
import styles from "./page.module.scss";
import ReturnTop from "./ReturnTop.svg";

export function NotFound({
    code,
    title,
    message1,
    message2,
    message3,
}: {
    code: string;
    title: string;
    message1: string;
    message2: string;
    message3: string;
}) {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.container}>
                    <p className={styles.title}>
                        <span className={styles.red}>{code[0]}</span>
                        {code.substring(1)}
                    </p>
                    <p className={styles.subtitle}>
                        <span className={styles.red}>{title[0]}</span>
                        {title.substring(1)}
                    </p>
                    <div className={styles.text_box}>
                        <p className={styles.text}>{message1}</p>
                        <p className={styles.text}>
                            {message2}
                            <br className={styles.break} />
                            {message3}
                        </p>
                    </div>
                    <Link href="/" className={styles.button_box}>
                        <ReturnTop className={styles.button} />
                    </Link>
                </div>
            </div>
        </>
    );
}
