import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
//import components
//import GoogleLoginButton from "./GoogleLoginButton";

type AuthStackParamList = {
  LoginPage: undefined;
  OtpPage: undefined;
};

type Props = StackScreenProps<AuthStackParamList, "LoginPage">;

const LoginPage = ({ navigation }: Props) => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    navigation.push("OtpPage");
    //send request to send otp
  };

  return (
    <View style={styles.body}>
      <Text style={styles.title}>Another You</Text>
      <TextInput
        style={[styles.title, styles.textInput]}
        placeholder="Email"
        placeholderTextColor="grey"
        value={email}
        onChangeText={(text) => setEmail(text)}
        onSubmitEditing={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    backgroundColor: "darkslategrey",
    width: 250,
    lineHeight: 48,
    borderRadius: 4,
    color: "rgb(243, 243, 243)",
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.1,
  },
  textInput: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "lightgrey",
    fontWeight: "normal",
    color: "black",
    height: 46,
  },
});

export default LoginPage;
