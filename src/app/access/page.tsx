import { YouTubeEmbed } from "@next/third-parties/google";
import Rectangle from "./images/Rectangle (2).svg";
import Railway from "./images/access_railway_2025 (1).svg";
import styles from "./page.module.scss";
export const metadata = {
    title: "Access | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

export default function Page() {
    return (
        <>
            <div
                style={{
                    position: "relative",
                    width: 375,
                    height: 2042,
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        width: 90,
                        height: 42,
                        top: 30,
                        left: 20,
                    }}
                >
                    <p
                        style={{
                            fontSize: "28px",
                            fontWeight: 700,
                        }}
                        className={`${styles.text}`}
                    >
                        <span className={styles.red_text}>A</span>ccess
                    </p>
                </div>
                <Rectangle
                    width={375}
                    height={134}
                    style={{
                        position: "absolute",
                        top: 88,
                    }}
                />

                <div
                    style={{
                        position: "absolute",
                        width: 335,
                        height: 285,
                        top: 238,
                        left: 20,
                    }}
                >
                    <div className={`${styles.border_common} ${styles._56}`}>
                        <div
                            style={{
                                width: 240,
                                height: 30,
                                marginTop: 13,
                                marginLeft: 48,
                            }}
                        >
                            <p
                                style={{
                                    fontSize: "20px",
                                    fontWeight: 500,
                                }}
                                className={`${styles.text}`}
                            >
                                東大寺学園中学・高等学校
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            width: 335,
                            height: 62,
                        }}
                        className={`${styles.border_common}`}
                    >
                        <p
                            style={{
                                marginLeft: 10,
                                marginTop: 19,
                                marginBottom: 19,
                                width: 48,
                                height: 24,
                            }}
                            className={`${styles.text} ${styles.b_text}`}
                        >
                            所在地
                        </p>
                        <p
                            style={{
                                marginRight: 65,
                                marginTop: 7,
                                marginBottom: 7,
                                width: 180,
                                height: 48,
                            }}
                            className={`${styles.text} ${styles.b_text}`}
                        >
                            〒631-0803
                            <br />
                            奈良県奈良市山陵町1375
                        </p>
                    </div>
                    <div
                        className={`${styles.border_common} ${styles._56}`}
                        style={{
                            display: "flex",
                        }}
                    >
                        <p
                            style={{
                                marginLeft: 10,
                                marginTop: 16,
                                marginBottom: 16,
                                width: 64,
                                height: 24,
                            }}
                            className={`${styles.text} ${styles.b_text}`}
                        >
                            電話番号
                        </p>
                        <p
                            style={{
                                marginRight: 141,
                                marginTop: 16,
                                marginBottom: 16,
                                width: 104,
                                height: 24,
                            }}
                            className={styles.b_text}
                        >
                            0742-47-5511
                        </p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                        }}
                        className={`${styles.border_common} ${styles._56}`}
                    >
                        <p
                            style={{
                                marginLeft: 10,
                                marginTop: 16,
                                marginBottom: 16,
                                width: 28,
                                height: 24,
                            }}
                            className={`${styles.text} ${styles.b_text}`}
                        >
                            FAX
                        </p>
                        <p
                            style={{
                                marginRight: 145,
                                marginTop: 16,
                                marginBottom: 16,
                                width: 100,
                                height: 24,
                            }}
                            className={styles.b_text}
                        >
                            0742-47-6164
                        </p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                        }}
                        className={`${styles.border_common} ${styles._56}`}
                    >
                        <p
                            style={{
                                marginLeft: 10,
                                marginTop: 16,
                                marginBottom: 16,
                                width: 54,
                                height: 24,
                            }}
                            className={styles.b_text}
                        >
                            学校HP
                        </p>
                        <div
                            style={{
                                marginRight: 87,
                                marginTop: 16,
                                marginBottom: 16,
                                width: 158,
                                height: 24,
                            }}
                            className={`${styles.text} ${styles.b_text}`}
                        >
                            <a href="https://www.tdj.ac.jp" className={`${styles.text} ${styles.b_text}`}>
                                https://www.tdj.ac.jp
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        position: "absolute",
                        width: 335,
                        height: 318,
                        top: 567,
                        left: 20,
                    }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6559.363254209741!2d135.78601437633282!3d34.7132092729152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60013c8734fc9973%3A0x55c23a5ae3354ec9!2z5p2x5aSn5a-65a2m5ZyS5Lit5a2m5qCh44O76auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1746189416051!5m2!1sja!2sjp"
                        loading="lazy"
                        style={{
                            width: 291,
                            height: 180,
                            marginLeft: 22,
                        }}
                    ></iframe>
                    <div
                        style={{
                            width: 313,
                            height: 117,
                            marginTop: 20,
                            marginLeft: 22,
                        }}
                    >
                        <div
                            style={{
                                width: 313,
                                height: 48,
                            }}
                        >
                            <p className={`${styles.text} ${styles.b_text}`}>
                                近鉄高の原駅より
                                <br />
                                徒歩 約<span className={styles.red_text}>25</span>分　バス 約
                                <span className={styles.red_text}>7</span>分（片道250円）
                            </p>
                        </div>
                        <div
                            style={{
                                marginTop: 19,
                                width: 313,
                                height: 50,
                            }}
                        >
                            <p className={`${styles.text} ${styles.b_text}`}>
                                近鉄平城駅より
                                <br />
                                徒歩 約<span className={styles.red_text}>25</span>分
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        position: "absolute",
                        width: 335,
                        height: 385,
                        left: 20,
                        top: 909,
                    }}
                >
                    <div
                        style={{
                            width: 132,
                            height: 34,
                        }}
                        className={styles.border_side}
                    >
                        <p
                            style={{
                                width: 120,
                                height: 34,
                                marginLeft: 12,
                            }}
                            className={`${styles.text} ${styles.title_text}`}
                        >
                            バス運行表
                        </p>
                    </div>

                    <div
                        style={{
                            width: 335,
                            height: 335,
                            marginTop: 50,
                            //運行表の画像
                        }}
                    ></div>
                </div>
                <div
                    style={{
                        position: "absolute",
                        width: 335,
                        height: 356,
                        top: 1339,
                        left: 20,
                    }}
                >
                    <div
                        style={{
                            width: 132,
                            height: 34,
                        }}
                        className={styles.border_side}
                    >
                        <p
                            style={{
                                width: 120,
                                height: 34,
                                marginLeft: 12,
                            }}
                            className={`${styles.text} ${styles.title_text}`}
                        >
                            路線図
                        </p>
                    </div>
                    <Railway
                        width={335}
                        height={306}
                        style={{
                            marginBottom: 0,
                        }}
                    />
                </div>
                <div
                    style={{
                        position: "absolute",
                        width: 335,
                        height: 253,
                        top: 1719,
                        left: 21,
                    }}
                >
                    <div
                        style={{
                            width: 251,
                            height: 34,
                            marginTop: -4,
                        }}
                        className={styles.border_side}
                    >
                        <p
                            style={{
                                width: 239,
                                height: 34,
                                marginLeft: 12,
                            }}
                            className={`${styles.text} ${styles.title_text}`}
                        >
                            高の原駅からの行き方
                        </p>
                        <div
                            style={{
                                width: 202,
                                height: 336,
                                marginTop: 51,
                                marginRight: 1,
                            }}
                        >
                            <YouTubeEmbed videoid="ZTR93Nmdo3k" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
