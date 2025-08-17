import Link from "next/link";
import { exhibitionIcons } from "../(exhibition)/exhibition-icons"; // ファイルの先頭でimport
import styles from "./page.module.scss";

export function Bazaar1() {
    return (
        <div className={styles.wrapper1}>
            <div className={styles.container}>
                <div className={styles.head}>
                    <div className={styles.number}>
                        <p className={styles["number-content"]}>1</p>
                    </div>
                    <h2 className={styles.title}>フランクフルト</h2>
                    <span className={styles.cost}>
                        200<span className={styles.unit}>シビ</span>
                    </span>
                </div>
                <p className={styles.description}>
                    毎年恒例フランクフルトを今年も販売します。ケチャップやマスタードをかけてどうぞ。
                </p>
            </div>

            <div className={styles.container}>
                <div className={styles.head}>
                    <div className={styles.number}>
                        <p className={styles["number-content"]}>2</p>
                    </div>
                    <h2 className={styles.title}>チュロス</h2>
                    <span className={styles.cost}>
                        100<span className={styles.unit}>シビ</span>
                    </span>
                </div>
                <p className={styles.description}>
                    今年の卓球部はチュロスを販売！ココア・シュガー・シナモンの3種類のフレイバーをおぜひ楽しみください！
                </p>
            </div>

            <div className={styles.container}>
                <div className={styles.head}>
                    <div className={styles.number}>
                        <p className={styles["number-content"]}>3</p>
                    </div>
                    <h2 className={styles.title}>ポップコーン</h2>
                    <span className={styles.cost}>
                        100<span className={styles.unit}>シビ</span>
                    </span>
                </div>
                <p className={styles.description}>
                    今年は剣道部がポップコーンに挑戦！香ばしい香りに誘われて、ぜひご賞味ください！
                </p>
            </div>

            <div className={styles.container}>
                <div className={styles.head}>
                    <div className={styles.number}>
                        <p className={styles["number-content"]}>4</p>
                    </div>
                    <h2 className={styles.title}>ドリンク・シューアイス</h2>
                    <span className={styles.cost}>
                        100<span className={styles.unit}>シビ</span>
                    </span>
                </div>
                <p className={styles.description}>
                    バザーパートは今年も暑い時期に暑い時期にぴったりのドリンクとシューアイスを販売します。
                </p>
            </div>

            <div className={styles.container}>
                <div className={styles.head}>
                    <div className={styles.number}>
                        <p className={styles["number-content"]}>5</p>
                    </div>
                    <h2 className={styles.title}>キッチンカー</h2>
                    <span className={styles.cost}>現金</span>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.head}>
                    <div className={styles.number}>
                        <p className={styles["number-content"]}>6</p>
                    </div>
                    <h2 className={styles.title}>射的</h2>
                    <span className={styles.cost}>
                        100<span className={styles.unit}>シビ</span>
                    </span>
                </div>
                <p className={styles.description}>
                    文化祭の醍醐味である射的を楽しんでみませんか？射的をして景品をもらって文化祭を思いっきり楽しみましょう！
                </p>
            </div>

            <div className={styles.container}>
                <div className={styles.head}>
                    <div className={styles.number}>
                        <p className={styles["number-content"]}>7</p>
                    </div>
                    <h2 className={styles.title}>ストラックアウト</h2>
                    <span className={styles.cost}>
                        100<span className={styles.unit}>シビ</span>
                    </span>
                </div>
                <p className={styles.description}>
                    毎年恒例！ハンドボールをやったことがある人もない人も、豪華景品を目指してチャレンジ！いつでも待っています！
                </p>
            </div>
        </div>
    );
}

export function Bazaar2() {
    return (
        <div className={styles.wrapper2}>
            <div className={styles.line}></div>
            <div className={styles.content}>
                <h2 className={styles["title-2"]}>金券について</h2>
                <p>学内店舗は一部を除き、すべて金券でのお取り扱いです。</p>
                <p>金券は金券販売所にて販売しています。</p>
                <p>金券は300シビ単位の販売です。(1シビ=1円)</p>
                <p>金券の返金は、各日昼頃から金券販売所にて行います。</p>
            </div>
        </div>
    );
}

export function Bazaar3() {
    return (
        <div className={styles.wrapper3}>
            <div className={styles.shopCard}>
                <div className={styles.upside}>
                    <div className={styles.iconContainer}>
                        <div dangerouslySetInnerHTML={{ __html: exhibitionIcons["PRパート"] }} />
                    </div>
                    <div className={styles.textContent}>
                        <h2 className={styles.shopName}>グッズ販売</h2>
                        <div className={styles.tags}>
                            <span className={styles.tag}>6年A組</span>
                            <span className={styles.tag_realmoney}>現金</span>
                        </div>
                    </div>
                    <Link href="" className={styles.link}>
                        <p>オリジナルグッズ</p>
                    </Link>
                </div>
                <p className={styles.descriptionBazzer3}>
                    文化祭公式グッズを販売しております。
                    <br />
                    記念に一品、如何でしょうか。
                </p>
            </div>
        </div>
    );
}
