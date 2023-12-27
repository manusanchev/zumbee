import { Exception } from "@src/exceptions/types/Exception";

export default class EmailIsAlreadyTakenException implements Exception {
  status = 400;
  message = "EmailIsAlreadyTakenException";
}
