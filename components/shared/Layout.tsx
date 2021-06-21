import React from "react";
import { StyleSheet, View, Text, Dimensions, Platform } from "react-native";

const { height, width } = Dimensions.get("window");
const Layout = ({ children }) => {
  // function displayWindowSize(){
  //   // Get width and height of the window excluding scrollbars
  //   var w = document.documentElement.clientWidth;
  //   var h = document.documentElement.clientHeight;

  //   console.log(w,h)
  // }

  // // Attaching the event listener function to window's resize event
  // window.addEventListener("resize", displayWindowSize);

  // // Calling the function for the first time
  // displayWindowSize();
  if (Platform.OS === "web")
    return (
      <View style={styles.body}>
        <View style={styles.contentArea}>{children}</View>
      </View>
    );
  return children;
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "darkslategrey",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentArea: {
    backgroundColor: "white",
    width: 800,
    height: 600,
    borderRadius: 12,
    overflow: "hidden",
  },
});

export default Layout;
