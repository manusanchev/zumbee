import { ServicesName } from "@src/types/ServicesName";
import { Request, Response } from "express";
import PasswordVO from "@src/types/valueObjects/PasswordVO";
import validator from "validator";
import InvalidCredentials from "@src/exceptions/InvalidCredentials";
import type LoginService from "@src/services/auth/LoginService";

export default class SignInController {
  private readonly loginService;
  constructor({ loginService }: { [ServicesName.LoginService]: LoginService }) {
    this.loginService = loginService;
  }

  async handle(req: Request, res: Response) {
    try {
      const emailOrUsername = req.body.emailOrUsername;
      this.emailOrUsernameIsValid(emailOrUsername);
      const password = new PasswordVO(req.body.password).value();

      const token = await this.loginService.execute(emailOrUsername, password);
      res.status(200).json({ token });
    } catch (err: any) {
      if (err.message && err.status) {
        return res.status(err.status).json(err);
      }
    }
  }

  emailOrUsernameIsValid(emailOrUsername: string) {
    if (emailOrUsername === undefined || validator.isEmpty(emailOrUsername)) {
      throw new InvalidCredentials();
    }
  }
}
