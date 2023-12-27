import App from "@src/app";
import dotenv from "dotenv";
import { Express } from "express";

class Server {
  private readonly app: Express;
  constructor() {
    this.initEnvironmentVariables();
    this.app = new App().getAppInstance();
    this.initServer();
  }

  initServer() {
    this.app.listen(process.env.PORT || 8080, () => {
      console.log("Started at http://localhost:8080");
    });
  }
  initEnvironmentVariables() {
    dotenv.config();
  }
}

(() => new Server())();
