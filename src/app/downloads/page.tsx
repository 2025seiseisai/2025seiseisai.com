import Link from 'next/link';
import styles from "./page.module.scss";


export const metadata = {
    title: "Downloads | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

export default function Page() {
    return (
        <>
            <div className={styles.total}>
                <div className={styles.title_total}>
                    <p className={styles.title}>Downloads</p>
                    <p className={styles.text}>こちらでは菁々祭パンフレット、各部活の部誌をダウンロードしていただけます。菁々祭終了後も公開しておりますので、手に入れることのできなかった部活の部誌などを読んでいただくことができます。</p>
                </div>
                <div>
                    <div className={styles.pamphret}>
                        <div>
                            <p className={`${styles.pamphret_English} ${styles.center}`}>Pamphlet</p>

                            <p className={`${styles.pamphret_Japanese} ${styles.center}`}>パンフレット</p>
                        </div>

                    </div>
                    <div className="mt-4">
                        <p className="text-base">校門でのパンフレット配布もございますが、ダウンロードしておくと便利です。用途に合わせて、高画質版･中画質版･低画質版をご用意しました。東大寺学園は電波が弱い場所が多いため､校内では低画質版のダウンロードをおすすめします。</p>
                        <div className={styles.pamphret_doenload}>
                            <div className='mb-2 inline-flex'><p>高画質版(47MB)</p><Link href="" className='ml-auto'><button className={styles.pamphret_download_button}>ダウンロード</button></Link></div>
                            <div className='mb-2 inline-flex'><p>中画質版(11MB)</p><Link href="" className='ml-auto'><button className={styles.pamphret_download_button}>ダウンロード</button></Link></div>
                            <div className='mb-2 inline-flex'><p>低画質版(6MB)</p><Link href="" className='ml-auto'><button className={styles.pamphret_download_button}>ダウンロード</button></Link></div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>{/* ここに書く */}
        </>
    );
}
