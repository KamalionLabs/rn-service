"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Service_1 = require("./Service");
exports.BaseService = Service_1.BaseService;
var Session_1 = require("./Session");
exports.Session = Session_1.Session;
var RequestType;
(function (RequestType) {
    RequestType["GET"] = "GET";
    RequestType["POST"] = "POST";
    RequestType["PUT"] = "PUT";
    RequestType["PATCH"] = "PATCH";
    RequestType["DELETE"] = "DELETE";
})(RequestType = exports.RequestType || (exports.RequestType = {}));
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["Default"] = 0] = "Default";
    ResponseType[ResponseType["Blob"] = 1] = "Blob";
    ResponseType[ResponseType["Zip"] = 2] = "Zip";
})(ResponseType = exports.ResponseType || (exports.ResponseType = {}));
