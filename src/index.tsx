export {BaseService} from "./Service";
export {Session} from "./Session";

export enum RequestType {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE"
}

export enum ResponseType {
  Default,
  Blob,
  Zip
}
