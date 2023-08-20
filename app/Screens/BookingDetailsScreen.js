import React from "react";
import { View, StyleSheet, Image, Text, Modal } from "react-native";
import ShipContainer from "../Components/ShipContainer";
import ships from "../Config/ships";
import colors from "../Config/colors";
import BookingListItem from "../Components/BookingListItem";
import useRGB from "./../hooks/useRGB";
import { useState } from "react";
import SeatsSelectScreen from "./SeatSelectScreen";

function BookingDetailsScreen({
  id = 1,
  booked = [0],
  ship,
  company,
  from,
  to,
  stops,
  date,
  time,
  getSeats,
  getClass,
  onChange,
  onConfirm,
}) {
  const [selected, setSelected] = useState("1st Class");
  const [seats, setSeats] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const handleSelect = (item) => {
    setSelected(item);
  };

  const handleSeatSelect = (seats) => {
    setSeats(seats);
  };

  const handleConfirm = () => {
    onConfirm(false);
    getClass(selected);
    getSeats(seats);
  };

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
          {company}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <BookingListItem left="location-enter" right={[from]} />

          <BookingListItem left="location-exit" right={[to]} />
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
        <BookingListItem left="calendar-month" right={[date]} />
        <BookingListItem left="clock-outline" right={[time]} />
        <View style={{ alignItems: "center", marginTop: 5, marginBottom: 5 }}>
          <Text style={{ fontSize: 20, marginBottom: 5, color: colors.white }}>
            Select Class
          </Text>
          <BookingListItem
            right={["1st Class", "2nd Class", "3rd Class"]}
            onPress={handleSelect}
            selected={selected}
          />
        </View>
        <BookingListItem
          left="seat"
          right={["Select seats"]}
          onSelected={setIsVisible}
        />
        <Modal visible={isVisible} animationType="fade">
          <SeatsSelectScreen
            ship="StarShip"
            bookedSeats={[1, 2, 3]}
            onConfirm={setIsVisible}
            getSeats={handleSeatSelect}
          />
        </Modal>
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
            onPress={handleConfirm}
          />
          <BookingListItem
            right={["CHANGE"]}
            bgColor={useRGB(colors.red, 0.3)}
            onPress={onChange}
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
