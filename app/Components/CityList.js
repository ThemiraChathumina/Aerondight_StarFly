import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CityCard from "./CityCard";
import cities from "../Config/cities";

const CityList = ({ planet }) => {
  const handleCitySelect = (item) => {
    console.log(item);
  };

  const renderCityCard = ({ item }) => (
    <CityCard
      planet={planet}
      city={item}
      onPress={() => handleCitySelect(item)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cities[planet]["cities"]}
        renderItem={renderCityCard}
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

export default CityList;
