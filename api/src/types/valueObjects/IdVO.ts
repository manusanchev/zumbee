import validator from "validator";
import IdIsNotValid from "@src/exceptions/IdIsNotValid";

export default class IdVO {
  private readonly id: string;

  constructor(id: string) {
    if (id === undefined || !validator.isUUID(id) || validator.isEmpty(id)) {
      throw new IdIsNotValid();
    }
    this.id = id;
  }

  value(): string {
    return this.id;
  }
}
