import { ipcMain } from "electron";
import { mainWindow } from "../index";

const ping = ipcMain.on("ping", () => console.log("pong2w"));

// Listen for the 'close-window' event from the renderer process
const closedWindown = ipcMain.on("close-window", () => {
  if (mainWindow) {
    mainWindow.close();
  }
});

ipcMain.on("maximize-window", () => {
  if (mainWindow) {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  }
});

ipcMain.on("minimize-window", () => {
  if (mainWindow) {
    mainWindow.minimize();
  }
});

export { ping, closedWindown };
