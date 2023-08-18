import React from "react";
import { View, StyleSheet } from "react-native";
import CityList from "../Components/CityList";
import colors from "../Config/colors";
import useRGB from "../hooks/useRGB";

const CitySelectScreen = ({ planet }) => {
  return (
    <View style={styles.container}>
      <CityList planet={planet} />
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

export default CitySelectScreen;
