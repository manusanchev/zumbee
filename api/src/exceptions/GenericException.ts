import {Exception} from "@src/exceptions/types/Exception";

export default class GenericException  implements Exception {
    status = 500;
    message = "GenericException";
}
