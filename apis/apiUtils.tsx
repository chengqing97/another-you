import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Updates from "expo-updates";

export const requestInterceptor = (axios) => {
  axios.interceptors.request.use(
    async (config) => {
      const token = await AsyncStorage.getItem("token");
      const refreshToken = await AsyncStorage.getItem("refreshToken");
      config.headers = {
        token: token,
        refreshtoken: refreshToken,
      };
      config.timeout = 10000;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export const responseInterceptor = (axios) => {
  axios.interceptors.response.use(
    async (response) => {
      if (response.headers.token) {
        await AsyncStorage.setItem("token", response.headers.token);
      }
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

console.log("NODE_ENV:", process.env.NODE_ENV);

let api = "https://api.anotheryou.com/v1";
if (process.env.NODE_ENV === "development" || Updates.releaseChannel === "dev") {
  // api = "https://devapi.abokfoodhunt.com/v1";
  api = "http://192.168.1.45:5000/v1"; // LAN
  // api = "http://10.0.2.2:5000/v1"; // emulator
}

export const masterEndpoint = api;
