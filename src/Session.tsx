import AsyncStorage from "@react-native-community/async-storage";

var config = require("../../../../src/config.json");

export abstract class Session {
  static setToken = async (token: string) =>
    await AsyncStorage.setItem(`@${config.appName}:token`, token);

  static clear = async () =>
    await AsyncStorage.removeItem(`@${config.appName}:token`);
}
