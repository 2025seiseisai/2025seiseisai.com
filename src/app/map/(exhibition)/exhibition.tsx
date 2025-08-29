import { ExhibitionFloor, locations, exhibitionData } from "./exhibition-data";
import styles from "./page.module.scss";
import { exhibitionIcons } from "../(exhibition)/exhibition-icons"; // ファイルの先頭でimport
import Link from "next/link";
function exhibition() {
    // SVGがdivで囲まれて埋め込まれる
    // divの大きさを変えることでSVGの大きさも変わる
    return <div dangerouslySetInnerHTML={{ __html: exhibitionIcons["PRパート"] }} />
}

export function Exhibition1({ floor }: { floor: ExhibitionFloor }) {
    const filteredExs =
    Object.entries(exhibitionData).filter(
        ([, data]) => locations[data.location] === floor
        );
    return (
        <div>
            {filteredExs.map(([name, data]) => (
                <div key={name} className={styles.card}>
                    <div className={styles.icon} />
                    <div className={styles.content}>
                        <div className={styles.location}>{data.location}</div>
                        <div className={styles.title}>{name}</div>
                        <div className={styles.buttons}>
                            {data.stamp && <button className={styles.button}>スタンプラリー</button>}
                            {data.events && <button className={styles.button}>イベント</button>}
                            <button className={styles.button}>バザー</button>
                        </div>
                    </div>
                    <Link href="https://seiseisai.com/"  target="_blank" rel="noopener noreferrer">
                        <div className={styles.arrow}>➡️</div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export function Exhibition2() {
    return (
        <div className={styles.tagContainer}>
            <p className={styles.tagtitle}>各種タグについて</p>
            <p className={styles.tagiconstamp}>スタンプラリー</p>
            <p className={styles.tagtextstamp}>スタンプラリーを行っている団体です。</p>
            <p className={styles.tagiconevents}>イベント</p>
            <p className={styles.tagtextevents}>イベントを行っている団体です。詳しくは<link><a className={styles.underline} >Evens</a></link>をチェック！</p>
            <p className={styles.tagiconbazaar}>バザー</p>
            <p className={styles.tagtextbazaar}>バザーでの販売を行っている団体です。</p>
        </div>
    );
}
