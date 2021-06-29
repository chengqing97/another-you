import React, { useRef, useState } from "react";
import { StyleSheet, FlatList, Text } from "react-native";

//import components
import Header from "../shared/Header";
import Layout from "../shared/Layout";
import InputBar from "./InputBar";
import ChatBubble from "./ChatBubble";

const ChatRoomPage = () => {
  const flatListRef = useRef();
  const [chats, setChats] = useState(chatsData);

  const handleSend = (text: string) => {
    setChats([...chats, { id: chats.length, text: text }]);
  };

  return (
    <Layout>
      <Header />
      <FlatList
        //ref={flatListRef}
        style={styles.flatList}
        contentContainerStyle={styles.flatListContentContainer}
        data={chats}
        inverted={false}
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
      <InputBar onSend={handleSend} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  flatList: {},
  flatListContentContainer: {
    backgroundColor: "rgb(243, 243, 243)",
    justifyContent: "flex-end",
    flex: 1,
  },
});

export default ChatRoomPage;

const chatsData = [
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
