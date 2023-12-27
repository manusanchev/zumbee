import { Exception } from "@src/exceptions/types/Exception";

export default class UsernameIsNotValid implements Exception {
  status = 400;
  message = "UsernameIsNotValid";
}
