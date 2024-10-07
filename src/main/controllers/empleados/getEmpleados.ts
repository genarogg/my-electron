import { ipcMain } from "electron";

import { empleadoPoliticaService } from "@model";

const getEmpleado = ipcMain.handle(
  "empleado/getEmpleado",
  async (event, data) => {
    try {
      const empleados = await empleadoPoliticaService.getEmpleadoWithPolitica();

      console.log("Empleados obtenidos:", empleados);

      return empleados;
    } catch (error) {
      console.error(
        "Error al obtener la información combinada de empleado y política:",
        error
      );
      throw error;
    }
  }
);

export default getEmpleado;
