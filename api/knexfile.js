export default {
  client: "mysql2",
  connection: async () => {
    (await import("dotenv")).config()
    return {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    };
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./src/database/migrations",
  },
  seeds: {
    directory: "./src/database/seeds",
  },
};
