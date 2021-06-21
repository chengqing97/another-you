import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//import components
import ChatRoomPage from "./components/chatRoom/ChatRoomPage";
import LoginPage from "./components/auth/LoginPage";

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!isLoggedIn) return <LoginPage />;
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="ChatRoom" component={ChatRoomPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
