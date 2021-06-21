import React from "react";
import { StyleSheet, View, Text } from "react-native";

//import components
import GoogleLoginButton from "./GoogleLoginButton";
const LoginPage = () => {
  return (
    <View style={styles.body}>
      <GoogleLoginButton />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoginPage;
