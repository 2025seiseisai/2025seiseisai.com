import { execSync } from "child_process";

/**
 * シェルコマンドを実行します。
 * @param {string} cmd - 実行するコマンド。
 * @param {string} errorMsg - エラー時に表示するメッセージ。
 * @param {boolean} [captureOutput=false] - 出力をキャプチャして返すかどうか。
 * @returns {string|undefined} captureOutputがtrueの場合は標準出力、それ以外はundefined。
 */
function runCommand(cmd, errorMsg, captureOutput = false) {
    try {
        console.log(`▶️ Running: ${cmd}`);
        if (captureOutput) {
            // 出力をキャプチャし、文字列として返す
            return execSync(cmd, { encoding: "utf-8" });
        } else {
            // コマンドの出力を直接コンソールに表示する
            execSync(cmd, { stdio: "inherit" });
            return undefined;
        }
    } catch (error) {
        console.error(`❌ ${errorMsg}`);
        // エラーオブジェクトには stderr も含まれることが多い
        console.error(error.stderr || error.message);
        process.exit(1);
    }
}

if (process.argv.length < 3) {
    console.log("Usage: node deploy.mjs <branch-name>");
    process.exit(1);
}

const branch = process.argv[2];

console.log(`▶️ Switching to branch: ${branch}`);
runCommand("git fetch origin", "Failed to fetch origin");
runCommand(`git checkout ${branch}`, `Failed to checkout branch ${branch}`);
runCommand("git stash", "Failed to stash changes");
runCommand(`git pull origin ${branch}`, `Failed to pull latest changes from ${branch}`);

console.log("📦 Installing dependencies...");
runCommand("npm install", "npm install failed");

console.log("🔨 Building project...");
runCommand("npm run build", "Build failed");

console.log("🚀 Deploying with PM2...");
const pm2List = runCommand("pm2 list", "Failed to list PM2 processes", true);

if (pm2List && pm2List.includes("2025seiseisai")) {
    console.log("🔁 Restarting existing process: 2025seiseisai");
    runCommand("pm2 restart 2025seiseisai", "Failed to restart the project");
} else {
    console.log("🚀 Starting new process: 2025seiseisai");
    runCommand('pm2 start npm --name "2025seiseisai" -- run start', "Failed to start the project");
}

console.log(`✅ Deployment to branch ${branch} completed successfully!`);
