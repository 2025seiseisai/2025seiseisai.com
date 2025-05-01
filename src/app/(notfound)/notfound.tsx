import styles from "./page.module.scss";

export function NotFound() {
    return (
        <>
            <p className={styles.title}>
                <span className={styles.red}>4</span>04
            </p>
            <p className={styles.subtitle}>
                <span className={styles.red}>P</span>age Not Found
            </p>
        </>
    );
}
