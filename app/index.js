import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import PlanetCard from "./Components/planetCard";
import Screen from "./Components/Screen";
import WelcomeScreen from "./Screens/WelcomeScreen";
import PlanetSelectScreen from "./Screens/PlanetSelectScreen";
import PlanetList from "./Components/PlanetList";
import colors from "./Config/colors";
import CityCard from "./Components/CityCard";
import CitySelectScreen from "./Screens/CitySelectScreen";
import CityList from "./Components/CityList";

const Home = () => {
  return (
    <>
      <CitySelectScreen planet="mercury" />
    </>
  );
};

export default Home;
