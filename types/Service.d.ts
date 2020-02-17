import { RequestType, ResponseType } from "@kamalion/react-service";
export declare class BaseService {
    private controller;
    constructor(controller: string);
    GetToken(key?: string): Promise<string | null>;
    CreateRequestByUrl<T>(requestType: RequestType, url: string, data?: any, responseType?: ResponseType): Promise<T>;
    CreateRequest<T>(requestType: RequestType, route?: string | null, data?: any | null, version?: string | null, responseType?: ResponseType): Promise<T>;
}
