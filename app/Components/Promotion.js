import React from "react";
import { Text, View, Image, FlatList, StyleSheet } from "react-native";
import PromoItem from "./PromoItem";
import useRGB from "../hooks/useRGB";
import colors from "../Config/colors";

const data = [
  {
    id: "jupyter",
    name: "Jupyter",
    url: "https://www.printsome.com/blog/wp-content/uploads/interplanetary-tourism-jupiter.jpg",
  },
  {
    id: "venus",
    name: "Venus",
    url: "https://www.printsome.com/blog/wp-content/uploads/interplanetary-tourism-venus.jpg",
  },
  {
    id: "mars",
    name: "Mars",
    url: "https://www.printsome.com/blog/wp-content/uploads/interplanetary-tourism-mars.jpg",
  },
];

const Promotions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.HeadingContainer}>
        <Text style={styles.promotionsText}>P R O M O T I O N S</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <PromoItem name={item.name} url={item.url} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  promotionsText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    color: "white",
  },
  HeadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: useRGB(colors.backgroundDark1, 0.5),
  },
  itemContainer: {
    justifyContent: "center",
    backgroundColor: useRGB(colors.backgroundDark1, 0.5),
    marginBottom: 10,
  },
});

export default Promotions;
