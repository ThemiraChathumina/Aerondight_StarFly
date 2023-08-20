import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PaymentConfirmationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.confirmationText}>Payment Successful!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  confirmationText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default PaymentConfirmationScreen;