import { ipcMain } from "electron";
import { empleadoPoliticaService } from "@model";

const getEmpleado = ipcMain.handle(
  "empleado/getEmpleado",
  async (event, data) => {
    try {
      const empleados = await empleadoPoliticaService.getEmpleadoWithPolitica();

      //   console.log(data.tipo_empleado);

      // Filtrar empleados por tipo_empleado
      const filteredEmpleados = empleados.filter(
        (empleado) => empleado.tipo_empleado === data.tipo_empleado
      );

      console.log(filteredEmpleados);

      return filteredEmpleados;
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
