import React from "react";
import { ImageBackground, View, Image, StyleSheet } from "react-native";
import useRGB from "../hooks/useRGB";
import colors from "../Config/colors";

function HomeBackground({ children }) {
  return (
    <ImageBackground
      source={require("../assets/welcomeBackground.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.colorBackground}>{children}</View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  colorBackground: {
    flex: 1,
    backgroundColor: useRGB(colors.backgroundDark1, 0.3),
  },
});

export default HomeBackground;
