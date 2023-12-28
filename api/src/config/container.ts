import awilix, { AwilixContainer } from "awilix";
import MysqlDatabase from "@src/config/database/MysqlDatabase";
import { EnvironmentService } from "@src/services/shared/environment/EnvironmentService";
import { ControllersName } from "@src/types/ControllersName";
import { ServicesName } from "@src/types/ServicesName";
import SignUpController from "@src/controllers/auth/SignUpController";
import CreateUserService from "@src/services/user/CreateUserService";
import { RepositoriesName } from "@src/types/RepositoriesName";
import MysqlUserRepository from "@src/repositories/user/MysqlUserRepository";
import SignInController from "@src/controllers/auth/SignInController";
import LoginService from "@src/services/auth/LoginService";
import JwtService from "@src/services/shared/JwtService";
import Authenticated from "@src/routes/middlewares/authenticated";

export default class Container {
  private readonly container: AwilixContainer;

  constructor() {
    this.container = awilix.createContainer({
      injectionMode: awilix.InjectionMode.PROXY,
    });
    this.registerDependencies();
  }

  getContainer(): AwilixContainer {
    return this.container;
  }

  private registerDependencies() {
    this.container.register({
      mysqlConnection: awilix.asClass(MysqlDatabase).singleton(),
    });

    this.container.register({
      authenticatedMiddleware: awilix.asClass(Authenticated).singleton(),
    });

    this.container.register({
      [ServicesName.EnvironmentService]: awilix
        .asClass(EnvironmentService)
        .singleton(),
      [ServicesName.CreateUserService]: awilix
        .asClass(CreateUserService)
        .singleton(),
      [ServicesName.LoginService]: awilix.asClass(LoginService).singleton(),
      [ServicesName.JwtService]: awilix.asClass(JwtService).singleton(),
    });

    this.container.register({
      [RepositoriesName.UserRepository]: awilix
        .asClass(MysqlUserRepository)
        .singleton(),
    });

    this.container.register({
      [ControllersName.SignUpController]: awilix
        .asClass(SignUpController)
        .singleton(),

      [ControllersName.SignInController]: awilix
        .asClass(SignInController)
        .singleton(),
    });
  }
}
