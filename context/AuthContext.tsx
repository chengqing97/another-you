import React, { useState, createContext, useMemo } from "react";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthenticationAPI from "../apis/AuthenticationAPI";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [userProfile, setUserProfile] = useState({});
  const [userId, setUserId] = useState(null);
  const [userRole, setUserRole] = useState([]);
  const [userManagingRestaurant, setUserManagingRestaurant] = useState([]);

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            token: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            token: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            token: null,
          };
        case "INTERNET_ERROR":
          return {
            ...prevState,
            internetError: true,
          };
        case "RESET":
          return {
            isLoading: true,
            internetError: false,
            isSignout: false,
            token: null,
          };
      }
    },
    {
      isLoading: true,
      internetError: false,
      isSignout: false,
      token: null,
    }
  );

  const standardSignInProcedure = async (data) => {
    await AsyncStorage.setItem("token", data.token);
    await AsyncStorage.setItem("refreshToken", data.refreshToken);
    setUserProfile(data);
    setUserId(data.id);
    setUserRole(data.role);
    setUserManagingRestaurant(data.managing_restaurant);
    dispatch({ type: "SIGN_IN", token: data.token });
  };

  const authentication = useMemo(
    () => ({
      signIn: async (email, password) => {
        try {
          const response = await AuthenticationAPI.post("/login", {
            email,
            password,
            client_version: Constants.manifest.version,
            platform: Platform.OS,
          });
          await standardSignInProcedure(response.data);
          return "login success";
        } catch (error) {
          throw error;
        }
      },

      facebookLogin: async (token) => {
        try {
          const response = await AuthenticationAPI.post(
            "/login/facebook-login",
            {
              client_version: Constants.manifest.version,
              platform: Platform.OS,
            },
            {
              headers: {
                token: token,
              },
              timeout: 3000,
            }
          );
          await standardSignInProcedure(response.data);
          return "Facebook login success";
        } catch (error) {
          console.log(error);
          throw { message: "Server error" };
        }
      },

      googleLogin: async (token) => {
        try {
          const response = await AuthenticationAPI.post(
            "/login/google-login",
            {
              client_version: Constants.manifest.version,
              platform: Platform.OS,
            },
            {
              headers: {
                token: token,
              },
            }
          );
          await standardSignInProcedure(response.data);
          return "Google login success";
        } catch (error) {
          throw { message: "Server error" };
        }
      },

      appleLogin: async (credential) => {
        try {
          const response = await AuthenticationAPI.post("/login/apple-login", {
            ...credential,
            client_version: Constants.manifest.version,
            platform: Platform.OS,
          });
          await standardSignInProcedure(response.data);
          return "Apple login success";
        } catch (error) {
          throw { message: error.message };
        }
      },

      signUp: async (email, otp) => {
        try {
          const response = await AuthenticationAPI.post("/register/otp-verification", { email, otp });
          await standardSignInProcedure(response.data);
          return true;
        } catch (error) {
          throw error;
        }
      },

      signOut: async () => {
        try {
          const pushToken = await AsyncStorage.getItem("pushToken");
          const token = await AsyncStorage.getItem("token");
          const refreshToken = await AsyncStorage.getItem("refreshToken");
          await AuthenticationAPI.delete(`/remove-push-token/${pushToken}`, {
            headers: {
              token: token,
              refreshtoken: refreshToken,
            },
          });
          await AsyncStorage.removeItem("pushToken");
          await AsyncStorage.removeItem("token");
          await AsyncStorage.removeItem("refreshToken");
          setUserProfile({});
          setUserId(null);
          setUserRole(null);
          dispatch({ type: "SIGN_OUT" });
        } catch (error) {
          throw error;
        }
      },
    }),
    []
  );

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
        authentication,
        userProfile,
        setUserProfile,
        userId,
        setUserId,
        userRole,
        setUserRole,
        userManagingRestaurant,
        setUserManagingRestaurant,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
