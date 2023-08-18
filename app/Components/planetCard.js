import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../Config/colors";
import useRGB from "../hooks/useRGB";
import { LinearGradient } from "expo-linear-gradient";

const planetImages = {
  mercury: require("../assets/planets/mercury.jpg"),
  venus: require("../assets/planets/venus.jpg"),
  earth: require("../assets/planets/earth.jpg"),
  mars: require("../assets/planets/mars.jpg"),
  jupiter: require("../assets/planets/jupiter.jpg"),
  saturn: require("../assets/planets/saturn.jpg"),
  uranus: require("../assets/planets/uranus.jpg"),
  neptune: require("../assets/planets/neptune.jpg"),
  pluto: require("../assets/planets/pluto.jpg"),
};

const getPlanetName = (planet) => {
  const planet_name = planet;
  if (planet_name === "mercury") {
    return "M E R C U R Y";
  } else if (planet_name === "venus") {
    return "V E N U S";
  } else if (planet_name === "earth") {
    return "E A R T H";
  } else if (planet_name === "mars") {
    return "M A R S";
  } else if (planet_name === "jupiter") {
    return "J U P I T E R";
  } else if (planet_name === "saturn") {
    return "S A T U R N";
  } else if (planet_name === "uranus") {
    return "U R A N U S";
  } else if (planet_name === "neptune") {
    return "N E P T U N E";
  } else if (planet_name === "pluto") {
    return "P L U T O";
  }
};

const planetColors = {
  mercury: colors.lightBrown,
  venus: colors.yellow,
  earth: colors.blue1,
  mars: colors.red,
  jupiter: colors.yellow,
  saturn: colors.orange,
  uranus: colors.lightBlue1,
  neptune: colors.blue1,
  pluto: colors.purple1,
};

const PlanetCard = ({ planet, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        styles.back,
        { backgroundColor: useRGB(planetColors[planet], 0.9) },
      ]}
      onPress={onPress}
    >
      <View style={[styles.card, styles.glow]}>
        <Image style={styles.image} source={planetImages[planet]} />
        <LinearGradient
          colors={["transparent", useRGB(planetColors[planet], 0.4)]}
          style={styles.nameContainer}
        >
          <Text style={styles.name}>{getPlanetName(planet)}</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderRadius: 30,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 28, // Slightly smaller than the card's borderRadius
  },
  nameContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  name: {
    color: colors.white,
    fontSize: 40,
    fontWeight: "bold",
    position: "absolute",
    bottom: 10,
    left: 20,
  },
  back: {
    alignItems: "center",
    backgroundColor: colors.red,
    width: "100%",
    borderRadius: 30,
    shadowOffset: { width: 10, height: 24 },
    shadowColor: colors.red,
    shadowOpacity: 0.2,
    shadowRadius: 39,
    marginBottom: 10,
  },
});

export default PlanetCard;
