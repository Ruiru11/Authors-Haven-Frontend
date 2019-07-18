import { AsyncStorage } from "@react-native-community/async-storage";
import TOKEN_AUTH from "../constants/auth/login";

export const setToken = async token => {
  try {
    await AsyncStorage.setItem(TOKEN_AUTH, JSON.stringify(token));
  } catch (error) {
    return null;
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem(TOKEN_AUTH);
    return token;
  } catch (error) {
    return null;
  }
};

export const disposeToken = async (callback = () => {}) => {
  try {
    await AsyncStorage.removeItem(TOKEN_AUTH, () => callback("Login"));
  } catch (error) {
    return null;
  }
};

export const LoggedIn = () => {
  try {
    const token = getToken();
    return !!token;
  } catch (error) {
    return error === false;
  }
};

export const authHeaders = () => {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};
