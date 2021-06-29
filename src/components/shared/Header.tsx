import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";

const Header = () => {
  return (
    <View style={styles.body}>
      <SafeAreaView />
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
  header: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Header;
