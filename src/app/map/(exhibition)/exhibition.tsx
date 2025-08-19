import { ExhibitionFloor } from "./exhibition-data";
import styles from "./page.module.scss";
import { exhibitionIcons } from "../(exhibition)/exhibition-icons"; // ファイルの先頭でimport

function Bazaar() {
    // SVGがdivで囲まれて埋め込まれる
    // divの大きさを変えることでSVGの大きさも変わる
    return <div dangerouslySetInnerHTML={{ __html: exhibitionIcons["PRパート"] }} />
}

export function Exhibition1({ floor }: { floor: ExhibitionFloor }) {
    return (
        <>
            {/* ここに書く */}
            <p className={styles.example}>エキシビション1</p>
            <p>現在のフロア: {floor}</p>
        </>
    );
}

export function Exhibition2() {
    return (
        <>
            {/* ここに書く */}
            <p className={styles.example}>エキシビション2</p>
        </>
    );
}
