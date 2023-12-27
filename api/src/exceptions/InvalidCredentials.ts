import {Exception} from "@src/exceptions/types/Exception";

export default class InvalidCredentials implements Exception {
    status = 400;
    message = "InvalidCredentials";
}
