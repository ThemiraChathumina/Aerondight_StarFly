import React from 'react';
import {Text, View, Image, ScrollView,StyleSheet} from 'react-native';

const PromoItem = (props) => {
  return (
    <View>
        <Text style={styles.promotionsText}>{props.name}</Text>
      <Image
        source={{
          uri: props.url,
        }}
        style={styles.curvedImage}
      />
      
    </View>
  );
};
const styles = StyleSheet.create({
  promotionsText: {
    fontSize: 24, // Adjust the font size as needed
    fontWeight: 'bold',
    padding: 10,
  },
  curvedImage: {
    width: 380,
    height: 380,
    borderRadius: 20,
     // Positions the image absolutely within its parent
    // Adjust these values to change the position
    left: 5,
     // Half of the width/height to make it circular
  },
});

export default PromoItem;
