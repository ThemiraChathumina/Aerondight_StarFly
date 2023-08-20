import BookingDetails from "./BookingDetails";
import BookingChat from "./BookingChat";
import HomeScreen from "./HomeScreen";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../Config/colors";
import Logo from "../Components/Logo";
import Menu from "../Components/Menu";

const Stack = createNativeStackNavigator();

function BookingInitial(props) {
  return (
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
          headerTitle: "H O M E",
          headerLeft: () => <Logo />,
          headerRight: () => <Menu />,
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: "B O O K I N G",
          headerLeft: () => <Logo />,
          headerRight: () => <Menu />,
        }}
        name="BookingDetails"
        component={BookingDetails}
      />
      <Stack.Screen
        options={{
          headerTitle: "B O O K I N G",
          headerLeft: () => <Logo />,
          headerRight: () => <Menu />,
        }}
        name="BookingChat"
        component={BookingChat}
      />
    </Stack.Navigator>
  );
}

export default BookingInitial;
