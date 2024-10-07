import dbManager from "@dbManager";
dbManager;

import dataFake from "../fake-data/dataFake";
dataFake();

import { ping } from "./ping";

const router = {
  ping,
};

export default router;
