import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PaymentMethodSelectionScreen from "../Screens/PaymentMethodSelectionScreen";
import PaymentConfirmationScreen from "../Screens/PaymentConfirmationScreen";

const Stack = createStackNavigator();

const PaymentPage = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="PaymentMethodSelection">
      <Stack.Screen
        name="PaymentMethodSelection"
        options={{ headerShown: false }}
      >
        {(props) => (
          <PaymentMethodSelectionScreen
            {...props}
            navigation={props.navigation}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="PaymentConfirmation" options={{ headerShown: false }}>
        {(props) => (
          <PaymentConfirmationScreen {...props} navigation={props.navigation} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default PaymentPage;
