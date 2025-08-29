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
                            {data.stamp && <button className={styles.stampbutton}>スタンプラリー</button>}
                            {data.events && <button className={styles.eventsbutton}>イベント</button>}
                            <button className={styles.bazaarbutton}>バザー</button>
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

const tags = [
  {
    label: 'スタンプラリー',
    color: 'red',
    description: 'スタンプラリーを行っている団体です。',
  },
  {
    label: 'イベント',
    color: 'orange',
    description: (
    <>
      イベントを行っている団体です。詳しくは{' '}
      <a
        href="http://localhost:3000/2025"
        className={styles.highlight}
        target="_blank"
        rel="noopener noreferrer"
      >
        Events
      </a>{' '}
      をチェック！
    </>
  ),
  },
  {
    label: 'バザー',
    color: 'yellow',
    description: 'バザーでの販売を行っている団体です。',
  },
];


export function Exhibition2() {
    return (
        <div className={styles.container}>
            <p className={styles.tagname}>各種タグについて</p>
            {tags.map((tag, index) => (
                <div key={index} className={styles.tagItem}>
                    <span className={`${styles.tag} ${styles[tag.color]}`}>{tag.label}</span>
                    <span className={styles.description}>{tag.description}</span>
                </div>
            ))}
        </div>
    );
}
