declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      DB_HOST: string;
      DB_NAME: string;
      DB_USER: string;
      DB_PASSWORD: string;
      JWT_SECRET: string;
      JWT_EXPIRATION: string;
    }
  }
}

export {};
