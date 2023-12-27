import validator from "validator";
import EmailIsInvalidException from "@src/exceptions/EmailIsInvalidException";

export default class EmailVO {
  private readonly email: string;

  constructor(email: string) {
    if (email === undefined|| !validator.isEmail(email) || validator.isEmpty(email)) {
      throw new EmailIsInvalidException();
    }
    this.email = email;
  }

  value(): string {
    return this.email;
  }
}
