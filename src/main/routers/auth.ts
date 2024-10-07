import { ipcMain } from "electron";
import bcrypt from "bcryptjs";
import { userService } from "@model";

const login = ipcMain.handle("auth/login", async (event, data) => {
  const { userName, password } = data;

  const usuario = await userService.getUserByEmail(userName);

  if (!usuario) {
    console.log("Usuario no encontrado");
    return { message: "Usuario no encontrado", type: "error" };
  }

  if (!bcrypt.compareSync(password, usuario.password)) {
    // La contraseña no coincide, envía una respuesta indicando que es incorrecta
    return { message: "Usuario o contraseña incorrectos", type: "error" };
  }

  //@Bitacora
  //   await bitacoraService.createBitacoraEntry({
  //     usuario: "demo@demo.com",
  //     accion: `Inicio de sesión del usuario ${usuario.correo}`,
  //   });

  return { message: "Inicio de sesión correcto", type: "success" };
});

const auth = {
  login,
};

export default auth;
