import childProcess from "child_process";
import fs from "fs";
import extensions from "../.vscode/extensions.json" with { type: "json" };
childProcess.exec("code --list-extensions", (error, stdout) => {
    if (error) {
        console.error("Error listing extensions:", error);
        return;
    }
    const installedExtensions = stdout.split("\n").filter((ext) => ext.trim() !== "");
    for (const extension of extensions.recommendations) {
        if (installedExtensions.includes(extension)) {
            continue;
        }
        childProcess.exec(`code --install-extension ${extension}`, (error) => {
            if (error) {
                console.error(`Error installing extension ${extension}:`, error);
            }
        });
    }
});
if (process.env.AUTH_SECRET === undefined) {
    childProcess.exec("npx auth secret --raw", (error, stdout) => {
        if (error) {
            return;
        }
        const auth_secret = stdout.trim();
        fs.appendFileSync(".env.development", `\nAUTH_SECRET="${auth_secret}"\n`);
    });
}
