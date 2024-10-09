import dbManager from "@dbManager";
dbManager;

import dataFake from "../fake-data/dataFake";
dataFake();

import { login } from "../controllers/auth";
import { getEmpleado, addEmpleado } from "../controllers/empleados";
import { generarAsistencia } from "../controllers/asistencia";
import { ping } from "./ping";

generarAsistencia()

const router = {
  ping,
  login,
  getEmpleado,
  addEmpleado,
};

export default router;
