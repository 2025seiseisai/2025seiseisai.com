import * as fs from "node:fs";
import * as path from "node:path";
import QRCode from "qrcode-svg";
import PDFDocument from "pdfkit";
import SVGtoPDF from "svg-to-pdfkit";
import { collections } from "@/db";

function ensureHelveticaAFM() {
    const sourcePath = path.resolve("./node_modules/pdfkit/js/data/Helvetica.afm");
    const destDir = path.resolve("./.next/server/vendor-chunks/data");
    const destPath = path.join(destDir, "Helvetica.afm");
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }
    if (!fs.existsSync(destPath)) {
        fs.copyFileSync(sourcePath, destPath);
    }
}

export async function GenerateTicketsPDFImpl() {
    fs.rmSync("./tickets_pdf", { recursive: true });
    fs.mkdirSync("./tickets_pdf", { recursive: true });
    PDFDocument.prototype.addSVG = function (svg: SVGElement | string, x?: number, y?: number, options?: SVGtoPDF.SVGtoPDFOptions) {
        return SVGtoPDF(this, svg, x, y, options), this;
    };
    ensureHelveticaAFM();
    let doc: PDFKit.PDFDocument | undefined;
    const cursor = collections.tickets.find();
    let cnt = 0;
    for await (const info of cursor) {
        if (cnt % 800 == 0) {
            if (doc != undefined) doc.end();
            const stream = fs.createWriteStream(`./tickets_pdf/tickets${(cnt / 800) | 0}.pdf`);
            doc = new PDFDocument({ autoFirstPage: false, margin: 0 });
            doc.font("./fonts/NotoSansJP-Regular.ttf");
            doc.pipe(stream);
        }
        if (doc == undefined) return;
        if (cnt % 16 == 0) {
            doc.addPage({ size: "A4", layout: "landscape", margin: 0 });
            doc.moveTo(0, 148.82).lineTo(841.89, 148.82).stroke();
            doc.moveTo(0, 297.64).lineTo(841.89, 297.64).stroke();
            doc.moveTo(0, 446.46).lineTo(841.89, 446.46).stroke();
            doc.moveTo(210.47, 0).lineTo(210.47, 595.28).stroke();
            doc.moveTo(420.95, 0).lineTo(420.95, 595.28).stroke();
            doc.moveTo(631.42, 0).lineTo(631.42, 595.28).stroke();
        }
        const x = ((cnt % 16) % 4) * 210.47,
            y = (((cnt % 16) / 4) | 0) * 148.82;
        const id = info.id;
        const number = `${info.number}`.padStart(5, "0");
        const day = info.day;
        const svg = new QRCode({
            content: id,
            padding: 0,
            width: 100,
            height: 100,
            ecl: "H",
        }).svg();
        // @ts-ignore
        doc.addSVG(svg, x + 20, y + 37.21);
        doc.fontSize(15).text("来場者ID", x + 123, y + 30);
        doc.fontSize(30).text(number, x + 112, y + 53);
        doc.fontSize(10).text("当日限り有効", x + 140, y + 125);
        console.log(`inserted ${number}`);
        ++cnt;
    }
    if (doc != undefined) doc.end();
    console.log("saved the pdf.");
}
