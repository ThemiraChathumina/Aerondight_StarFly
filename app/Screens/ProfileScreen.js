import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import ProfileImage from "../Components/ProfileImage";
import ProfileDetailsList from "../Components/ProfileDetailsList";
import PaymentMethod from "../Components/PaymentMethods";
import ImageBackgroundScreen from "../Components/ImageBackgroundScreen";

const ProfileScreen = () => {
  const [profileDetails, setProfileDetails] = useState({
    userName: "",
    citizenship: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    language: "",
  });
  const [paymentMethods, setPaymentMethod] = useState({
    cardNumber: "",
    cardType: "",
    expDate: "",
  });

  const scrollY = useRef(new Animated.Value(0)).current;
  const imageHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [200, 150],
    extrapolate: "clamp",
  });

  const onSaveProfileDetails = () => {
    console.log("Profile details saved:", profileDetails);
  };

  const onSavePaymentMethods = () => {
    console.log("Payment Method saved:", paymentMethods);
  };

  return (
    <ImageBackgroundScreen src={require("../assets/welcomeBackground.jpg")}>
      <Animated.ScrollView
        contentContainerStyle={styles.scrollViewContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <Animated.View
          style={[styles.profileImageContainer, { height: imageHeight }]}
        >
          <ProfileImage />
        </Animated.View>

        <Animated.View style={styles.container}>
          <Text style={styles.headerText}> Profile Details </Text>
          <ProfileDetailsList
            profileDetails={profileDetails}
            setProfileDetails={setProfileDetails}
          />

          <View style={styles.fixedButtonContainer}>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={onSaveProfileDetails}
            >
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>

        <Animated.View style={styles.container}>
          <Text style={styles.headerText}> Payment Methods </Text>
          <PaymentMethod
            paymentMethods={paymentMethods}
            setPaymentMethod={setPaymentMethod}
          />

          <View style={styles.fixedButtonContainer}>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={onSavePaymentMethods}
            >
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Animated.ScrollView>
    </ImageBackgroundScreen>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
    marginTop: 40,
    marginBottom: 10,
  },
  container: {
    flexGrow: 1,
    width: "80%",
    alignSelf: "center",
    marginBottom: 30,
  },
  fixedButtonContainer: {
    position: "absolute",
    bottom: 10,
    right: 20,
    zIndex: 1,
  },
  saveButton: {
    height: 50,
    backgroundColor: "#007AFF",
    borderRadius: 10,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  scrollViewContent: {
    marginBottom: 150,
  },
  profileImageContainer: {
    height: 200,
  },
});

export default ProfileScreen;
