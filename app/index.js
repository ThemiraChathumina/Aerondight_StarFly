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
import Promotions from "./Components/Promotion";
import SlideComponent from "./Components/SlideComponent";
import DetailList from "./Components/flat-list";
import homeData from "./Config/homeData";
import BookingDetails from "./Screens/BookingDetails";
import BookingChat from "./Screens/BookingChat";

const Home = () => {
  return <WelcomeScreen />;
};

export default Home;
