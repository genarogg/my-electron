import databaseManager from "../config/initDB";

databaseManager;

import { ping } from "./ping";

const router = {
  ping,
};

export default router;
