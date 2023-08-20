import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Image, View } from "react-native";
import colors from "../Config/colors";
import Logo from "../Components/Logo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "../Components/Menu";

// Screens

// import HomeScreen from "../Screens/HomeScreen";
// import BookingChat from '../Screens/BookingChat';
import BookingInitial from "../Screens/BookingInitial";
import BookingChat from "../Screens/BookingChat";
import ProfileScreen from "../Screens/ProfileScreen";
//import AccountScreen from './dummy_Screens/AccountSceen';
// import BookingInitial from "./../Documents/rootcode/frontend/StarFly/app/Screens/BookingInitial";
// import BookingInitial from "./../Screens/BookingInitial";

//Screen names
const homeName = "Home";
const ChatbotName = "Chatbot";
const AccountName = "Account";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const ProfileStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.backgroundDark1,
      },
      headerTitleAlign: "center",
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <Stack.Screen
      options={{
        headerTitle: "P R O F I L E",
        headerLeft: () => <Logo />,
        headerRight: () => <Menu />,
      }}
      name="AccountName"
      component={ProfileScreen}
    />
  </Stack.Navigator>
);

function BottomNavBar() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (rn === ChatbotName) {
            //iconName = (
            //<Image
            //source={require('C:/Users/suwan/Downloads/Coding/ReactNative/DoneWithIt/assets/chatboticon.png')} // Replace with your image source
            // style={{ width: size, height: size, tintColor: focused ? color : 'blue' }}
            ///>
            //);
            iconName = focused ? "logo-ionitron" : "logo-ionitron";
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (rn === AccountName) {
            iconName = focused ? "person" : "person-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          }

          // You can return any component that you like here!

          //return <iconName/>;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "blue",
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { padding: 10, height: 20 },
      }}
    >
      <Tab.Screen
        name={homeName}
        component={BookingInitial}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={ChatbotName}
        component={BookingChat}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.backgroundDark1,
          },
          headerLeft: () => (
            <View style={{ marginLeft: 16 }}>
              <Logo />
            </View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 16 }}>
              <Menu />
            </View>
          ),
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name={AccountName}
        component={ProfileStack}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.backgroundDark1,
          },
          headerLeft: () => (
            <View style={{ marginLeft: 16 }}>
              <Logo />
            </View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 16 }}>
              <Menu />
            </View>
          ),
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavBar;
