import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  Pressable,
  ImageBackground,
} from "react-native";
import BookingDetailsItem from "../Components/BookingDetailsItem";
import useRGB from "../hooks/useRGB";
import colors from "../Config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

const data = ["aaaa", "bbbb"];

const BookingDetails = () => {
  const router = useRouter();

  const handlePress = () => {
    router.push("/Screens/BookingChat");
  };

  return (
    <ImageBackground source={require("../assets/welcomeBackground.jpg")}>
      <View
        style={{
          height: "100%",
          backgroundColor: useRGB(colors.backgroundDark1, 0.5),
          alignItems: "center",
        }}
      >
        <View style={{ width: "100%" }}>
          <BookingDetailsItem name="Booking History" data={data} />
          <BookingDetailsItem
            name="Current Bookings"
            data={data}
            expand={true}
          />
        </View>
        <View style={{ marginTop: 270 }}>
          <Pressable onPress={handlePress}>
            <View
              style={{
                backgroundColor: colors.lightPink,
                padding: 20,
                borderRadius: 40,
              }}
            >
              <Text style={{ color: colors.white, fontSize: 20 }}>
                New Booking
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  promotionsText: {
    fontSize: 30, // Adjust the font size as needed
    fontWeight: "bold",
    padding: 2,
    color: "white",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 40,
    elevation: 3,
    width: 300,
    height: 60,
    alignContent: "center",
    alignSelf: "center",
    backgroundColor: "red",
    top: 550,
  },
  text: {
    fontSize: 21,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default BookingDetails;
