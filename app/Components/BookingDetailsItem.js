import React from "react";
import { View, Button, StyleSheet, Pressable, Text } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import useRGB from "../hooks/useRGB";
import colors from "../Config/colors";

const BookingDetailsItem = (props) => {
  const [pressed, sedPressed] = useState(props.expand);

  const handlePress = () => {
    sedPressed(!pressed);
  };

  return (
    <View style={styles.rectangle}>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.button}>
          <Text style={styles.text}>{props.name}</Text>
        </View>
      </TouchableOpacity>

      {pressed && props.data && (
        <FlatList
          horizontal
          data={props.data}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={styles.button}>
              <Text style={styles.text}>{item}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    width: "100%",
    backgroundColor: useRGB(colors.backgroundDark1, 0.5),
    borderColor: "black", // Border color
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    top: 60,
    left: 5,
    right: 105,

    // Border radius for rounded corners
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 40,
    margin: 10,
    width: 200,
    height: 50,
    alignContent: "center",
    alignSelf: "center",
    backgroundColor: useRGB(colors.lightPink),
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  background: {
    backgroundColor: "#1A051D",
  },
});

export default BookingDetailsItem;
