import { RepositoriesName } from "@src/types/RepositoriesName";
import UserRepository from "@src/repositories/user/types/UserRepository";
import InvalidCredentials from "@src/exceptions/InvalidCredentials";
import User from "@src/models/User";
import bcrypt from "bcrypt";

export default class LoginService {
  private readonly userRepository;
  constructor({
    userRepository,
  }: {
    [RepositoriesName.UserRepository]: UserRepository;
  }) {
    this.userRepository = userRepository;
  }

  async execute(emailOrUsername: string, password: string) {
    const user: User = await this.ensureUserExists(emailOrUsername);

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new InvalidCredentials();
    }

    // generate token
  }

  async ensureUserExists(emailOrUsername: string) {
    const user =
      await this.userRepository.findByUsernameOrEmail(emailOrUsername);
    if (user === undefined) {
      throw new InvalidCredentials();
    }

    return user as unknown as User;
  }
}
