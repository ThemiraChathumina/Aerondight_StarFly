import React from 'react';
import { View,Button, StyleSheet,Pressable,Text } from 'react-native';

const BookingDetailsItem = (props) => {
  return (
    
    <View style={styles.rectangle}>
        <Pressable style={styles.button}>
            <Text style={styles.text}>{props.name}</Text>
        </Pressable>
    </View>
    
    
  );
};

const styles = StyleSheet.create({
    
  rectangle: {
    width: 380,
    height: 100,
    backgroundColor: '#3F3356', // Set the background color of the rectangle
    borderWidth: 2, // Border width
    borderColor: 'black', // Border color
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top:60,
    left: 5,
    right:105,
    
     // Border radius for rounded corners
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    
    width:200,
    height:50,
    alignContent:'center',
    alignSelf:'center',
    backgroundColor: 'red',
    
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  background:{
    backgroundColor:"#1A051D",
  }
  
});

export default BookingDetailsItem;