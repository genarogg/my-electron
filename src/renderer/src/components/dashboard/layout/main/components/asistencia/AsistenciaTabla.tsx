import React, { useEffect, useState } from "react";

import TabletTrabajador from "@components/tablet/TabletTrabajador";
import EmpleadoTypes from "./configTablet/AsistenciaTypes";
import configTablet from "./configTablet/configTablet";
import staticDataFake from "./configTablet/staticDataFake";

interface AsistenciaTableProps {
  irAnadirEmpleado: () => void;
}

const AsistenciaTable: React.FC<AsistenciaTableProps> = ({}) => {
  const [empleados, setEmpleado] = useState<EmpleadoTypes[]>([]);

  useEffect(() => {
    const fetchEmpleado = async () => {
      try {
        window.electron.ipcRenderer
          .invoke("asisgencia/getAsistencia")
          .then((data) => {
            if (data.type === "success") {
              setEmpleado(data.asistencias);
            }
          });
      } catch (error) {
        console.error("Error al recuperar los datos de los empleados:", error);
      }
    };

    fetchEmpleado();
  }, []);

  const datos = [
    empleados.length > 0 ? empleados : staticDataFake,
    configTablet,
  ];

  return (
    <>
      <TabletTrabajador
        nameTabla="Asistencia"
        onClick={() => console.log("ir a añadir empleado")}
        rowData={datos[0]}
        columnDefs={datos[1]}
        ir={"ir"}
      />
    </>
  );
};

export default AsistenciaTable;
