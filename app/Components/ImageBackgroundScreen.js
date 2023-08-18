import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Stack } from "expo-router";
import Constants from "expo-constants/src/Constants";

const Screen = ({ children, style, src }) => {
  return (
    <ImageBackground source={src} style={[styles.screen, style]}>
      <Stack.Screen options={{ headerShown: false }} />
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Screen;
