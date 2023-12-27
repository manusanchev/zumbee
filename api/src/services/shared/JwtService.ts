import jwt from "jsonwebtoken";
import { ServicesName } from "@src/types/ServicesName";
import { EnvironmentService } from "@src/services/shared/environment/EnvironmentService";

export default class JwtService {
  private readonly environmentService;
  constructor({
    environmentService,
  }: {
    [ServicesName.EnvironmentService]: EnvironmentService;
  }) {
    this.environmentService = environmentService;
  }

  generate(payload: object) {
    return jwt.sign(payload, this.environmentService.get("jwt").secret, {
      expiresIn: this.environmentService.get("jwt").expiration,
    });
  }
  verify(token: string) {
    return new Promise((resolve, reject) => {
      jwt.verify(
        token,
        this.environmentService.get("jwt").secret,
        (err: any, user: any) => {
          if (!err) {
            reject(err);
          }
          resolve(user);
        },
      );
    });
  }
}
