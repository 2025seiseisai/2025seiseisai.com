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
                    今年の卓球部はチュロスを販売！ココア・シュガー・シナモンの3種類のフレーバーをぜひ楽しみください！
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
                    <h2 className={styles.title}>シューアイス・ドリンク</h2>
                    <span className={styles.cost}>
                        100<span className={styles.unit}>シビ</span>
                    </span>
                </div>
                <p className={styles.description}>
                    バザーパートは今年も暑い時期にぴったりのドリンクとシューアイスを販売します。
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
                <div className={styles["Bazzar2-description"]}>
                    <p>バザー店舗は一部を除き、すべて金券でのお取り扱いです。</p>
                    <p>金券は金券販売所にて販売しています。</p>
                    <p>金券は500シビ単位での販売です。(1シビ=1円)</p>
                    <p>金券の返金は、各日13:00以降に金券販売所にて行います。</p>
                </div>
            </div>
        </div>
    );
}

export function Bazaar3() {
    return (
        <div className={styles.wrapper3}>
            <div className={`${styles.headShop} ${styles.headShopGoods}`}>
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
                        <span className={styles.arrowIcon}>▶</span>
                        <span className={styles.linkText}>オリジナルグッズ</span>
                    </Link>
                </div>
                <p className={styles.descriptionBazzer3}>
                    文化祭公式グッズを販売しております。
                    <br />
                    記念に一品、いかがでしょうか。
                </p>
            </div>

            <div className={styles.headShop}>
                <div className={styles.upside}>
                    <div className={styles.iconContainer}>
                        <div dangerouslySetInnerHTML={{ __html: exhibitionIcons["園芸部"] }} />
                    </div>
                    <div className={styles.textContent}>
                        <h2 className={styles.shopName}>球根・苗販売</h2>
                        <div className={styles.tags}>
                            <span className={styles.tag}>6年B組</span>
                            <span className={styles.tag_realmoney}>現金</span>
                        </div>
                    </div>
                    <Link href="" className={styles.link}>
                        <span className={styles.arrowIcon}>▶</span>
                        <span className={styles.linkText}>園芸部</span>
                    </Link>
                </div>
                <p className={styles.descriptionBazzer3}>
                    今年も植物展示とチューリップの球根販売を行います！
                    <br />
                    お値打ち価格で販売中！
                </p>
            </div>

            <div className={styles.headShop}>
                <div className={styles.upside}>
                    <div className={styles.iconContainer}>
                        <div dangerouslySetInnerHTML={{ __html: exhibitionIcons["文藝同好会"] }} />
                    </div>
                    <div className={styles.textContent}>
                        <h2 className={styles.shopName}>東大寺古書店</h2>
                        <div className={styles.tags}>
                            <span className={styles.tag}>5年D組</span>
                        </div>
                    </div>
                    <Link href="" className={styles.link}>
                        <span className={styles.arrowIcon}>▶</span>
                        <span className={styles.linkText}>文藝同好会</span>
                    </Link>
                </div>
                <p className={styles.descriptionBazzer3}>
                    文庫本・単行本・新書などを雑多に販売しています。掘り出し物が100シビから！
                    <br />
                    余った金券でぜひお越しください！
                </p>
            </div>

            <div className={`${styles.headShop} ${styles.headShopTeaTable}`}>
                <div className={styles.upside}>
                    <div className={styles.iconContainer}>
                        <div dangerouslySetInnerHTML={{ __html: exhibitionIcons["お茶席"] }} />
                    </div>
                    <div className={styles.textContent}>
                        <h2 className={styles.shopName}>お茶席</h2>
                        <div className={styles.tags}>
                            <span className={styles.tag}>和室</span>
                            <span className={styles.tag_realmoney}>現金</span>
                        </div>
                    </div>
                    <Link href="" className={styles.link}>
                        <span className={styles.arrowIcon}>▶</span>
                        <span className={styles.linkText}>お茶席</span>
                    </Link>
                </div>
                <p className={styles.descriptionBazzer3}>
                    お抹茶と和菓子をご用意しております。お気軽にお越しください。
                    <br />
                    （一般800円、在校生・小学生以下500円）
                </p>
            </div>
        </div>
    );
}
