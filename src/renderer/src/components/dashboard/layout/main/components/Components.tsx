import Initial from "./Initial";
import Initial2 from "./Initial2";

// @iconos
import { HiHome } from "react-icons/hi";
import { PiTableThin } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { PiChefHatBold } from "react-icons/pi";
import { PiStudentBold } from "react-icons/pi";
// import TabletDocente from "./docente/TabletDocente";
// import AddDocente from "./docente/crud/AddDocente";
import { FaUsersLine } from "react-icons/fa6";
// import TabletObrero from "./TabletObrero";
// import AddObrero from "./obreros/crud/AddObrero";
import { MdOutlineUpdate } from "react-icons/md";
// import TabletAdministrativo from "./administrativos/TabletAdministrativo";
// import AddAdministrativo from "./administrativos/crud/AddAdministrativo";

// import TabletCocinero from "./cocineras/cocineroObrero";
// import AddCocinero from "./cocineras/crud/AddCocineros";

import AsistenciaTabla from "./asistencia/AsistenciaTabla";
import AddAsistencia from "./asistencia/crud/AddAsistencia";

import EmpleadoTable from "./empleado/Empleado";

// import TabletBitacora from "./bitacora/TabletBitacora";
import { TbCheckupList } from "react-icons/tb";

import Docente from "./empleado/Docente";

import Inicio from "./inicio/Inicio";
const components: any = [
  {
    titleSecction: "inicio",
    elements: [
      {
        component: Inicio,
        context: "Inicio",
        icon: <HiHome />,
      },
    ],
  },
  {
    titleSecction: "Empleados",
    elements: [
      {
        component: Docente,
        context: "docentes",
        icon: <PiStudentBold />,
      },

      // {
      //   component: TabletObrero,
      //   context: "obreros",
      //   icon: <GrUserWorker />,
      // },
      {
        component: EmpleadoTable,
        context: "administrativos",
        icon: <FaUsersLine />,
      },
      // {
      //   component: TabletCocinero,
      //   context: "cocineros",
      //   icon: <PiChefHatBold />,
      // },
    ],
  },
  {
    titleSecction: "bitacora",
    elements: [
      // {
      //   component: TabletBitacora,
      //   context: "bitacora",
      //   icon: <MdOutlineUpdate />,
      // },
      {
        component: AsistenciaTabla,
        context: "Asistencia",
        icon: <TbCheckupList />,
      },
    ],
  },
  {
    titleSecction: "otros",
    elements: [
      // {
      //   component: AddDocente,
      //   context: "agregar docente",
      //   icon: <FaCalendarAlt />,
      // },
      // {
      //   component: AddObrero,
      //   context: "agregar obrero",
      //   icon: <FaCalendarAlt />,
      // },
      // {
      //   component: AddAdministrativo,
      //   context: "agregar administrativo",
      //   icon: <FaCalendarAlt />,
      // },
      // {
      //   component: AddCocinero,
      //   context: "agregar cocinero",
      //   icon: <FaCalendarAlt />,
      // },
      /* {
        component: AddAsistencia,
        context: "Asistencia",
        icon: <FaCalendarAlt />,
      }, */
    ],
  },
];

export { components };
