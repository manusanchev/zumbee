import {Exception} from "@src/exceptions/types/Exception";

export default class Unauthorized implements Exception {
    status = 401;
    message = "Unauthorized";
}
