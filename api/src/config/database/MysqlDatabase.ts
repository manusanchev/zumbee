import { createPool, Pool } from "mysql2/promise";
import Database from "@src/config/database/types/Database";
import type { EnvironmentService } from "@src/services/shared/environment/EnvironmentService";

export default class MysqlDatabase implements Database<Pool> {
  private readonly mysqlConnection: Pool;

  constructor({
    environmentService,
  }: {
    environmentService: EnvironmentService;
  }) {
    this.mysqlConnection = createPool({
      user: environmentService.get("db").user,
      password: environmentService.get("db").password,
      database: environmentService.get("db").name,
      host: environmentService.get("db").host,
    });

    this.mysqlConnection
      .getConnection()
      .then((con) => {
        con.release();
      })
      .catch((err) => {
        console.error("Unable to connect to the database:", err);
        throw err;
      });
  }

  instance(): Pool {
    return this.mysqlConnection;
  }
}
