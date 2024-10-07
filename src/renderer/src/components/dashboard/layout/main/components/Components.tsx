// @iconos
import { HiHome } from "react-icons/hi";
import { PiTableThin } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { PiChefHatBold } from "react-icons/pi";
import { PiStudentBold } from "react-icons/pi";

import { FaUsersLine } from "react-icons/fa6";

import { MdOutlineUpdate } from "react-icons/md";

import AsistenciaTabla from "./asistencia/AsistenciaTabla";

import { TbCheckupList } from "react-icons/tb";

import Docente from "./empleado/tablas/Docente";
import Obrero from "./empleado/tablas/Obrero";

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

      {
        component: Obrero,
        context: "obreros",
        icon: <GrUserWorker />,
      },
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
