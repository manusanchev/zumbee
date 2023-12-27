import IConfig from "@src/services/shared/environment/EnvironmentConfig";

export class EnvironmentService {
  private config: IConfig = {
    db: {
      host: process.env.DB_HOST,
      name: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
      expiration: process.env.JWT_EXPIRATION
    },
  };

  get<K extends keyof IConfig>(key: K): IConfig[K] {
    return this.config[key];
  }
}
