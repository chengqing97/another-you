import React, { useState } from "react";
import { StyleSheet, View, Platform } from "react-native";

const Layout = ({ children }) => {
  const [fullScreen, setFullScreen] = useState(Platform.OS !== "web");

  if (Platform.OS === "web") {
    const displayWindowSize = () => {
      var w = document.documentElement.clientWidth;
      var h = document.documentElement.clientHeight;
      const isVertical = h / w > 1;
      const shouldFullScreen = (isVertical && w <= 800) || h <= 600;
      if (shouldFullScreen != fullScreen) setFullScreen(shouldFullScreen);
    };
    window.addEventListener("resize", displayWindowSize);
    displayWindowSize();
  }

  if (fullScreen) return children;
  return (
    <View style={styles.body}>
      <View style={styles.contentArea}>{children}</View>
    </View>
  );
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
