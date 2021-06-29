import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ChatBubble = ({ text }) => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "black",
    marginRight: 15,
    marginBottom: 10,
    alignSelf: "flex-end",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  text: {
    color: "white",
  },
});

export default ChatBubble;
