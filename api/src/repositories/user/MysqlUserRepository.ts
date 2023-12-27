import User from "@src/models/User";
import {Pool, RowDataPacket} from "mysql2/promise";
import Database from "@src/config/database/types/Database";
import UserRepository from "@src/repositories/user/types/UserRepository";

export default class MysqlUserRepository implements UserRepository {
  private connection: Pool;

  constructor({ mysqlConnection }: { mysqlConnection: Database<Pool> }) {
    this.connection = mysqlConnection.instance();
  }

  async create(user: User): Promise<void> {
    const [result ] = await this.connection.query(
      "INSERT INTO users (id, username, password, email, created_at, email_confirmed) VALUES (?, ?, ?, ?, ?, ?)",
      [
        user.id,
        user.username,
        user.password,
        user.email,
        user.createdAt,
        user.emailConfirmed,
      ],
    );
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const [result] = await this.connection.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
    );

    return (result as RowDataPacket)[0];
  }

  async findByUsername(username: string): Promise<User | undefined> {
      const [result] = await this.connection.query(
          "SELECT * FROM users WHERE username = ?",
          [username],
      );

      return (result as RowDataPacket)[0];
  }

    async findByUsernameOrEmail(emailOrUsername: string): Promise<User | undefined> {
        const [result] = await this.connection.query(
            "SELECT * FROM users WHERE username = ? or email = ?",
            [emailOrUsername, emailOrUsername],
        );

        return (result as RowDataPacket)[0];
    }
}
