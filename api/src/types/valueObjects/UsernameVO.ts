import validator from "validator";
import UsernameIsNotValid from "@src/exceptions/UsernameIsNotValid";

export default class UsernameVO {
  private readonly username: string;

  constructor(username: string) {
    if (username === undefined || validator.isEmpty(username)) {
      throw new UsernameIsNotValid();
    }
    this.username = username;
  }

  value(): string {
    return this.username;
  }
}
