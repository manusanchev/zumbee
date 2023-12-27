import { NextFunction, Request, Response } from "express";
import Unauthorized from "@src/exceptions/Unauthorized";
import { ServicesName } from "@src/types/ServicesName";
import type JwtService from "@src/services/shared/JwtService";

export default class Authenticated {
  private jwtService;
  constructor({ jwtService }: { [ServicesName.JwtService]: JwtService }) {
    this.jwtService = jwtService;
  }

  handle(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers["Authorization"] as string;
    const token = authHeader && authHeader.split(" ")[1];

    if (token === null) {
      this.userIsUnauthenticated(res);
    }

    this.jwtService
      .verify(token)
      .then((userId) => {
        req.user = { id: userId as string };
      })
      .catch((_) => this.userIsUnauthenticated(res));
  }

  private userIsUnauthenticated(res: Response) {
    const unauthorized = new Unauthorized();
    return res.status(unauthorized.status).json(unauthorized);
  }
}
