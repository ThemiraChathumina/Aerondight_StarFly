import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const ProfileDetailsList = ({ profileDetails, setProfileDetails }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="User Name"
          value={profileDetails.userName}
          onChangeText={(text) =>
            setProfileDetails((prevDetails) => ({
              ...prevDetails,
              userName: text,
            }))
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Citizenship"
          value={profileDetails.citizenship}
          onChangeText={(text) =>
            setProfileDetails((prevDetails) => ({
              ...prevDetails,
              citizenship: text,
            }))
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={profileDetails.email}
          onChangeText={(text) =>
            setProfileDetails((prevDetails) => ({
              ...prevDetails,
              email: text,
            }))
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={profileDetails.phone}
          onChangeText={(text) =>
            setProfileDetails((prevDetails) => ({
              ...prevDetails,
              phone: text,
            }))
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Date of Birth"
          value={profileDetails.dateOfBirth}
          onChangeText={(text) =>
            setProfileDetails((prevDetails) => ({
              ...prevDetails,
              dateOfBirth: text,
            }))
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Gender"
          value={profileDetails.gender}
          onChangeText={(text) =>
            setProfileDetails((prevDetails) => ({
              ...prevDetails,
              gender: text,
            }))
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Language"
          value={profileDetails.language}
          onChangeText={(text) =>
            setProfileDetails((prevDetails) => ({
              ...prevDetails,
              language: text,
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
    paddingHorizontal: 15,
  },
});

export default ProfileDetailsList;
