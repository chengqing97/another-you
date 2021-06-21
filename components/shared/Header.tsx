import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Platform, StatusBar } from "react-native";

const Header = () => {
  return (
    <View style={styles.body}>
      <SafeAreaView style={styles.statusBar} />
      <View style={styles.header}>
        <Text>ChengQing</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
  },
  statusBar: {
    height: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Header;
