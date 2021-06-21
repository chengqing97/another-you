import React, { useRef } from "react";
import { StyleSheet, FlatList, Text } from "react-native";

//import components
import Header from "../shared/Header";
import Layout from "../shared/Layout";
import InputBar from "./InputBar";
import ChatBubble from "./ChatBubble";

const ChatRoomPage = () => {
  const flatListRef = useRef();

  const handleSend = (text) => {};

  return (
    <Layout>
      <Header />
      <FlatList
        //ref={flatListRef}
        style={styles.flatList}
        data={chats}
        inverted
        showsVerticalScrollIndicator={true}
        keyExtractor={(item, index) => index.toString()}
        initialNumToRender={20}
        ListEmptyComponent={<Text>No message yet.</Text>}
        onEndReachedThreshold={4}
        onEndReached={() => console.log("end reached")}
        renderItem={({ item, index }) => {
          return <ChatBubble text={item.text} />;
        }}
      />
      <InputBar onSend={(text) => handleSend(text)} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  flatList: {
    backgroundColor: "rgb(243, 243, 243)",
  },
});

export default ChatRoomPage;

const chats = [
  {
    id: 1,
    text: "hello",
  },
  {
    id: 2,
    text: "hello0",
  },
  {
    id: 3,
    text: "hello00",
  },
];
