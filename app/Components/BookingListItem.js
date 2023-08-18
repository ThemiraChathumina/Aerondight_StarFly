import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import colors from "../Config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useRGB from "./../hooks/useRGB";

function BookingListItem({
  left,
  right,
  bgColor = useRGB(colors.backgroundDark1, 0.6),
  onPress = () => {},
}) {
  return (
    <View style={{ flexDirection: "row", margin: 5 }}>
      {right.map((item, index) => (
        <TouchableOpacity onPress={onPress}>
          <View
            key={index}
            style={{
              flexDirection: "row",
              borderColor: colors.backgroundDark1,
              backgroundColor: bgColor,
              borderWidth: 1,
              borderRadius: 100,
              borderColor: colors.white,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 10,
            }}
          >
            {left && (
              <MaterialCommunityIcons
                name={left}
                size={24}
                color={colors.white}
                style={{ paddingLeft: 10 }}
              />
            )}
            <Text
              style={{
                color: colors.white,
                fontSize: 15,
                margin: 10,
              }}
            >
              {item}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default BookingListItem;
