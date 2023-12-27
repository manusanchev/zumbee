import express, { Express} from "express";
import authRoutes from "@src/routes/authRoutes";
import Container from "@src/config/container";
import { AwilixContainer } from "awilix";

export default class App {
  private readonly appInstance: Express;
  private readonly container: AwilixContainer;

  constructor() {
    this.appInstance = express();
    this.appInstance.use(express.json());
    this.container = new Container().getContainer();
    this.defineRoutes();
  }
  private defineRoutes() {
    this.appInstance.use("/auth", authRoutes(this.container));
  }

  getAppInstance(): Express {
    return this.appInstance;
  }
}
