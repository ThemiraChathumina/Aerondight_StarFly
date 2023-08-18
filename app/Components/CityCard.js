import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../Config/colors";
import useRGB from "../hooks/useRGB";
import { LinearGradient } from "expo-linear-gradient";
import cities from "../Config/cities";
import planetColors from "../Config/planetColors";

const CityCard = ({ planet, city, onPress }) => {
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
        <Image
          style={styles.image}
          source={cities[planet][city][0]}
        />
        <LinearGradient
          colors={["transparent", useRGB(planetColors[planet], 0.4)]}
          style={styles.nameContainer}
        >
          <Text style={styles.name}>{cities[planet][city][1]}</Text>
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

export default CityCard;
