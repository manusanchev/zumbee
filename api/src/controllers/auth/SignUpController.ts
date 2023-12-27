import { NextFunction, Request, Response } from "express";
import { ServicesName } from "@src/types/ServicesName";
import type CreateUserService from "@src/services/user/CreateUserService";
import PasswordVO from "@src/types/valueObjects/PasswordVO";
import UsernameVO from "@src/types/valueObjects/UsernameVO";
import EmailVO from "@src/types/valueObjects/EmailVO";
import IdVO from "@src/types/valueObjects/IdVO";

export default class SignUpController {
  private readonly createUser;
  constructor({
    createUserService,
  }: {
    [ServicesName.CreateUserService]: CreateUserService;
  }) {
    this.createUser = createUserService;
  }

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const id = new IdVO(req.body.id).value();
      const email = new EmailVO(req.body.email).value();
      const password = new PasswordVO(req.body.password).value();
      const username = new UsernameVO(req.body.username).value();

      await this.createUser.execute(id, email, password, username);
      return res.status(201).json({});
    } catch (err: any) {
      console.log(err);
      if (err.message && err.status) {
        return res.status(err.status).json(err);
      }
      next();
    }
  }
}
