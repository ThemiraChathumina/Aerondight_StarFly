import { Stack } from "expo-router";
import colors from "./Config/colors";
import Logo from "./Components/Logo";
import Menu from "./Components/Menu";

const Layout = () => {
  return (
    <Stack
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
        name="Screens/HomeScreen"
        options={{
          headerTitle: "H O M E",
          headerLeft: () => <Logo />,
          headerRight: () => <Menu />,
        }}
      />
      <Stack.Screen
        name="Screens/BookingDetails"
        options={{
          headerTitle: "B O O K I N G",
          headerLeft: () => <Logo />,
          headerRight: () => <Menu />,
        }}
      />
      <Stack.Screen
        name="Screens/BookingChat"
        options={{
          headerTitle: "B O O K I N G",
          headerLeft: () => <Logo />,
          headerRight: () => <Menu />,
        }}
      />
    </Stack>
  );
};

export default Layout;
