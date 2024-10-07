import dbManager from "@dbManager";
dbManager;

import dataFake from "../fake-data/dataFake";
dataFake();

import { login } from "../controllers/auth";

import { ping } from "./ping";

const router = {
  ping,
  login,
};

export default router;
