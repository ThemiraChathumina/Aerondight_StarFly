import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

function Menu({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons name="menu" size={40} color="white" />
    </TouchableOpacity>
  );
}

export default Menu;
