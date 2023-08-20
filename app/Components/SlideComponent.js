import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

const CurrentBookings = (bookingDetails) => {
  const [toggle, setToggle] = useState(false);

  return (
    <View>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View
        style={{
          flex: 1,
          padding: 16,
        }}
      >
        <View style={styles.containertop}>
          <View style={styles.containerheader}>
            <Text style={styles.H1}> Booking {bookingDetails.id}</Text>
            <Text style={styles.H2}>Token XX</Text>
          </View>
          <View style={styles.container2}>
            <Text style={styles.H2}> Date: </Text>
            <Text style={styles.H2}> {bookingDetails.date}</Text>
          </View>
          <View style={styles.container2}>
            <Text style={styles.H2}> Time:</Text>
            <Text> {bookingDetails.time}</Text>
          </View>
          <View style={styles.container2}>
            <Text style={styles.H2}> From:</Text>
            <Text style={styles.H2}> {bookingDetails.from}</Text>
          </View>
          <View style={styles.container2}>
            <Text style={styles.H2}> To:</Text>
            <Text style={styles.H2}> {bookingDetails.to}</Text>
          </View>

          <TouchableOpacity
            style={styles.moreBtn}
            onPress={() => {
              console.log(toggle);
              setToggle(!toggle);
            }}
          ></TouchableOpacity>
          {toggle && (
            <MoreDetails from={bookingDetails.from} to={bookingDetails.to} />
          )}
        </View>
        {/*
                    <View style ={styles.containerbottom}>
                        <View style={styles.container}>
                            
                            <Text style={styles.H5}> Earth </Text>
                            <Text style={styles.H4}> Mars </Text>

                        </View>
                        <View style={styles.container2}>

                            <Text style={styles.H3}> Expected Trave Time: </Text>
                            <Text style={styles.H3}> 72hr 30mins</Text>
                        </View>
                        <View style={styles.container2}>

                            <Text style={styles.H3}> Landing Date: </Text>
                            <Text style={styles.H3}> 16/08/2165</Text>
                        </View>
                        <View style={styles.container2}>

                            <Text style={styles.H3}> Landing Time:</Text>
                            <Text style={styles.H3}> 12:00 UTC</Text>
                        </View>
                        <View style={styles.container2}>

                            <Text style={styles.H3}> Live Distance: </Text>
                            <Text style={styles.H3}> 364.62km</Text>
                        </View>
                        
                    </View>
                    */}
      </View>
    </View>
  );
};

const MoreDetails = ({ from, to }) => {
  return (
    <View style={styles.containerbottom}>
      <View style={styles.container}>
        <Text style={styles.H5}> Earth</Text>
        <Text style={styles.H4}> Mars</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.H3}> Expected Trave Time: </Text>
        <Text style={styles.H3}> 72hr 30mins</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.H3}> Landing Date: </Text>
        <Text style={styles.H3}> 16/08/2165</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.H3}> Landing Time:</Text>
        <Text style={styles.H3}> 12:00 UTC</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.H3}> Live Distance: </Text>
        <Text style={styles.H3}> .....</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SIZES: {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 32,
  },

  H1: {
    fontSize: 20,
    fontStyle: "normal",
    color: "#000000",
    paddingLeft: 15,
  },
  H2: {
    fontSize: 13,
    fontStyle: "normal",
    color: "#000000",
    paddingLeft: 25,
  },
  H3: {
    fontSize: 12,
    fontStyle: "normal",
    color: "#000000",
    paddingLeft: 25,
  },
  H4: {
    fontSize: 14,
    fontStyle: "normal",
    color: "#000000",
    paddingLeft: 25,
    paddingTop: 20,
    textAlign: "left",
  },
  H5: {
    fontSize: 14,
    fontStyle: "normal",
    color: "#000000",
    paddingRight: 25,
    paddingTop: 20,
    textAlign: "right",
  },
  containertop: {
    backgroundColor: "#FFA26B",
    width: 289,
    height: 131,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  moreBtn: {
    alignSelf: "center",
    backgroundColor: "#000000",
    height: 20,
    width: 30,
  },
  image: {
    width: 20,
    height: 20,
  },
  containerbottom: {
    backgroundColor: "#F3F1F1",
    width: 289,
    height: 150,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 40,
    paddingRight: 30,
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 30,
  },
  containerheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 30,
    paddingTop: 15,
  },
});

export default CurrentBookings;
