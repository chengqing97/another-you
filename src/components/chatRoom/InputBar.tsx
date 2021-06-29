import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity } from "react-native";

//import components
import Icon from "../../assets/Icon";

interface Props {
  onSend: (value: string) => void;
}

const InputBar = ({ onSend }: Props) => {
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    onSend(inputText);
    setInputText("");
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.inputBar}>
        <TextInput
          style={styles.textInput}
          value={inputText}
          onChangeText={(text) => setInputText(text)}
          onSubmitEditing={handleSend}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
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

export default InputBar;
