import {Exception} from "@src/exceptions/types/Exception";

export default class EmailIsInvalidException  implements Exception {
  status = 400;
  message = "EmailIsInvalidException";
}
