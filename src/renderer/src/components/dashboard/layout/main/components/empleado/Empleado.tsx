import React, { useEffect, useState } from "react";

interface EmpleadoTableProps {}

import TabletTrabajador from "@components/tablet/TabletTrabajador";
import EmpleadoTypes from "./configTablet/EmpleadoTypes";
import configTablet from "./configTablet/configTablet";
import staticDataFake from "./configTablet/staticDataFake";

const EmpleadoTable: React.FC<EmpleadoTableProps> = () => {
  const irAnadirObrero = () => {
    console.log("");
  };

  const [empleadoas, setEmpleado] = useState<EmpleadoTypes[]>([]);

  useEffect(() => {
    const fetchAdministrativo = async () => {
      try {
        window.electron.ipcRenderer
          .invoke("empleado/get", { tipo_empleado: "docente" })
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

    fetchAdministrativo();
  }, []);

  const datos = [
    empleadoas.length > 0 ? empleadoas : staticDataFake,
    configTablet,
  ];

  return (
    <>
      <TabletTrabajador
        nameTabla="Administrativo"
        onClick={irAnadirObrero}
        rowData={datos[0]}
        columnDefs={datos[1]}
        ir={""}
      />
    </>
  );
};

export default EmpleadoTable;
