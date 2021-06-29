import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { GoogleSignin, GoogleSigninButton, statusCodes } from "@react-native-google-signin/google-signin";

const GoogleLoginButton = () => {
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const handleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("userInfo", userInfo);
      //setUserInfo(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log("1", error.message);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log("2", error.message);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log("3", error.message);
      } else {
        // some other error happened
        console.log("4", error.message);
      }
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ["email", "profile"], // what API you want to access on behalf of the user, default is email and profile
      webClientId: "15672940268-r2h0bj1imdjuurcc4ppvn729s4gb0jh0.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // hostedDomain: "", // specifies a hosted domain restriction
      // loginHint: "", // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      // accountName: "", // [Android] specifies an account name on the device that should be used
      // iosClientId: "<FROM DEVELOPER CONSOLE>", // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      // googleServicePlistPath: "", // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    });
  }, []);

  return (
    <GoogleSigninButton
      style={{ width: 192, height: 48 }}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Light}
      onPress={handleSignIn}
      disabled={isSigninInProgress}
    />
  );
};

export default GoogleLoginButton;
