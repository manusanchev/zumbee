export default interface IConfig {
  db: IDbConfig;
}

interface IDbConfig {
  host: string;
  name: string;
  user: string;
  password: string;
}
