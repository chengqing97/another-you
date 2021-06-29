import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import AuthenticationAPI from "../../apis/AuthenticationAPI";
import { StackScreenProps } from "@react-navigation/stack";

type AuthStackParamList = {
  LoginPage: undefined;
  OtpPage: { setIsLoggedIn: React.Dispatch<boolean> };
};

type Props = StackScreenProps<AuthStackParamList, "OtpPage">;

const OtpPage = ({ route }: Props) => {
  const [otp, setOtp] = useState("");
  const { setIsLoggedIn } = route.params;

  const handleSubmit = async () => {
    setIsLoggedIn(true);
    // try {
    //   const response = await AuthenticationAPI.post("/verify-otp", {
    //     otp: otp
    //   })
    //   setIsLoggedIn(true)
    // } catch (error) {
    //   alert("Invalid OTP")
    // }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>A one time password has been sent to your email.</Text>
      <TextInput
        style={[styles.title, styles.textInput]}
        placeholder="OTP"
        placeholderTextColor="grey"
        value={otp}
        onChangeText={(text) => setOtp(text)}
        onSubmitEditing={handleSubmit}
      />
      <TouchableOpacity style={styles.resendButton}>
        <Text>Send again</Text>
      </TouchableOpacity>
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
  text: {
    marginBottom: 15,
  },

  resendButton: {
    borderBottomWidth: 1,
    borderColor: "grey",
    marginTop: 30,
  },
});

export default OtpPage;
