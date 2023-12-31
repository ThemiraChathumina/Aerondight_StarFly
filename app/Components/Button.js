import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import colors from "../Config/colors";
import useRGB from "../hooks/useRGB";
import { TouchableOpacity } from "react-native-gesture-handler";

const Button = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Pressable style={styles.btnStyle} onPress={onPress}>
        <Text style={styles.textStyle}>{children}</Text>
      </Pressable>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    padding: 15,
    backgroundColor: useRGB(colors.lightPink),
    borderRadius: 36,
    marginHorizontal: 10,
    width: 156,
    height: 72,
    flexShrink: 0,
  },
  textStyle: {
    marginTop: 10,
    color: colors.white,
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: 24,
    flexShrink: 0,
    textAlign: "center",
  },
});

export default Button;
