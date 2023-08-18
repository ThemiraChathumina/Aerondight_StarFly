import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import WelcomeScreen from "./Screens/WelcomeScreen";
import { Canvas } from "@react-three/fiber";
import ShipContainer from "./Components/ShipContainer";
import BookingDetailsScreen from "./Screens/BookingDetailsScreen";

const Home = () => {
  return <BookingDetailsScreen ship="StarShip" />;
};

export default Home;
