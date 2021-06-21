import React from "react";
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity } from "react-native";

//import components
import Icon from "../../assets/Icon";

const InputBar = () => {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.inputBar}>
        <TextInput style={styles.textInput} />
        <TouchableOpacity style={styles.sendButton}>
          <Icon name="send" color="white" size={18} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
  },
  inputBar: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 15,
    paddingLeft: 15,
    width: "100%",
  },
  textInput: {
    flex: 1,
    marginRight: 4,
    height: 34,
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: "lightgrey",
  },
  sendButton: {
    width: 50,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(50,50,50)",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  sendButtonText: {
    color: "white",
  },
});

// .sendButton {
//   width: 50px;
//   height: 36px;
//   padding: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: rgb(50, 50, 50);
//   border-width: 0;
//   border-radius: 0 5px 5px 0;
// }

// .sendButtonText {
//   color: white;
// }

export default InputBar;
