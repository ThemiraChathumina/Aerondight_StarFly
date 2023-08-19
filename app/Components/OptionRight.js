import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export const OptionRight = ({ label, onClick }) => {
  return (
    <TouchableOpacity style={styles.option} onPress={onClick}>
      {/* <Image  
            source={require('./download.jpeg')}
            style={styles.searchIcon} /> */}
      <Text style={styles.optionText}> {label} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    width: 243,
    height: 33,
    borderRadius: 10,
    backgroundColor: "#FBE4E8",
    marginBottom: 10,
    marginRight: 0,
    justifyContent: "center",
    alignSelf: "Right",
  },
  optionText: {
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "900",
    color: "#333",
    alignSelf: "center",
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
});
