import { ipcMain } from "electron";

const ping = ipcMain.on("ping", () => console.log("pong2w"));

export { ping };
