import { ipcMain } from "electron";

const login = ipcMain.handle("auth/login", async (event, data) => {
  console.log(data);
  return "pong";
});

const auth = {
  login,
};

export default auth;
