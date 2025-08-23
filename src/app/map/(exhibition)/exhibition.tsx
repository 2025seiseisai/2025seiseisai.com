import { ExhibitionFloor } from "./exhibition-data";
import styles from "./page.module.scss";
import { exhibitionIcons } from "../(exhibition)/exhibition-icons"; // ファイルの先頭でimport

function Bazaar() {
    // SVGがdivで囲まれて埋め込まれる
    // divの大きさを変えることでSVGの大きさも変わる
    return <div dangerouslySetInnerHTML={{ __html: exhibitionIcons["PRパート"] }} />
}

export function Exhibition1({ floor }: { floor: ExhibitionFloor }) {
    return (
        <div className={styles.exhibitionContainer}>
            {/* ここに書く */};
            <p className={styles.example}>エキシビション1</p>
            <p>現在のフロア: {floor}</p>
        </div>
    );
}

export function Exhibition2() {
    return (
        <div className={styles.tagContainer}>
            <div>
                <p>各種タグについて</p>
            </div>
            <div className={styles.tagstamp}>
                <div className={styles.tagiconstamp}>
                    <p>スタンプラリー</p>
                </div>
                <div className={styles.tagtextstamp}>
                    <p>スタンプラリーを行っている団体です。</p>
                </div>
            </div>
            <div className={styles.tagevents}>
                <div className={styles.tagiconevents}>
                    <p>イベント</p>
                </div>
                <div className={styles.tagtextevents}>
                    <p>イベントを行っている団体です。詳しくは<span style={{ textDecoration: 'underline' }}>Evens</span>をチェック！</p>
                </div>
            </div>
            <div className={styles.tagbazaar}>
                <div className={styles.tagiconbazaar}>
                    <p>バザー</p>
                </div>
                <div className={styles.tagtextbazaar}>
                    <p>バザーでの販売を行っている団体です。</p>
                </div>
            </div>
        </div>
    );
}
