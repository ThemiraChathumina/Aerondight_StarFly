import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const PaymentMethods = ({ paymentMethods, setPaymentMethod }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Card number"
          value={paymentMethods.cardNumber}
          onChangeText={(text) =>
            setPaymentMethod((prevDetails) => ({
              ...prevDetails,
              cardNumber: text,
            }))
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Card Type: Master|Visa"
          value={paymentMethods.cardType}
          onChangeText={(text) =>
            setPaymentMethod((prevDetails) => ({
              ...prevDetails,
              cardType: text,
            }))
          }
        />
        <TextInput
          style={styles.input}
          placeholder="EXP Date: DD MM YYYY"
          value={paymentMethods.expDate}
          onChangeText={(text) =>
            setPaymentMethod((prevDetails) => ({
              ...prevDetails,
              expDate: text,
            }))
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
  },
  content: {
    width: "80%",
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default PaymentMethods;
