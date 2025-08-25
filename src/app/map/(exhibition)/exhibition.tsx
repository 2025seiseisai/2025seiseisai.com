import { ExhibitionFloor, locations, exhibitionData } from "./exhibition-data";
import styles from "./page.module.scss";
import { exhibitionIcons } from "../(exhibition)/exhibition-icons"; // ファイルの先頭でimport

function Bazaar() {
    // SVGがdivで囲まれて埋め込まれる
    // divの大きさを変えることでSVGの大きさも変わる
    return <div dangerouslySetInnerHTML={{ __html: exhibitionIcons["PRパート"] }} />
}

const filteredExs =
    Object.entries(exhibitionData).filter(
        ([, data]) => locations[data.location] === floor
    );

export function Exhibition1({ floor }: { floor: ExhibitionFloor }) {
    return (
        <div>
            <p>現在のフロア: {floor}</p>
            <image
                src={exhibitionIcons}
                width={56}
                height={56}
            />
            {filteredExs.map((ex) => (
                <div key={ex[0]}>
                <p>{ex[0]}</p>
                {ex[1].stamp && <div>スタンプラリー</div>}
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
            <p className={styles.tagtextevents}>イベントを行っている団体です。詳しくは<span className={styles.underline} >Evens</span>をチェック！</p>
            <p className={styles.tagiconbazaar}>バザー</p>
            <p className={styles.tagtextbazaar}>バザーでの販売を行っている団体です。</p>
        </div>
    );
}
