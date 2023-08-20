import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";
import WelcomeScreen from "./Screens/WelcomeScreen";
import { Canvas } from "@react-three/fiber";
import ShipContainer from "./Components/ShipContainer";
import BookingDetailsScreen from "./Screens/BookingDetailsScreen";
import SeatSelectScreen from "./Screens/SeatSelectScreen";
// import Button from "./Components/Button";
import HomeScreen from "./Screens/HomeScreen";
import ChatbotLeft from "./Components/ChatbotLeft";
import { OptionRight } from "./Components/OptionRight";
import Promotions from "./Components/Promotion";
import SlideComponent from "./Components/SlideComponent";
import DetailList from "./Components/flat-list";
import homeData from "./Config/homeData";
import BookingDetails from "./Screens/BookingDetails";
import BookingChat from "./Screens/BookingChat";
import { TouchableOpacity } from "react-native-gesture-handler";
import Payment from "./Components/Payment";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getData, postData } from "./Config/api";
import BookingInitial from "./Screens/BookingInitial";
import BottomNavBar from "./Components/BottomNavBar";
import ProfileScreen from "./Screens/ProfileScreen";
import PaymentScreen from "./Components/Payment";

const Home = () => {
  const [data, setData] = useState([]);

  const [response, setResponse] = useState("");

  const handlePost = async () => {
    const apiUrl = "http://192.168.1.100:8000/payment_methods/";
    const dataToPost = {
      // Your data object to post
      card_expiry: "12122100",
      card_number: "6787",
      payment_id: 9,
      user_id: 1,
    };

    try {
      const responseData = await postData(apiUrl, dataToPost);
      setResponse(JSON.stringify(responseData));
    } catch (error) {
      // Handle error if needed
    }
  };

  useEffect(() => {
    const fetchAndSetData = async () => {
      const apiUrl = "http://192.168.1.100:8000/payment_methods/";
      try {
        const fetchedData = await getData(apiUrl);
        console.log(fetchedData);
        setData(fetchedData);
      } catch (error) {
        // Handle error if needed
      }
    };

    fetchAndSetData();
  }, []);

  console.log(data);

  const Tab = createBottomTabNavigator();

  return (
    // <BookingDetailsScreen
    //   ship={"StarShip"}
    //   company="SpaceX"
    //   date={"2023-03-03"}
    //   time="65"
    //   from="earth"
    //   to="mars"
    // />
    // <HomeScreen />
    // <Button onPress={() => console.log("daw")}>
    // <View>
    //   <Button title="Post Data" onPress={handlePost} />
    //   <Text>{response}</Text>
    // </View>
    // <BookingChat />
    // </Button>
    // <Payment />
    // <SlideComponent />
    <WelcomeScreen />
    // <Tab.Navigator screenOptions={{ headerShown: false }}>
    //   <Tab.Screen name="Home" component={BookingInitial} />
    //   <Tab.Screen name="Settings" component={BookingChat} />
    // </Tab.Navigator>
  );
};

export default Home;
