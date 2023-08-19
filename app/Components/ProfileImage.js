import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ProfileImage = () => {
  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission needed",
          "Please grant permission to access your media library."
        );
      }
    })();
  }, []);

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageContainer} onPress={selectImage}>
        <Image
          source={imageUri ? { uri: imageUri } : require("../assets/icon3.png")}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

const imageSize = 120;

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 80,
    marginBottom: 20,
    borderRadius: 10,
  },
  imageContainer: {
    flexShrink: 1,
    backgroundColor: "rgba(26, 5, 29, 0.5)",
    borderRadius: 50,
    padding: 10,
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize,
  },
});

export default ProfileImage;
