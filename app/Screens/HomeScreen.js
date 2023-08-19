import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import HomeBackground from "../Components/HomeBackground";
import Button from "../Components/Button";
import Promotions from "../Components/Promotion";
import homeData from "../Config/homeData";
import DetailList from "../Components/flat-list";
import { useRouter } from "expo-router";

function HomeScreen(props) {
  const router = useRouter();

  const handlePress = () => {
    router.push("/Screens/BookingDetails");
  };

  return (
    <View style={styles.container}>
      <HomeBackground>
        <View style={styles.contentContainer}>
          <View style={styles.btnContainer}>
            <Button style={styles.button} onPress={handlePress}>
              Booking
            </Button>
            <Button>Destination</Button>
          </View>
          <View style={{ height: 550, width: "100%" }}>
            <View style={{ flex: 1, marginBottom: 10, marginTop: 10 }}>
              <DetailList props={homeData} />
            </View>
            <View style={{ flex: 1 }}>
              <Promotions />
              {/* <DetailList props={homeData} /> */}
            </View>
          </View>
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
    paddingTop: 22,
    paddingBottom: 22,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default HomeScreen;
