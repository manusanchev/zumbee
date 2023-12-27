import { ServicesName } from "@src/types/ServicesName";
import {NextFunction, Request, Response} from "express";
import PasswordVO from "@src/types/valueObjects/PasswordVO";
import validator from "validator";
import InvalidCredentials from "@src/exceptions/InvalidCredentials";
import type LoginService from "@src/services/auth/LoginService";

export default class SignInController {
  private readonly loginService;
  constructor({
    loginService,
  }: {
    [ServicesName.LoginService]: LoginService;
  }) {
    this.loginService = loginService;
  }

  async handle(req: Request, res: Response, next: NextFunction) {
    let emailOrUsername = req.body.emailOrUsername;
    if (emailOrUsername === undefined || validator.isEmpty(emailOrUsername)) {
      throw new InvalidCredentials();
    }


    const password = new PasswordVO(req.body.password).value();

    await this.loginService.execute(emailOrUsername, password)
  }
}
