import React, { useEffect } from "react";
import { View, Text } from "react-native";
//import { GoogleSignin, GoogleSigninButton, statusCodes } from "@react-native-google-signin/google-signin";

const GoogleLoginButton = () => {
  // _signIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const { accessToken, idToken } = await GoogleSignin.signIn();
  //     setloggedIn(true);
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //       alert("Cancel");
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       alert("Signin in progress");
  //       // operation (f.e. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       alert("PLAY_SERVICES_NOT_AVAILABLE");
  //       // play services not available or outdated
  //     } else {
  //       // some other error happened
  //     }
  //   }
  // };

  useEffect(() => {
    // GoogleSignin.configure({
    //   scopes: ["email"], // what API you want to access on behalf of the user, default is email and profile
    //   webClientId: "418977770929-g9ou7r9eva1u78a3anassxxxxxxx.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
    //   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    // });
  }, []);

  return (
    <View>
      <Text>google login</Text>
    </View>
  );
};

export default GoogleLoginButton;
