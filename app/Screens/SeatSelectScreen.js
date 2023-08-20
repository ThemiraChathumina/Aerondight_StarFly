import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import ShipContainer from "../Components/ShipContainer";
import ships from "../Config/ships";
import colors from "../Config/colors";
import BookingListItem from "../Components/BookingListItem";
import useRGB from "./../hooks/useRGB";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import SeatRow from "../Components/SeatRow";

function SeatsSelectScreen({ ship, bookedSeats, onConfirm, getSeats }) {
  const bookedBefore = bookedSeats;
  const [bookedAfter, setBookedAfter] = useState([]);

  console.log(bookedBefore);

  const handlePress = (number) => {
    if (bookedAfter.includes(number)) {
      setBookedAfter(bookedAfter.filter((item) => item !== number));
    } else {
      setBookedAfter([...bookedAfter, number]);
    }
  };

  const seatRows = [];
  for (let i = 0; i < 7; i++) {
    const startValue = 1 + 4 * i;
    seatRows.push(
      <SeatRow
        key={startValue}
        start={startValue}
        bookedAfter={bookedAfter}
        bookedBefore={bookedBefore}
        onPress={handlePress}
      />
    );
  }

  return (
    <View style={styles.background}>
      <Image style={styles.image} source={ships[ship].background} />
      <View style={styles.details}>
        <Text
          style={{
            color: colors.white,
            fontSize: 30,
            marginBottom: 10,
          }}
        >
          Select your seats
        </Text>
        {seatRows}
        <BookingListItem
          right={["CONFIRM"]}
          bgColor={useRGB(colors.red, 0.3)}
          onPress={() => {
            onConfirm(false);
            getSeats(bookedAfter);
          }}
        />
        {/* <TouchableOpacity onPress={() => onConfirm(false)}>
          <View style={styles.confirmBack}>
            <Text style={styles.confirm}>C O N F I R M</Text>
          </View>
        </TouchableOpacity> */}
      </View>
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
    bottom: "13%",
    alignItems: "center",
    left: "10%",
  },
  confirm: {
    color: colors.white,
    fontSize: 20,
  },
  confirmBack: {
    backgroundColor: useRGB(colors.red, 0.3),
    padding: 10,
    borderRadius: 30,
    marginBottom: 5,
    borderColor: colors.white,
    borderWidth: 2,
  },
});

export default SeatsSelectScreen;
