import React from "react";
import { Text, View, Image, ScrollView, StyleSheet } from "react-native";
import colors from "../Config/colors";

const PromoItem = (props) => {
  return (
    <View>
      <Text style={styles.promotionsText}>{props.name}</Text>
      <Image
        source={{
          uri: props.url,
        }}
        style={styles.curvedImage}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  promotionsText: {
    fontSize: 24, // Adjust the font size as needed
    fontWeight: "bold",
    padding: 10,
    color: colors.white,
  },
  curvedImage: {
    width: 380,
    height: 210,
    borderRadius: 50,
    // Positions the image absolutely within its parent
    // Adjust these values to change the position
    left: 5,
    // Half of the width/height to make it circular
  },
});

export default PromoItem;
