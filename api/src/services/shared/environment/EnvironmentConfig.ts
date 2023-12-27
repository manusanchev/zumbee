export default interface IConfig {
  db: IDbConfig;
  jwt: JwtConfig;
}

interface IDbConfig {
  host: string;
  name: string;
  user: string;
  password: string;
}

interface JwtConfig {
  secret: string;
  expiration: string;
}
