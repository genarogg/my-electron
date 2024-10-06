import { Database } from "node-sqlite3-wasm";
import { app } from "electron";
import path from "path";

class DatabaseManager {
  private db: Database;

  constructor() {
    // Determinar la ruta de la base de datos dependiendo del entorno
    const isPackaged = app.isPackaged;
    const basePath = isPackaged
      ? path.join(process.resourcesPath, "database.db")
      : path.join(__dirname, "database.db");

    this.db = new Database(basePath);
  }

  public getDatabase() {
    return this.db;
  }
}

const databaseManager = new DatabaseManager();
export default databaseManager;
