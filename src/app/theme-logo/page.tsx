import styles from "./page.module.scss";

import DownloadIcon from "./download_icon.svg";
import LogoC from "./logo_colour.svg";
import LogoM from "./logo_mono.svg";
import LogotypeC from "./logotype_colour.svg";
import LogotypeM from "./logotype_mono.svg";
import TypoC from "./typo_colour.svg";
import TypoM from "./typo_mono.svg";

export const metadata = {
    title: "Theme & Logo | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

export default function Page() {
    return (
        <>
            {/* ここに書く */}
            <h1 className={styles.example}>テーマロゴ</h1>
            <LogotypeC className={styles.logotype_c} />
            <a href="/2025/theme-logo/logotype_color.png" download>
                <DownloadIcon className={styles.download_icon} />
            </a>
            <LogotypeM className={styles.logotype_m} />
            <a href="/2025/theme-logo/logotype_mono.png" download>
                <DownloadIcon className={styles.download_icon} />
            </a>
            <LogoC className={styles.logo_c} />
            <a href="/2025/theme-logo/logo_color.png" download>
                <DownloadIcon className={styles.download_icon} />
            </a>
            <LogoM className={styles.logo_m} />
            <a href="/2025/theme-logo/logo_mono.png" download>
                <DownloadIcon className={styles.download_icon} />
            </a>
            <TypoC className={styles.typo_c} />
            <a href="/2025/theme-logo/typo_color.png" download>
                <DownloadIcon className={styles.download_icon} />
            </a>
            <TypoM className={styles.typo_m} />
            <a href="/2025/theme-logo/typo_mono.png" download>
                <DownloadIcon className={styles.download_icon} />
            </a>
        </>
    );
}
