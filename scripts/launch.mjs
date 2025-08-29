import childProcess from "child_process";

childProcess.spawnSync("next", process.env.NO_TURBOPACK === "true" ? ["dev"] : ["dev", "--turbopack"], {
    stdio: "inherit",
    shell: true,
});
