
import { ExhibitionFloor, locations, exhibitionData } from "./exhibition-data";
import styles from "./page.module.scss";
import Link from "next/link";
import Arrow from "./arrow-right-circle.png";
import stamp from "./Frame 292.png";
import event from "./Frame 294.png";
import bazaar from "./Frame 295.png";
import stamps from "./Frame 296.png";
import events from "./event.png";
import bazaars from "./bazaar.png";
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
                            {data.stamp && <div ><Image src={stamp} alt="stamp"/></div>}
                            {data.events && <div ><Image src={event} alt="event"/></div>}
                            {data.bazaar && <div ><Image src={bazaar} alt="bazaar"/></div>}
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
        label: (
            <>
                <Image src={stamps} alt="stamps" />
            </>
        ),
        color: "red",
        description: (<div className={styles.stampdestriction}>スタンプラリーを行っている団体です。</div>),
    },
    {
        label: (
            <>
                <Image src={events} alt="events" className={styles.eventsbutton}/>
            </>
        ),
        color: "orange",
        description: (
            <div className={styles.eventdescription}>
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
            </div>
        ),
    },
    {
        label: (
            <>
                <Image src={bazaars} alt="bazaars" className={styles.bazaarbutton}/>
            </>
        ),
        color: "yellow",
        description: (
            <div className={styles.bazaardescription}> バザーでの販売を行っている団体です。</div>
        ),
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
