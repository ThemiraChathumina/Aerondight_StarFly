import React, { useState, Component } from "react";
import {
  View,
  Pressable,
  StyleSheet,
  Text,
  ScrollView,
  Image,
} from "react-native";

//===============================================================================================================================
const Select = (props) => {
  return (
    <Pressable style={SelectStyles.container}>
      <Text style={SelectStyles.text}>{props.selection} </Text>
    </Pressable>
  );
};

const SelectStyles = StyleSheet.create({
  container1: {
    flexDirection: "row", // Horizontal layout
    alignItems: "center",
    textAlign: "center",
    alignContent: "center",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    top: 30,
    left: 200,
    right: 100,
    width: 200,
    height: 40, // Align items vertically
    backgroundColor: "lightgrey",
  },
  container2: {
    flexDirection: "row", // Horizontal layout
    alignItems: "center",
    textAlign: "center",
    alignContent: "center",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    top: 30,
    left: 150,
    right: 50,
    width: 300,
    height: 40, // Align items vertically
    backgroundColor: "lightgrey",
  },
  text: {
    //fontSize: 14,
    lineHeight: 21,

    letterSpacing: 0.25,
    color: "black",
  },
});
//=========================================================================================================

const HeadingStyle = StyleSheet.create({
  container: {
    flexDirection: "row", // Horizontal layout
    alignItems: "center",
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    top: 50,
    left: 0,
    right: 100,
    alignSelf: "center",
    alignContent: "center",
    textAlign: "center",
    width: 250,
    height: 40, // Align items vertically
    backgroundColor: "lightgrey",
    fontSize: 20,
    fontWeight: "bold",
  },
});

//==========================================================================================================
const ChatQuestion = (props) => {
  return (
    <View style={ChatQStyles.button1}>
      <Text style={ChatQStyles.text1}>{props.Q}</Text>
    </View>
  );
};

//=========================================================================================================
const ShortDetails = (props) => {
  return (
    <>
      <View style={styles4.container}>
        <Text style={styles4.text}>
          From : .{"\n"}
          Destinations:
          {"\n"}
          Date/Time:
        </Text>
      </View>
    </>
  );
};

const styles4 = StyleSheet.create({
  container: {
    flexDirection: "row", // Horizontal layout
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    top: 120,
    left: 0,
    right: 100,
    width: 250,
    height: 100,
    backgroundColor: "lightgrey",
  },
  text: {
    fontSize: 14,
    lineHeight: 21,

    letterSpacing: 0.25,
    color: "black",
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
});
const styles3 = StyleSheet.create({
  button: {
    alignItems: "left",
    justifyContent: "center",
    paddingVertical: 0,
    paddingHorizontal: 10,
    borderRadius: 30,
    top: 75,
    left: 0,
    right: 100,
    width: 200,
    height: 60,
    alignContent: "center",

    backgroundColor: "pink",
  },
  text: {
    fontSize: 13,
    lineHeight: 15,
    color: "black",
  },
  background: {
    backgroundColor: "#1A051D",
    height: 1500,
  },
});
//================================================================================================
const ChatQStyles = StyleSheet.create({
  button1: {
    alignItems: "left",
    justifyContent: "center",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 20,
    top: 30,
    left: 0,
    right: 100,
    width: 200,
    height: 50,
    alignContent: "center",

    backgroundColor: "#FF69B4",
  },
  text1: {
    fontSize: 14,
    lineHeight: 21,

    letterSpacing: 0.25,
    color: "black",
  },
  background1: {
    backgroundColor: "pink",
  },
});

//===============================================================================================

const BoxStyles = StyleSheet.create({
  container: {
    flexDirection: "row", // Arrange components horizontally
    justifyContent: "space-between", // Space them evenly along the row
    alignItems: "center", // Center components vertically
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 70,
    backgroundColor: "pink",
  },
  leftSide: {
    flex: 1, // Take up half of the row's space
    marginRight: 2,
  },
  rightSide: {
    flex: 1, // Take up half of the row's space
    marginLeft: 2,
  },
  leftTextHeader: {
    textAlign: "left",
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  leftText: {
    textAlign: "left",
    fontSize: 16,

    color: "#333",
  },
  rightTextHeader: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  rightText: {
    textAlign: "center",
    fontSize: 16,

    color: "#333",
  },
});

//==========================================================================================================
const PaymentScreen = (props) => {
  const [showSecondButton, setShowSecondButton] = useState(false);
  const [showThirdButton, setShowThirdButton] = useState(false);
  const [showFourthButton, setShowFourthButton] = useState(false);
  const [showFifthButton, setShowFifthButton] = useState(false);

  const handleFirstButtonPress = () => {
    setShowSecondButton(true);
  };

  const handleSecondButtonPress = () => {
    setShowThirdButton(true);
  };

  const handleThirdButtonPress = () => {
    setShowFourthButton(true);
  };
  const handleFourthButtonPress = () => {
    setShowFifthButton(true);
  };

  const handleNamePress = (name) => {
    // Handle the press event for the name
    console.log(`Pressed on ${name}`);
  };

  const renderNameCell = (name) => (
    <Pressable onPress={() => handleNamePress(name)}>
      <Text style={TableStyles.cellText}>{name}</Text>
    </Pressable>
  );

  return (
    <>
      <View style={styles3.background}>
        <Text style={HeadingStyle.container}> Payment</Text>
        <View style={BoxStyles.container}>
          <View style={BoxStyles.leftSide}>
            <Text style={BoxStyles.leftTextHeader}>Flight Details</Text>
            <Text style={BoxStyles.leftText}>Flight Name: </Text>
            <Text style={BoxStyles.leftText}>From: </Text>
            <Text style={BoxStyles.leftText}>To: </Text>
            <Text style={BoxStyles.leftText}>Flight date: </Text>
          </View>
          <View style={BoxStyles.rightSide}>
            <Text style={BoxStyles.rightTextHeader}>Price</Text>
            <Text style={BoxStyles.rightText}>Flight Price : $... </Text>
            <Text style={BoxStyles.rightText}>Tax: .....</Text>
            <Text style={BoxStyles.rightText}>Total Price: .....</Text>
          </View>
        </View>
        <ChatQuestion Q="Please Select your payment option" />

        <Text> </Text>
        <Pressable
          style={SelectStyles.container1}
          onPress={handleFirstButtonPress}
        >
          <Text style={SelectStyles.text}>Enter Details</Text>
        </Pressable>

        {showSecondButton && (
          <>
            <View>
              <Text></Text>
              <ChatQuestion Q="Please confirm your payments" />
              <Text> </Text>
              <Text></Text>
              <Pressable
                onPress={handleSecondButtonPress}
                style={SelectStyles.container2}
              >
                <Text style={SelectStyles.text}>
                  Pay $xxx using payment method{" "}
                </Text>
              </Pressable>
            </View>
          </>
        )}

        {showThirdButton && (
          <>
            <Text></Text>
            <Text></Text>

            <ChatQuestion Q="Payment is successfull! Have a nice journey !!" />

            <Text></Text>
            <Pressable
              onPress={handleThirdButtonPress}
              style={SelectStyles.container1}
            >
              <Text style={SelectStyles.text}>Make another Booking </Text>
            </Pressable>

            <Text></Text>

            <Pressable
              onPress={handleThirdButtonPress}
              style={SelectStyles.container1}
            >
              <Text style={SelectStyles.text}>Add to Favourites </Text>
            </Pressable>
          </>
        )}
      </View>
    </>
  );
};

export default PaymentScreen;
