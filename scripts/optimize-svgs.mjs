import { globSync, readFileSync, writeFileSync } from "fs";
import process from "process";
import { optimize } from "svgo";

const pattern = process.argv[2];
const files = globSync(pattern, { nodir: true });

if (files.length === 0) {
    console.log(`No SVG files matched: ${pattern}`);
    process.exit(0);
}

console.log(`Optimizing ${files.length} SVG(s)...`);

files.forEach((file) => {
    const data = readFileSync(file, "utf8");
    const result = optimize(data, {
        path: file,
        multipass: true, // 複数回最適化してさらに小さく
        floatPrecision: 2, // 小数点以下の精度を2桁
        plugins: [
            { name: "removeViewBox", active: false }, // viewBoxは残す（レスポンシブ対応のため）
            "removeXMLProcInst", // <?xml ... ?> 削除
            "removeXMLNS", // xmlns削除（HTML埋め込みなら不要）
            "removeXlink", // xlink:href削除
            { name: "inlineStyles", params: { onlyMatchedOnce: false } }, // CSSを属性化
            "removeUselessDefs", // 未使用<defs>削除
            "cleanupAttrs", // 空や重複属性削除
            "cleanupIds", // 未使用id削除
            "removeComments", // コメント削除
            "removeMetadata", // <metadata>削除
            "removeTitle", // <title>削除（アクセシビリティが不要なら）
            "removeDesc", // <desc>削除
            "convertStyleToAttrs", // style="" を属性に展開
            "convertColors", // 色を短縮 (#ffffff → #fff)
            "convertPathData", // pathを最適化
            "mergePaths", // 同じ属性のpathを統合
            "removeEmptyContainers", // 空<g>や空タグ削除
            "removeEmptyText", // 空<tspan>や<text>削除
            { name: "removeAttrs", params: { attrs: "data-name" } }, // 不要属性削除
            "collapseGroups", // 重複<g>などをまとめる
        ],
    });
    writeFileSync(file, result.data, "utf8");
    console.log(`✔ Optimized: ${file}`);
});
