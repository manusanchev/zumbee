import { RepositoriesName } from "@src/types/RepositoriesName";
import UserRepository from "@src/repositories/user/types/UserRepository";
import InvalidCredentials from "@src/exceptions/InvalidCredentials";
import User from "@src/models/User";
import bcrypt from "bcrypt";
import { ServicesName } from "@src/types/ServicesName";
import JwtService from "@src/services/shared/JwtService";

export default class LoginService {
  private readonly userRepository;
  private readonly jwtService;
  constructor({
    userRepository,
    jwtService,
  }: {
    [RepositoriesName.UserRepository]: UserRepository;
    [ServicesName.JwtService]: JwtService;
  }) {
    this.jwtService = jwtService;
    this.userRepository = userRepository;
  }

  async execute(emailOrUsername: string, password: string) {
    const user: User = await this.ensureUserExists(emailOrUsername);
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new InvalidCredentials();
    }

    return this.jwtService.generate({ id: user.id });
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
