import { ExhibitionFloor } from "./exhibition-data";
import styles from "./page.module.scss";

export function Exhibition1({ floor }: { floor: ExhibitionFloor }) {
    return (
        <>
            {/* ここに書く */}
            <p className={styles.example}>エキシビション1</p>
            <p>現在のフロア: {floor}</p>
        </>
    );
}

export function Exhibition2() {
    return (
        <>
            {/* ここに書く */}
            <p className={styles.example}>エキシビション2</p>
        </>
    );
}
