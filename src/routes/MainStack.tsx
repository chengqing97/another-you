import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//import components
import ChatRoomPage from "../components/chatRoom/ChatRoomPage";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="ChatRoom" component={ChatRoomPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
