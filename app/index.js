import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import WelcomeScreen from "./Screens/WelcomeScreen";
import { Canvas } from "@react-three/fiber";
import ShipContainer from "./Components/ShipContainer";
import BookingDetailsScreen from "./Screens/BookingDetailsScreen";

const Home = () => {
  return (
    <BookingDetailsScreen
      ship="StarShip"
      company="SpaceX"
      date="10/05/2099"
      time="7:30 pm"
      from="Earth"
      to="Jupiter"
    />
  );
};

export default Home;
