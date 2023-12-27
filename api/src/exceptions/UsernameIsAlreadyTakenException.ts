import {Exception} from "@src/exceptions/types/Exception";

export default class UsernameIsAlreadyTakenException implements Exception {
    status = 400;
    message = "UsernameIsAlreadyTakenException";
}
