export { BaseService } from "./Service";
export { Session } from "./Session";
export declare enum RequestType {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE"
}
export declare enum ResponseType {
    Default = 0,
    Blob = 1,
    Zip = 2
}
