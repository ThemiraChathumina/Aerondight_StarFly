import React from 'react';
import {Text, View, Image,StyleSheet,Button,Pressable} from 'react-native';
import BookingDetailsItem from './BookingDetailsItem';

const  BookingDetails= () => {
    return (
      <View style={styles.background}>
        
        <View >

        <BookingDetailsItem name ="Booking History" />
        <Text > </Text>
        <BookingDetailsItem name ="Current Bookings" />
        
        <Pressable style={styles.button}>
            <Text style={styles.text}>New Booking</Text>
        </Pressable>
        </View>

      </View>
    );
  };

  const styles = StyleSheet.create({
    promotionsText: {
      fontSize: 30, // Adjust the font size as needed
      fontWeight: 'bold',
      padding: 2,
      color:"white"
      
    },
    
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 3,
        width:300,
        height:60,
        alignContent:'center',
        alignSelf:'center',
        backgroundColor: 'red',
        top:450,
      },
      text: {
        fontSize: 21,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      background:{
        backgroundColor:"#1A051D",
        height:1000,
      }
  });
  
  export default BookingDetails;