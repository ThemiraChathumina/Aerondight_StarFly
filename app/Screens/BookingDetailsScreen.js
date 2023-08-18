import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import ShipContainer from "../Components/ShipContainer";
import ships from "../Config/ships";
import colors from "../Config/colors";
import BookingListItem from "../Components/BookingListItem";
import useRGB from "./../hooks/useRGB";

function BookingDetailsScreen({
  ship,
  company,
  from,
  to,
  stops,
  date,
  time,
  classType,
}) {
  return (
    <View style={styles.background}>
      <Image style={styles.image} source={ships[ship].background} />
      <View style={styles.details}>
        <Text
          style={{
            color: colors.white,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          {ship.toUpperCase().split("").join(" ")}
        </Text>
        <Text
          style={{
            color: colors.white,
            fontSize: 20,
            marginBottom: 10,
          }}
        >
          SpaceX
        </Text>
        <View style={{ flexDirection: "row" }}>
          <BookingListItem left="location-enter" right={["Earth"]} />

          <BookingListItem left="location-exit" right={["Jupiter"]} />
        </View>

        {stops && (
          <Text
            style={{
              color: colors.white,
              fontSize: 20,
              marginTop: 10,
            }}
          >
            Stops
          </Text>
        )}
        <BookingListItem left="calendar-month" right={["2100/05/10"]} />
        <BookingListItem left="clock-outline" right={["7:30 pm"]} />
        <View style={{ alignItems: "center", marginTop: 5, marginBottom: 5 }}>
          <Text style={{ fontSize: 20, marginBottom: 5, color: colors.white }}>
            Select Class
          </Text>
          <BookingListItem right={["1st Class", "2nd Class", "3rd Class"]} />
        </View>
        <BookingListItem left="seat" right={["Select seats"]} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          <BookingListItem
            right={["CONFIRM"]}
            bgColor={useRGB(colors.red, 0.3)}
          />
          <BookingListItem
            right={["CHANGE"]}
            bgColor={useRGB(colors.red, 0.3)}
          />
        </View>
      </View>
      <ShipContainer ship={ship} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  background: {
    width: "100%",
    height: "100%",
  },
  details: {
    width: "80%",
    backgroundColor: useRGB(colors.backgroundDark1, 0.5),
    borderRadius: 40,
    borderColor: colors.white,
    borderWidth: 1,
    padding: 10,
    position: "absolute",
    bottom: "7%",
    alignItems: "center",
    left: "10%",
  },
});

export default BookingDetailsScreen;
