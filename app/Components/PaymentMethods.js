import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
//import { AsyncStorage } from "react-native";
import colors from "../Config/colors";
import useRGB from "../hooks/useRGB";
import AppTextInput from "../Components/AppTextInput";
import personalDetails from "../Config/personalDetails";
import AsyncStorage from "@react-native-async-storage/async-storage";
const PaymentMethods = () => {
  const [cardNumber, setCardNumber] = useState(
    personalDetails.AccDetails.cardNumber
  );
  const [cardType, setCardType] = useState(personalDetails.AccDetails.cardType);
  const [expDate, setExpDate] = useState(personalDetails.AccDetails.expDate);

  const onSave = async () => {
    const updatedPersonalDetails = {
      ...personalDetails,
      AccDetails: {
        cardNumber,
        cardType,
        expDate,
      },
    };

    try {
      await AsyncStorage.setItem(
        "personalDetails",
        JSON.stringify(updatedPersonalDetails)
      );
      console.log("Payment Info saved:", updatedPersonalDetails);
      personalDetails.AccDetails.cardNumber = cardNumber;
      personalDetails.AccDetails.cardType = cardType;
      personalDetails.AccDetails.expDate = expDate;
    } catch (error) {
      console.error("Error saving payment info:", error);
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Payment Methods</Text>
      </View>
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <AppTextInput
            icon="calculator"
            placeholder={personalDetails.AccDetails.cardNumber}
            value={cardNumber}
            onChangeText={setCardNumber}
            style={{ width: "100%", color: colors.white }}
          />
          <AppTextInput
            icon="credit-card"
            placeholder={personalDetails.AccDetails.cardType}
            value={cardType}
            onChangeText={setCardType}
            style={{ width: "100%", color: colors.white }}
          />
          <AppTextInput
            icon="calendar"
            placeholder={personalDetails.AccDetails.expDate}
            value={expDate}
            onChangeText={setExpDate}
            style={{ width: "100%", color: colors.white }}
          />
          <TouchableOpacity onPress={onSave}>
            <View
              style={{
                borderWidth: 1,
                width: 100,
                borderColor: colors.white,
                borderRadius: 50,
                padding: 10,
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  color: colors.white,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Save
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: useRGB(colors.backgroundDark1, 0),
  },

  heading: {
    color: "white",
    marginTop: 0,
    fontWeight: "bold",
    fontSize: 20,
  },
  headingContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  outerContainer: {
    flex: 2,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: useRGB(colors.backgroundDark1, 0.6),
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    paddingBottom: 50,
    paddingTop: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.white,
  },
});

export default PaymentMethods;
