import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const CurrentBookings = ({ bookingDetails, key }) => {
  {
    /* key is the current booking number in the booking list */
  }
  const [toggle, setToggle] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
      }}
    >
      <View style={styles.containertop}>
        <View style={styles.containerheader}>
          <Text style={styles.H1}> Booking {key}</Text>
          <Text style={styles.H2}>Booking Id: {/*bookingDetails.id*/}</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.H2}> Date: </Text>
          <Text style={styles.H2}> {/*bookingDetails.date*/}</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.H2}> Time:</Text>
          <Text> {/*bookingDetails.time*/}</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.H2}> From:</Text>
          <Text style={styles.H2}> {/*bookingDetails.from*/}</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.H2}> To:</Text>
          <Text style={styles.H2}> {/*bookingDetails.to*/}</Text>
        </View>

        <TouchableOpacity
          style={styles.moreBtn}
          onPress={() => {
            setToggle(!toggle);
          }}
        >
          <Icon name="dots-horizontal" size={20} color="white" />
        </TouchableOpacity>
        {toggle ? <MoreDetails bookingDetails={bookingDetails} /> : null}
      </View>
    </View>
  );
};

const MoreDetails = ({ bookingDetails }) => {
  return (
    <View style={styles.containerbottom}>
      <View style={styles.container2}>
        <Text style={styles.H3}> Expected Travel Time: </Text>
        <Text style={styles.H3}> {/*bookingDetails.expectedTravelTime*/}</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.H3}> Landing Date: </Text>
        <Text style={styles.H3}> {/*bookingDetails.landingDate*/}</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.H3}> Landing Time:</Text>
        <Text style={styles.H3}> {/*bookingDetails.landingTime*/}</Text>
      </View>
      {/* <View style={styles.container2}> */}

      {/* <Text style={styles.H3}> Live Distance: </Text> */}
      {/* <Text style={styles.H3}> bookingDetails.liveDistance</Text> */}
      {/* </View> */}
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
    height: 140,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignSelf: "center",
    paddingTop: 10,
  },
  moreBtn: {
    alignSelf: "center",
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
    height: 80,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 8,
    alignSelf: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 40,
    paddingRight: 30,
    paddingBottom: 15,
    alignSelf: "center",
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
    paddingTop: 1,
    paddingBottom: 6,
  },
});
