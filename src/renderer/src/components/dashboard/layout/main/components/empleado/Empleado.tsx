import React, { useEffect, useState } from "react";

import TabletTrabajador from "@components/tablet/TabletTrabajador";
import EmpleadoTypes from "./configTablet/EmpleadoTypes";
import configTablet from "./configTablet/configTablet";
import staticDataFake from "./configTablet/staticDataFake";

interface EmpleadoTableProps {
  tipo: string;
  nameTablet: string;
  ir: string;
  irAnadirEmpleado: () => void;
}

const EmpleadoTable: React.FC<EmpleadoTableProps> = ({
  tipo,
  nameTablet,
  ir,
  irAnadirEmpleado,
}) => {
  const [empleadoas, setEmpleado] = useState<EmpleadoTypes[]>([]);

  useEffect(() => {
    const fetchEmpleado = async () => {
      try {
        window.electron.ipcRenderer
          .invoke("empleado/getEmpleado", { tipo_empleado: tipo })
          .then((result) => {
            console.log(result);
            // if (data.type === "success") {
            //     setEmpleado(data.administrativos);
            //   }
          });
      } catch (error) {
        console.error("Error al recuperar los datos de los empleados:", error);
      }
    };

    fetchEmpleado();
  }, []);

  const datos = [
    empleadoas.length > 0 ? empleadoas : staticDataFake,
    configTablet,
  ];

  return (
    <>
      <TabletTrabajador
        nameTabla={nameTablet}
        onClick={irAnadirEmpleado}
        rowData={datos[0]}
        columnDefs={datos[1]}
        ir={ir}
      />
    </>
  );
};

export default EmpleadoTable;
