import { app, shell, BrowserWindow } from "electron";
import { join } from "path";
import { electronApp, optimizer, is } from "@electron-toolkit/utils";
import installExtension, {
  REACT_DEVELOPER_TOOLS,
} from "electron-devtools-installer";

import icon from "../../resources/icon.png?asset";
import path from "path";
import router from "./routers/index";

async function createWindow(): Promise<void> {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 720,
    width: 1280,
    show: true,
    // frame: false,
    // transparent: true,
    autoHideMenuBar: true,
    title: "e.t. ademar vasquez chavez",
    icon: path.join(__dirname, "../../resources/logo.ico"),
    ...(process.platform === "linux" ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, "../preload/index.js"),
      // nodeIntegration: true,
      sandbox: false,
    },
  });

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: "deny" };
  });

  if (is.dev && process.env["ELECTRON_RENDERER_URL"]) {
    mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
  } else {
    mainWindow.loadFile(join(__dirname, "../renderer/index.html"));
  }
}

app.whenReady().then(async () => {
  electronApp.setAppUserModelId("com.electron");

  app.on("browser-window-created", (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  // cargando router
  router;

  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  if (is.dev) {
    try {
      const name = await installExtension(REACT_DEVELOPER_TOOLS);
      console.log(`Added Extension:  ${name}`);
    } catch (err) {
      console.log("An error occurred: ", err);
    }
  }
});

// cierra la ventana en todas las plataformas
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
