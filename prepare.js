/* eslint @typescript-eslint/no-require-imports: 0 */
const fs = require("fs");
const childProcess = require("node:child_process");
if (process.env.AUTH_SECRET === undefined) {
    childProcess.exec("npx auth secret --raw", (error, stdout) => {
        if (error) {
            return;
        }
        const auth_secret = stdout.trim();
        fs.appendFileSync(".env.development", `\nAUTH_SECRET="${auth_secret}"\n`);
    });
}
