import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function Logo(props) {
  return (
    <TouchableOpacity>
      <Image
        source={require("../assets/logo_final.png")}
        style={{ width: 40, height: 40 }}
      />
    </TouchableOpacity>
  );
}

export default Logo;
