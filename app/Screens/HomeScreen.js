import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import HomeBackground from "../Components/HomeBackground";
import Button from "../Components/Button";
import Promotions from "../Components/Promotion";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <HomeBackground>
        <View style={styles.contentContainer}>
          <View style={styles.btnContainer}>
            <Button style={styles.button}>Booking</Button>
            <Button>Destination</Button>
          </View>
          <Promotions />
        </View>
      </HomeBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  btnContainer: {
    marginTop: 87,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default HomeScreen;
