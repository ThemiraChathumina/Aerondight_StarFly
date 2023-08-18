import React from 'react';
import {Text, View, Image, ScrollView,StyleSheet} from 'react-native';
import PromoItem from './PromoItem';

const Promotions = () => {
    return (
      <ScrollView >
        
        <View style={styles.HeadingContainer}>
        <Text style={styles.promotionsText}>  Promotions</Text>
        </View> 
        <View style={styles.ItemHeadingContainer}>
        <PromoItem name ="Jupyter"  url ="https://www.printsome.com/blog/wp-content/uploads/interplanetary-tourism-jupiter.jpg" />
        <PromoItem name ="Venus"  url ="https://www.printsome.com/blog/wp-content/uploads/interplanetary-tourism-venus.jpg" />
        <PromoItem name ="Mars"  url ="https://www.printsome.com/blog/wp-content/uploads/interplanetary-tourism-mars.jpg" />
        </View>
        
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    promotionsText: {
      fontSize: 30, // Adjust the font size as needed
      fontWeight: 'bold',
      padding: 10,
      color:"white"
      
    },
    HeadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "red"
    },
    ItemHeadingContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: "white"
    },
    backgroundc:{
      backgroundColor:"blue",
      height:100,
    }
  });
  
  export default Promotions;