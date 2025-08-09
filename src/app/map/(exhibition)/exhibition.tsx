import styles from "./page.module.scss";

export enum ExhibitionFloor {
    高校棟1階 = 1,
    高校棟2階 = 2,
    高校棟3階 = 3,
    高校棟4階 = 4,
    中学棟1階 = 5,
    中学棟2階 = 6,
    中学棟3階 = 7,
}

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
