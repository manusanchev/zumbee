import {Exception} from "@src/exceptions/types/Exception";

export default class IdIsNotValid implements Exception {
 status = 400;
 message = "IdIsNotValid";
}
