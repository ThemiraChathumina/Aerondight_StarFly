import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import WelcomeScreen from "./Screens/WelcomeScreen";
import { Canvas } from "@react-three/fiber";
import ShipContainer from "./Components/ShipContainer";
import BookingDetailsScreen from "./Screens/BookingDetailsScreen";
import SeatSelectScreen from "./Screens/SeatSelectScreen";
import Button from "./Components/Button";
import HomeScreen from "./Screens/HomeScreen";
import ChatbotLeft from "./Components/ChatbotLeft";
import { OptionRight } from "./Components/OptionRight";

const Home = () => {
  return <WelcomeScreen />;
};

export default Home;
