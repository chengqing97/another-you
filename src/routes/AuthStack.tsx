import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//import components
import LoginPage from "../components/auth/LoginPage";
import OtpPage from "../components/auth/OtpPage";

type AuthStackParamList = {
  LoginPage: undefined;
  OtpPage: { setIsLoggedIn: React.Dispatch<boolean> };
};

const Stack = createStackNavigator<AuthStackParamList>();

type Props = { setIsLoggedIn: React.Dispatch<boolean> };

const AuthStack = ({ setIsLoggedIn }: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="OtpPage" component={OtpPage} initialParams={{ setIsLoggedIn }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
