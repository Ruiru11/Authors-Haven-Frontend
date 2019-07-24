import AsyncStorage from "@react-native-community/async-storage";

export const setToken = async token => {
  console.log(token, "from token function");
  try {
    await AsyncStorage.setItem("TOKEN_AUTH", token);
  } catch (error) {
    return null;
  }
};

export const getToken = async () => {
  try {
    console.log("retrieve token function", "happy path");
    const token = await AsyncStorage.getItem("TOKEN_AUTH");
    console.log("retrieved token", token);
    return token;
  } catch (error) {
    console.log("retrieve token function", error);
    return null;
  }
};

export const disposeToken = async (callback = () => {}) => {
  try {
    await AsyncStorage.removeItem("TOKEN_AUTH", () => callback("Login"));
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
