import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../Config/colors";
import useRGB from "../hooks/useRGB";
import ImageBackgroundScreen from "../Components/ImageBackgroundScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppTextInput from "../Components/AppTextInput";

const WelcomeScreen = () => {
  return (
    <ImageBackgroundScreen
      style={styles.imageBackground}
      src={require("../assets/welcomeBackground.jpg")}
    >
      <View style={styles.background}>
        <View style={styles.headingContainer}>
          <View style={styles.logoContainer}>
            <Image source={require("../assets/logo.png")} style={styles.logo} />
          </View>
          <Text style={styles.welcome}>W E L C O M E</Text>
        </View>
        <View style={styles.loginContainer}>
          <View style={styles.signIn}>
            <AppTextInput
              icon="account"
              placeholder="Username"
              style={{ width: 230, color: colors.white }}
            />
            <AppTextInput
              icon="lock"
              placeholder="Password"
              style={{ width: 230, color: colors.white }}
            />

            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: colors.white,
                  borderRadius: 50,
                  padding: 10,
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    color: colors.white,
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Sign in
                </Text>
              </View>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: 300,
                marginTop: 30,
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: colors.white, marginBottom: 5 }}>
                  or Sign Up using..
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    borderWidth: 1,
                    borderColor: colors.white,
                    borderRadius: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 10,
                  }}
                >
                  <TouchableOpacity onPress={() => {}}>
                    <MaterialCommunityIcons
                      name="fingerprint"
                      size={50}
                      color={colors.white}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => {}}>
                    <MaterialCommunityIcons
                      name="eye"
                      size={50}
                      color={colors.white}
                      style={{ marginLeft: 10 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: colors.white, marginBottom: 5 }}>
                  login as a guest
                </Text>
                <TouchableOpacity onPress={() => {}}>
                  <MaterialCommunityIcons
                    name="login"
                    size={70}
                    color={colors.white}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ImageBackgroundScreen>
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
    backgroundColor: useRGB(colors.backgroundDark1, 0.3),
  },
  logo: {
    width: 200,
    height: 90,
  },
  welcome: {
    color: "white",
    marginTop: 200,
    fontWeight: "bold",
    fontSize: 20,
  },
  logoContainer: {
    position: "absolute",
    backgroundColor: useRGB(colors.backgroundDark2, 0.3),
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    borderColor: colors.white,
    borderWidth: 1,
  },
  headingContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    flex: 2,
    padding: "5px",
    alignItems: "center",
    justifyContent: "center",
  },
  signIn: {
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

export default WelcomeScreen;
