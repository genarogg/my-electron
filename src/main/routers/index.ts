import dbManager from "@dbManager";
dbManager;

import dataFake from "../fake-data/dataFake";
dataFake();

import auth from "./auth";

import { ping } from "./ping";

const router = {
  ping,
  auth,
};

export default router;
