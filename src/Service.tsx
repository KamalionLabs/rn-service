import axios, {AxiosRequestConfig} from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import {RequestType, ResponseType} from "@kamalion/react-service";

var config = require("../../../../src/config.json");

export class BaseService {
  // Name of the controller used in this service
  private controller: string;

  constructor(controller: string) {
    this.controller = controller;
  }

  // Get the session token
  public async GetToken(key: string = "token"): Promise<string | null> {
    var token: string | null = null;

    if (typeof localStorage !== "undefined")
      token = await AsyncStorage.getItem(key);

    return token;
  }

  // Create a request using an URL
  public async CreateRequestByUrl<T>(
    requestType: RequestType,
    url: string,
    data?: any,
    responseType: ResponseType = ResponseType.Default
  ): Promise<T> {
    var token = await this.GetToken(`@${config.appName}:token`);

    let options: AxiosRequestConfig = {
      method: requestType,
      url: config.apiUrl + url,
      data: data,
      headers: {
        Authorization: "Bearer " + token
      }
    };

    if (responseType === ResponseType.Blob) options.responseType = "blob";
    else if (responseType === ResponseType.Zip)
      options.responseType = "arraybuffer";

    let {data: result} = await axios(options);

    return result as T;
  }

  public async CreateRequest<T>(
    requestType: RequestType,
    route?: string | null,
    data?: any | null,
    version?: string | null,
    responseType: ResponseType = ResponseType.Default
  ): Promise<T> {
    var url = `/${this.controller}`;

    if (version && version !== "") url = `${url}/${version}`;

    if (route && route !== "") url = `${url}/${route}`;

    return this.CreateRequestByUrl<T>(requestType, url, data, responseType);
  }
}
