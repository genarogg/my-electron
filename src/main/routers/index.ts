import dbManager from "@dbManager";
dbManager;

import dataFake from "../fake-data/dataFake";
dataFake();

import { login } from "../controllers/auth";
import { getEmpleado, addEmpleado } from "../controllers/empleados";

import { ping } from "./ping";

const router = {
  ping,
  login,
  getEmpleado,
  addEmpleado,
};

export default router;
