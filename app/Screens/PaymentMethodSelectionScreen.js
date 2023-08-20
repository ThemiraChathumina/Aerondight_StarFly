import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const PaymentMethodSelectionScreen = ({ navigation }) => {
  const handlePaymentMethodSelect = () => {
    navigation.navigate("PaymentConfirmation");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Payment Method</Text>

      <TouchableOpacity
        style={styles.paymentMethod}
        onPress={handlePaymentMethodSelect}
      >
        <Text style={styles.paymentMethodName}>Credit Card</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.paymentMethod}
        onPress={handlePaymentMethodSelect}
      >
        <Text style={styles.paymentMethodName}>PayPal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  paymentMethod: {
    backgroundColor: "#f0f0f0",
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
  },
  paymentMethodName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PaymentMethodSelectionScreen;