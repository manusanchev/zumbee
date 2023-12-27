import {Exception} from "@src/exceptions/types/Exception";

export default class PasswordIsNotValid implements Exception {
    status = 400;
    message = "PasswordIsNotValid";
}
