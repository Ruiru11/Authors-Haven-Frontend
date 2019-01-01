import AsyncStorage from "@react-native-community/async-storage";

export const setToken = async token => {
  try {
    await AsyncStorage.setItem("TOKEN_AUTH", token);
  } catch (error) {
    return null;
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("TOKEN_AUTH");
    return token;
  } catch (error) {
    return null;
  }
};

export const LogOut = async (callback = () => {}) => {
  try {
    await AsyncStorage.removeItem("TOKEN_AUTH", () => callback("Login"));
  } catch (error) {
    return null;
  }
};


export const authHeaders = async () => {
  try {
    const token = await AsyncStorage.getItem("TOKEN_AUTH");
    return token;
  } catch (error) {
    return null;
  }
};
