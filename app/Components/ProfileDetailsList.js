import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import colors from "../Config/colors";
import useRGB from "../hooks/useRGB";
import AppTextInput from "../Components/AppTextInput";
import personalDetails from "../Config/personalDetails";

const ProfileDetailsList = () => {
  const [username, setUsername] = useState(personalDetails.User.userName);
  const [citizenship, setCitizenship] = useState(
    personalDetails.User.citizenship
  );
  const [email, setEmail] = useState(personalDetails.User.email);
  const [phone, setPhone] = useState(personalDetails.User.phone);
  const [dateOfBirth, setDateOfBirth] = useState(
    personalDetails.User.dateOfBirth
  );
  const [gender, setGender] = useState(personalDetails.User.gender);
  const [language, setLanguage] = useState(personalDetails.User.language);

  const onSave = () => {
    const details = {
      username,
      citizenship,
      email,
      phone,
      dateOfBirth,
      gender,
      language,
    };
    console.log("Profile Details saved:", details);
  };

  return (
    <View style={styles.background}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Profile Details</Text>
      </View>
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <AppTextInput
            icon="account"
            placeholder={personalDetails.User.userName}
            value={username}
            onChangeText={setUsername}
            style={{ width: "100%", color: colors.white }}
          />
          <AppTextInput
            icon="card-account-details"
            placeholder={personalDetails.User.citizenship}
            value={citizenship}
            onChangeText={setCitizenship}
            style={{ width: "100%", color: colors.white }}
          />
          <AppTextInput
            icon="email"
            placeholder={personalDetails.User.email}
            value={email}
            onChangeText={setEmail}
            style={{ width: "100%", color: colors.white }}
          />
          <AppTextInput
            icon="phone"
            placeholder={personalDetails.User.phone}
            value={phone}
            onChangeText={setPhone}
            style={{ width: "100%", color: colors.white }}
          />
          <AppTextInput
            icon="calendar"
            placeholder={personalDetails.User.dateOfBirth}
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
            style={{ width: "100%", color: colors.white }}
          />
          <AppTextInput
            icon="gender-male-female"
            placeholder={personalDetails.User.gender}
            value={gender}
            onChangeText={setGender}
            style={{ width: "100%", color: colors.white }}
          />
          <AppTextInput
            icon="earth"
            placeholder={personalDetails.User.language}
            value={language}
            onChangeText={setLanguage}
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

export default ProfileDetailsList;
