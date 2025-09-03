import { YouTubeEmbed } from "@next/third-parties/google";
import Link from "next/link";
import styles from "./page.module.scss";
//イメージ
import Image from "next/image";
import Railway from "./img/railway_map.jpg";
import School from "./img/school.png";
export const metadata = {
    title: "Access | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

export default function Page() {
    return (
        <>
            <p className={styles.Access_title}>
                <span className="text-[#de0d22]">A</span>ccess
            </p>
            <div>
                <Image className={styles.school_img} src={School} alt="School Image" />
            </div>
            <p className={styles.school_name}>東大寺学園中学・高等学校</p>
            <div className={styles.address_container}>
                <div className={styles.address_line}>
                    <div className={styles.address_title}>所在地</div>
                    <div className={styles.address_fixer}>
                        <div className={styles.address_detail}>〒631-0803 奈良県奈良市山陵町1375</div>
                    </div>
                </div>
                <div className={styles.address_line}>
                    <div className={styles.address_title}>電話番号</div>
                    <div className={styles.address_fixer}>
                        <div className={styles.address_detail}>0742-47-5511</div>
                    </div>
                </div>
                <div className={styles.address_line}>
                    <div className={styles.address_title}>FAX</div>
                    <div className={styles.address_fixer}>
                        <div className={styles.address_detail}>0742-47-6164</div>
                    </div>
                </div>
                <div className={styles.address_line}>
                    <div className={styles.address_title}>学校HP</div>
                    <div className={styles.address_fixer}>
                        <div className={styles.address_detail}>
                            <Link className={styles.underline} href="https://www.tdj.ac.jp">
                                https://www.tdj.ac.jp
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.access_container}>
                <div className={styles.map}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6559.363254209741!2d135.78601437633282!3d34.7132092729152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60013c8734fc9973%3A0x55c23a5ae3354ec9!2z5p2x5aSn5a-65a2m5ZyS5Lit5a2m5qCh44O76auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1746189416051!5m2!1sja!2sjp"
                        loading="lazy"
                    ></iframe>
                </div>
                <div className={styles.distance_container}>
                    <p className={styles.distance}>近鉄高の原駅より </p>
                    <div className={styles.distance_sm}>
                        <p className={styles.distance2}>
                            徒歩 約<span className="text-red-600">25</span>分
                        </p>
                        <p className={styles.distance2}>
                            バス 約<span className="text-red-600">7</span>分 (片道250円)
                        </p>
                    </div>

                    <p className={styles.distance}>近鉄平城駅より </p>
                    <p className={styles.distance2}>
                        徒歩 約<span className="text-red-600">25</span>分
                    </p>
                </div>
            </div>
            {/*<p className={styles.titles}>バス運行表</p>*/}
            <p className={styles.titles}>路線図</p>
            <div className={styles.railway}>
                <Image src={Railway} alt="Railway Image" />
            </div>
            <p className={styles.titles}>高の原駅からの行き方</p>
            <div className={styles.youtube_link}>
                <div>
                    <YouTubeEmbed videoid="ZTR93Nmdo3k" />
                </div>
            </div>
        </>
    );
}
