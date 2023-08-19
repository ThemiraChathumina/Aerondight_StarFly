import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChatbotLeft = ({ userName }) => {
  return (
    <View style={styles.textBox}>
      <Text style={styles.textBoxText}>
        Hi {userName ? userName : "User"}, From where would you like to end your
        journey?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    width: 196,
    height: 49,
    borderRadius: 10,
    backgroundColor: "#FDAFBB",
    marginTop: 20,
    marginLeft: 0,
    paddingLeft: 10,
    justifyContent: "center",
  },
  textBoxText: {
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "400",
    color: "#fff",
  },
});

export default ChatbotLeft;
