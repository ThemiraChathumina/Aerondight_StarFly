import React from "react";
import { View, StyleSheet } from "react-native";
import ImageBackgroundScreen from "../Components/ImageBackgroundScreen";
import PlanetList from "../Components/PlanetList";
import colors from "../Config/colors";
import useRGB from "../hooks/useRGB";

const PlanetSelectScreen = () => {
  return (
    <View style={styles.container}>
      <PlanetList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: useRGB(colors.backgroundDark1, 0.9),
    blurRadius: 20,
  },
});

export default PlanetSelectScreen;
