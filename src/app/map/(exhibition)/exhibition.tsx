import { exhibitionIcons } from "../(exhibition)/exhibition-icons"; // ファイルの先頭でimport

   // return <div dangerouslySetInnerHTML={{ __html: exhibitionIcons["PRパート"] }} />;

import { ExhibitionFloor, locations, exhibitionData } from "./exhibition-data";
import styles from "./page.module.scss";
import Link from "next/link";
import Arrow from "./arrow-right-circle.png";
import stamp from "./Frame 292.png";
import event from "./Frame 294.png";
import bazaar from "./Frame 295.png";
import Image from "next/image";

export function Exhibition1({ floor }: { floor: ExhibitionFloor }) {
    const filteredExs = Object.entries(exhibitionData).filter(([, data]) => locations[data.location] === floor);
    return (
        <div className={styles.containers}>
            {filteredExs.map(([name, data]) => (
                <div key={name} className={styles.card}>
                    <div className={styles.icon}>
                        <div dangerouslySetInnerHTML={{ __html: data.icon}} />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.location}>{data.location}</div>
                        <div className={styles.title}>{name}</div>
                        <div className={styles.buttons}>
                            {data.stamp && <div className={styles.stampbutton}><Image src={stamp} alt="stamp"/></div>}
                            {data.events && <div className={styles.eventsbutton}><Image src={event} alt="event"/></div>}
                            {data.bazaar && <div className={styles.bazaarbutton}><Image src={bazaar} alt="bazaar"/></div>}
                        </div>
                    </div>
                    <Link href={`https://seiseisai.com/`} className={styles.link}>
                        <Image src={Arrow} alt="arrow" className={styles.arrow} />
                    </Link>
                </div>
            ))}
        </div>
    );
}

const tags = [
    {
        label: "スタンプラリー",
        color: "red",
        description: "スタンプラリーを行っている団体です。",
    },
    {
        label: "イベント",
        color: "orange",
        description: (
            <>
                イベントを行っている団体です。詳しくは{" "}
                <a
                    href="http://localhost:3000/2025"
                    className={styles.highlight}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Events
                </a>{" "}
                をチェック！
            </>
        ),
    },
    {
        label: "バザー",
        color: "yellow",
        description: "バザーでの販売を行っている団体です。",
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
