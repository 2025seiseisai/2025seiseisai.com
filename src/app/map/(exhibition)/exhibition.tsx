import crypto from "crypto";
import Link from "next/link";
import Arrow from "./arrow-right-circle.svg";
import { exhibitionData, ExhibitionFloor, locations } from "./exhibition-data";
import styles from "./page.module.scss";

export function Exhibition1({ floor }: { floor: ExhibitionFloor }) {
    const filteredExs = Object.entries(exhibitionData).filter(([, data]) => locations[data.location] === floor);
    return (
        <div className={styles.containers}>
            {filteredExs.map(([name, data]) => (
                <Link
                    key={name}
                    href={`/map/${crypto.createHash("sha256").update(name).digest("hex").substring(0, 16)}`}
                >
                    <div className={styles.card}>
                        <div className={styles.icon}>
                            <div dangerouslySetInnerHTML={{ __html: data.icon }} />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.location}>{data.location}</div>
                            <div className={styles.title}>{name}</div>
                            <div className={styles.buttons}>
                                {data.stamp && (
                                    <div
                                        className="rounded-full bg-[#de0d22] px-[8px] pb-[1px] text-[10px] font-normal
                                            text-white"
                                    >
                                        スタンプラリー
                                    </div>
                                )}
                                {data.events && (
                                    <div
                                        className="rounded-full bg-[#f4631e] px-[8px] pb-[1px] text-[10px] font-normal
                                            text-white"
                                    >
                                        イベント
                                    </div>
                                )}
                                {data.bazaar && (
                                    <div
                                        className="rounded-full bg-[#ff9f00] px-[8px] pb-[1px] text-[10px] font-normal
                                            text-white"
                                    >
                                        バザー
                                    </div>
                                )}
                            </div>
                        </div>
                        <Arrow />
                    </div>
                </Link>
            ))}
        </div>
    );
}

const tags = [
    {
        label: (
            <div
                className="inline-block rounded-full bg-[#de0d22] px-[9px] pb-[1px] text-[13px] font-normal text-white
                    lg:px-[12px] lg:text-[15px]"
            >
                スタンプラリー
            </div>
        ),
        description: <p>スタンプラリーを行っている団体です。</p>,
    },
    {
        label: (
            <div
                className="inline-block rounded-full bg-[#f4631e] px-[9px] pb-[1px] text-[13px] font-normal text-white
                    lg:px-[12px] lg:text-[15px]"
            >
                イベント
            </div>
        ),
        description: (
            <p>
                イベントを行っている団体です。詳しくは
                <Link href="/events" className={styles.highlight}>
                    Events
                </Link>
                をチェック！
            </p>
        ),
    },
    {
        label: (
            <div
                className="inline-block rounded-full bg-[#ff9f00] px-[9px] pb-[1px] text-[13px] font-normal text-white
                    lg:px-[12px] lg:text-[15px]"
            >
                バザー
            </div>
        ),
        description: <p>バザーでの販売を行っている団体です。</p>,
    },
];

export function Exhibition2() {
    return (
        <div className={styles.container}>
            <p className={styles.tagname}>各種タグについて</p>
            {tags.map((tag, index) => (
                <div key={index} className={styles.tagItem}>
                    <div className={styles.tag}>{tag.label}</div>
                    <div className={styles.description}>{tag.description}</div>
                </div>
            ))}
        </div>
    );
}
