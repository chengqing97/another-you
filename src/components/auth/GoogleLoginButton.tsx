import React from "react";
import { View, Text } from "react-native";
import GoogleLogin from "react-google-login";

const GoogleLoginButtonForWeb = () => {
  const responseGoogle = (response: any) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId="15672940268-r2h0bj1imdjuurcc4ppvn729s4gb0jh0.apps.googleusercontent.com"
      buttonText="Sign in with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLoginButtonForWeb;
