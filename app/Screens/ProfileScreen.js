import React, { useRef } from "react";
import { StyleSheet, Animated } from "react-native";
import ProfileImage from "../Components/ProfileImage";
import ProfileDetailsList from "../Components/ProfileDetailsList";
import PaymentMethod from "../Components/PaymentMethods";
import ImageBackgroundScreen from "../Components/ImageBackgroundScreen";

const ProfileScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const imageHeight = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [300, 220],
    extrapolate: "clamp",
  });

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
          <ProfileDetailsList />
        </Animated.View>

        <Animated.View style={styles.container}>
          <PaymentMethod />
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
