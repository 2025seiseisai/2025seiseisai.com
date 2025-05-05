import childProcess from "child_process";
import fs from "fs";
if (process.env.AUTH_SECRET === undefined) {
    childProcess.exec("npx auth secret --raw", (error, stdout) => {
        if (error) {
            return;
        }
        const auth_secret = stdout.trim();
        fs.appendFileSync(".env.development", `\nAUTH_SECRET="${auth_secret}"\n`);
    });
}
