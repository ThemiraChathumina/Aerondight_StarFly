import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import colors from "../Config/colors";
import PlanetCard from "./planetCard";

const planets = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
  "pluto",
];

const PlanetList = () => {
  const handlePlanetSelect = (planet) => {
    console.log("Selected planet:", planet);
  };

  const renderPlanetCard = ({ item }) => (
    <PlanetCard planet={item} onPress={() => handlePlanetSelect(item)} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={planets}
        renderItem={renderPlanetCard}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginLeft: "10%",
  },
});

export default PlanetList;
