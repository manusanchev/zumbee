import validator from "validator";
import PasswordIsNotValid from "@src/exceptions/PasswordIsNotValid";

export default class PasswordVO {
  private readonly password: string;

  constructor(password: string) {
    if (password === undefined || validator.isEmpty(password)) {
      throw new PasswordIsNotValid();
    }
    this.password = password;
  }

  value(): string {
    return this.password;
  }
}
