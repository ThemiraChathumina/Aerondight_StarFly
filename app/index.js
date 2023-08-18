import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import WelcomeScreen from "./Screens/WelcomeScreen";
import { Canvas } from "@react-three/fiber";
import ShipContainer from "./Components/ShipContainer";
import BookingDetailsScreen from "./Screens/BookingDetailsScreen";
import SeatSelectScreen from "./Screens/SeatSelectScreen";

const Home = () => {
  return <SeatSelectScreen ship={"StarShip"} bookedSeats={[1, 2, 3]} />;
};

export default Home;
