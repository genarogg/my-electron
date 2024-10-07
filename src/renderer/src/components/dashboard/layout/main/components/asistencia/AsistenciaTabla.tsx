interface AsistenciaTablaProps {}

import TabletTrabajador from "@components/tablet/TabletTrabajador";
import React, { useEffect, useState } from "react";

import AddAsistencia from "./crud/AddAsistencia";

import {
  AsistenciaPersonal,
  asistenciaPersonal,
} from "./data/asistenciaPersonal";
import asistenciaColumnDefs from "./data/asistenciaColumnDefs";

const AsistenciaTabla: React.FC<AsistenciaTablaProps> = () => {
  const irAnadirObrero = () => {
    console.log("isActive", isActive);
    document.getElementById("asideAsistencia")!.classList.toggle("active");
    setIsActive(!isActive);
  };

  const [isActive, setIsActive] = useState(false);
  const [asistencia, setAsistencia] = useState<AsistenciaPersonal[]>([]);

  useEffect(() => {
    const fetchCocinero = async () => {
      try {
        const response = await fetch(`-/asistencia/get`);
        const data = await response.json();
        if (data.type === "success") {
          setAsistencia(data.asistencias);
        } else {
          console.error("Error al recuperar los datos de los docentes:", data);
        }
      } catch (error) {
        console.error("Error al recuperar los datos de los docentes:", error);
      }
    };

    fetchCocinero();
  }, [isActive]);

  const datos = [
    asistencia.length > 0 ? asistencia : asistenciaPersonal,
    asistenciaColumnDefs,
  ];

  return (
    <>
      <TabletTrabajador
        nameTabla="asistencia"
        subname="registrar una"
        onClick={irAnadirObrero}
        datos={datos}
        ir={"Asistencia"}
      />

      <div className={`addAsistencia aside`} id="asideAsistencia">
        <AddAsistencia fn={irAnadirObrero}></AddAsistencia>
      </div>
    </>
  );
};

export default AsistenciaTabla;
