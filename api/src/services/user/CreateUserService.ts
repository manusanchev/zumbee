import UserRepository from "@src/repositories/user/types/UserRepository";
import { RepositoriesName } from "@src/types/RepositoriesName";
import User from "@src/models/User";
import bcrypt from "bcrypt";
import EmailIsAlreadyTakenException from "@src/exceptions/EmailIsAlreadyTakenException";
import UsernameIsAlreadyTakenException from "@src/exceptions/UsernameIsAlreadyTakenException";

export default class CreateUserService {
  private userRepository: UserRepository;
  constructor({
    userRepository,
  }: {
    [RepositoriesName.UserRepository]: UserRepository;
  }) {
    this.userRepository = userRepository;
  }
  async execute(id: string, email: string, password: string, username: string) {
    await this.ensureEmailIsUnique(email);
    await this.ensureUsernameIsUnique(username);

    const passwordCrypt = await bcrypt.hash(password, 10);
    const createdAt = new Date();

    const user = new User(id, username, passwordCrypt, email, createdAt);

    await this.userRepository.create(user);
  }

  private async ensureEmailIsUnique(email: string) {
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser !== undefined) {
      throw new EmailIsAlreadyTakenException();
    }
  }

  private async ensureUsernameIsUnique(username: string) {
    const existingUser = await this.userRepository.findByUsername(username);
    if (existingUser) {
      throw new UsernameIsAlreadyTakenException();
    }
  }
}
