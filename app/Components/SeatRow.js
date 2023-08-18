import React from "react";
import { View } from "react-native";
import BookingListItem from "./BookingListItem";
import colors from "../Config/colors";
import useRGB from "./../hooks/useRGB";

const getColor = (bookedBefore, bookedAfter, number) => {
  const color = useRGB(colors.backgroundDark1, 0.6);

  if (bookedBefore.includes(number)) {
    return useRGB(colors.red, 0.6);
  } else if (bookedAfter.includes(number)) {
    return useRGB(colors.blue1, 0.6);
  }

  return color;
};

function SeatRow({ start, bookedBefore, bookedAfter, onPress }) {
  const renderBookingListItem = (offset) => (
    <BookingListItem
      right={[`${start + offset < 10 ? "0" : ""}${start + offset}`]}
      bgColor={getColor(bookedBefore, bookedAfter, start + offset)}
      onPress={() => onPress(start + offset)}
    />
  );

  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        margin: 5,
        paddingRight: 10,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          margin: 5,
          flex: 1,
          justifyContent: "center",
        }}
      >
        {renderBookingListItem(0)}
        {renderBookingListItem(1)}
      </View>
      <View
        style={{
          flexDirection: "row",
          margin: 5,
          flex: 1,
          justifyContent: "center",
        }}
      >
        {renderBookingListItem(2)}
        {renderBookingListItem(3)}
      </View>
    </View>
  );
}

export default SeatRow;
