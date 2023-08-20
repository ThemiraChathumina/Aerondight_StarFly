// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Pressable,
//   StyleSheet,
//   Text,
//   ScrollView,
//   Image,
//   Modal,
//   ImageBackground,
// } from "react-native";
// import { DataTable } from "react-native-paper";
// import PlanetSelectScreen from "./PlanetSelectScreen";
// import CitySelectScreen from "./CitySelectScreen";
// import DateTimePickerModal from "react-native-modal-datetime-picker";
// import flights from "../Config/flights";
// import BookingDetailsScreen from "./BookingDetailsScreen";
// import { router } from "expo-router";
// import colors from "../Config/colors";
// import useRGB from "../hooks/useRGB";
// //===============================================================================================================================
// const Select = (props) => {
//   return (
//     <Pressable style={SelectStyles.container} onPress={props.onPress}>
//       <Text style={SelectStyles.text}>{props.selection} </Text>
//       <Image
//         source={{
//           uri: "https://img.icons8.com/?size=512&id=oMLpGdOEA5PT&format=png",
//         }} // Replace with your image path
//         style={SelectStyles.image}
//       />
//     </Pressable>
//   );
// };

// const SelectStyles = StyleSheet.create({
//   container: {
//     flexDirection: "row", // Horizontal layout
//     alignItems: "center",
//     borderRadius: 10,
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     top: 100,
//     left: 140,
//     right: 100,
//     width: 250,
//     height: 40, // Align items vertically
//     backgroundColor: "lightgrey",
//   },
//   text: {
//     fontSize: 14,
//     lineHeight: 21,

//     fontWeight: "bold",
//     letterSpacing: 0.25,
//     color: "black",
//   },
//   image: {
//     width: 24,
//     height: 24,
//     marginRight: 5,
//   },
// });

// //==========================================================================================================
// const ChatQuestion = (props) => {
//   return (
//     <View style={ChatQStyles.button1}>
//       <Text style={ChatQStyles.text1}>{props.Q}</Text>
//     </View>
//   );
// };

// //=========================================================================================================
// const ShortDetails = (props) => {
//   return (
//     <>
//       <View style={styles4.container}>
//         <Text style={styles4.text}>
//           From :{" "}
//           {` ${
//             props.startPlanet
//               ? props.startPlanet.charAt(0).toUpperCase() +
//                 props.startPlanet.slice(1)
//               : ""
//           }, ${props.startCity ? props.startCity.replace(/_/g, " ") : ""}\n`}
//           Destination:
//           {` ${
//             props.endPlanet
//               ? props.endPlanet.charAt(0).toUpperCase() +
//                 props.endPlanet.slice(1)
//               : ""
//           }, ${props.endCity ? props.endCity.replace(/_/g, " ") : ""}\n`}
//           Date:
//           {` ${props.date ? props.date.toISOString().split("T")[0] : ""}\n`}
//         </Text>
//       </View>
//     </>
//   );
// };

// const styles4 = StyleSheet.create({
//   container: {
//     flexDirection: "row", // Horizontal layout
//     alignItems: "center",
//     borderRadius: 10,
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     top: 120,
//     left: 0,
//     right: 100,
//     width: 250,
//     height: 100,
//     backgroundColor: "pink",
//   },
//   text: {
//     fontSize: 14,
//     lineHeight: 21,

//     letterSpacing: 0.25,
//     color: "black",
//   },
//   image: {
//     width: 24,
//     height: 24,
//     marginRight: 5,
//   },
// });
// const styles3 = StyleSheet.create({
//   button: {
//     alignItems: "left",
//     justifyContent: "center",
//     paddingVertical: 0,
//     paddingHorizontal: 10,
//     borderRadius: 10,
//     top: 75,
//     left: 0,
//     right: 100,
//     width: 200,
//     height: 60,
//     alignContent: "center",

//     backgroundColor: "pink",
//   },
//   text: {
//     fontSize: 13,
//     lineHeight: 15,
//     color: "black",
//   },
//   background: {
//     backgroundColor: useRGB(colors.backgroundDark1, 0.5),
//     height: 1500,
//   },
// });
// //================================================================================================
// const ChatQStyles = StyleSheet.create({
//   button1: {
//     alignItems: "left",
//     justifyContent: "center",
//     paddingVertical: 2,
//     paddingHorizontal: 5,
//     borderRadius: 10,
//     top: 80,
//     left: 0,
//     right: 100,
//     width: 200,
//     height: 45,
//     alignContent: "center",

//     backgroundColor: "#FF69B4",
//   },
//   text1: {
//     fontSize: 14,
//     lineHeight: 21,

//     letterSpacing: 0.25,
//     color: "black",
//   },
//   background1: {
//     backgroundColor: "pink",
//   },
// });

// //===============================================================================================

// const TableStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 11,
//     borderRadius: 10,
//   },
//   column: {
//     flex: 1,
//     borderBottomWidth: 1,
//     borderColor: "#dcdcdc",
//     justifyContent: "center",
//   },
//   cellText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#007bff", // Customize the pressable text color
//   },
//   headerow: {
//     backgroundColor: "pink",
//   },
//   itemrow: {
//     backgroundColor: "lightgrey",
//   },
// });

// //==========================================================================================================
// const BookingChat = (props) => {
//   const [showSecondButton, setShowSecondButton] = useState(false);
//   const [showThirdButton, setShowThirdButton] = useState(false);
//   const [showFourthButton, setShowFourthButton] = useState(false);
//   const [showFifthButton, setShowFifthButton] = useState(false);

//   const [startPlanet, setStartPlanet] = useState("");
//   const [isStartPlanetModalVisible, setStartPlanetModalVisible] =
//     useState(false);

//   const [startCity, setStartCity] = useState("");
//   const [isStartCityModalVisible, setStartCityModalVisible] = useState(false);

//   const [destinationPlanet, setDestinationPlanet] = useState("");
//   const [isDestinationPlanetModalVisible, setDestinationPlanetModalVisible] =
//     useState(false);

//   const [destinationCity, setDestinationCity] = useState("");
//   const [isDestinationCityModalVisible, setDestinationCityModalVisible] =
//     useState(false);

//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [date, setDate] = useState(null);

//   const [flight, setFlight] = useState({});
//   const [isFlightModalVisible, setFlightModalVisible] = useState(false);

//   const [selected, setSelected] = useState("1st Class");
//   const [seats, setSeats] = useState([]);

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleDateConfirm = (date) => {
//     console.log("A date has been picked: ", date);
//     setDate(date);
//     hideDatePicker();
//     handleFourthButtonPress();
//   };

//   const handleFirstButtonPress = () => {
//     setShowSecondButton(true);
//   };

//   const handleSecondButtonPress = () => {
//     setShowThirdButton(true);
//   };

//   const handleThirdButtonPress = () => {
//     setShowFourthButton(true);
//   };
//   const handleFourthButtonPress = () => {
//     setShowFifthButton(true);
//   };

//   const handleNamePress = (flight) => {
//     // Handle the press event for the name
//     console.log(`Pressed on ${flight}`);
//     setFlight(flight);
//     setFlightModalVisible(true);
//   };

//   const renderNameCell = (flight) => (
//     <Pressable onPress={() => handleNamePress(flight)}>
//       <Text style={TableStyles.cellText}>{flight.ship}</Text>
//     </Pressable>
//   );

//   const handlePlanet = (planet) => {
//     setStartPlanet(planet);
//     setStartPlanetModalVisible(false);
//   };

//   const handleDestinationPlanet = (planet) => {
//     setDestinationPlanet(planet);
//     setDestinationPlanetModalVisible(false);
//   };

//   const handleStartCity = (city) => {
//     setStartCity(city);
//     setStartCityModalVisible(false);
//     handleFirstButtonPress();
//   };

//   const handleDestinationCity = (city) => {
//     setDestinationCity(city);
//     setDestinationCityModalVisible(false);
//     handleSecondButtonPress();
//     handleThirdButtonPress();
//   };

//   return (
//     <ImageBackground source={require("../assets/welcomeBackground.jpg")}>
//       <ScrollView>
//         <View style={styles3.background}>
//           <View style={styles3.button}>
//             <Text style={styles3.text}>
//               Hi User.
//               {"\n"}
//               From where would you like to start your journey?
//             </Text>
//           </View>
//           <Select
//             selection={
//               startPlanet
//                 ? startPlanet.charAt(0).toUpperCase() + startPlanet.slice(1)
//                 : "Find Your Start Planet           "
//             }
//             onPress={() => {
//               setStartPlanetModalVisible(true);
//               console.log("aaaa");
//             }}
//           />
//           <Modal
//             visible={isStartPlanetModalVisible}
//             transparent
//             animationType="fade"
//           >
//             <PlanetSelectScreen onPress={handlePlanet} />
//           </Modal>
//           <Text> </Text>

//           {startPlanet && (
//             <Pressable
//               style={SelectStyles.container}
//               onPress={() => setStartCityModalVisible(true)}
//             >
//               <Text style={SelectStyles.text}>
//                 {startCity ? startCity.replace(/_/g, " ") : "Find City"}{" "}
//               </Text>
//               <Image
//                 source={{
//                   uri: "https://img.icons8.com/?size=512&id=oMLpGdOEA5PT&format=png",
//                 }}
//                 style={SelectStyles.image}
//               />
//             </Pressable>
//           )}
//           {/* <ShortDetails
//             startPlanet={startPlanet}
//             startCity={startCity}
//             endPlanet={destinationCity}
//             endCity={destinationCity}
//             date={date}
//           /> */}
//           <Modal
//             visible={isStartCityModalVisible}
//             transparent
//             animationType="fade"
//           >
//             <CitySelectScreen planet={startPlanet} onPress={handleStartCity} />
//           </Modal>

//           {showSecondButton && (
//             <>
//               <View>
//                 <Text></Text>
//                 <Text></Text>
//                 <ChatQuestion Q="What is Your Destination ?" />
//                 <Select
//                   selection={
//                     destinationPlanet
//                       ? destinationPlanet.charAt(0).toUpperCase() +
//                         destinationPlanet.slice(1)
//                       : "Find Destination Planet           "
//                   }
//                   onPress={() => setDestinationPlanetModalVisible(true)}
//                 />
//                 <Modal
//                   visible={isDestinationPlanetModalVisible}
//                   transparent
//                   animationType="fade"
//                 >
//                   <PlanetSelectScreen onPress={handleDestinationPlanet} />
//                 </Modal>
//                 <Text> </Text>
//                 {destinationPlanet && (
//                   <Pressable
//                     onPress={() => setDestinationCityModalVisible(true)}
//                     style={SelectStyles.container}
//                   >
//                     <Text style={SelectStyles.text}>
//                       {destinationCity
//                         ? destinationCity.replace(/_/g, " ")
//                         : "Find City"}{" "}
//                     </Text>
//                     <Image
//                       source={{
//                         uri: "https://img.icons8.com/?size=512&id=oMLpGdOEA5PT&format=png",
//                       }}
//                       style={SelectStyles.image}
//                     />
//                   </Pressable>
//                 )}
//                 <Modal
//                   visible={isDestinationCityModalVisible}
//                   transparent
//                   animationType="fade"
//                 >
//                   <CitySelectScreen
//                     planet={destinationPlanet}
//                     onPress={handleDestinationCity}
//                   />
//                 </Modal>
//               </View>
//             </>
//           )}

//           {/* {showThirdButton && (
//             <>
//               <Text></Text>
//               <Text></Text>
//               <ChatQuestion Q="Any Other Stops?" />
//               <Select selection="Find Planet                             " />
//               <Text> </Text>
//               <Pressable
//                 onPress={handleThirdButtonPress}
//                 style={SelectStyles.container}
//               >
//                 <Text style={SelectStyles.text}>Find City </Text>
//                 <Image
//                   source={{
//                     uri: "https://img.icons8.com/?size=512&id=oMLpGdOEA5PT&format=png",
//                   }}
//                   style={SelectStyles.image}
//                 />
//               </Pressable>
//             </>
//           )} */}

//           {showFourthButton && (
//             <>
//               <Text></Text>
//               <Text></Text>
//               <ChatQuestion Q="When would you like to travel ?" />

//               <Pressable
//                 onPress={showDatePicker}
//                 style={SelectStyles.container}
//               >
//                 <Text style={SelectStyles.text}>
//                   {date ? date.toISOString().split("T")[0] : "Select Date:"}{" "}
//                 </Text>
//                 <Image
//                   source={{
//                     uri: "https://icons8.com/icon/GlEOr5x0aJpH/calender",
//                   }} // Replace with your image path
//                   style={SelectStyles.image}
//                 />
//               </Pressable>
//               <DateTimePickerModal
//                 isVisible={isDatePickerVisible}
//                 mode="date"
//                 onConfirm={handleDateConfirm}
//                 onCancel={hideDatePicker}
//               />
//             </>
//           )}
//           {showFifthButton && (
//             <>
//               <View>
//                 <ShortDetails
//                   startPlanet={startPlanet}
//                   startCity={startCity}
//                   endPlanet={destinationPlanet}
//                   endCity={destinationCity}
//                   date={date}
//                 />
//                 <Text></Text>
//                 <Text></Text>
//                 <Text></Text>

//                 <ChatQuestion Q="Please find the availabe Flights below" />
//                 <Text></Text>
//                 <Text></Text>
//                 <Text></Text>
//                 <Text></Text>
//                 <Text></Text>
//                 <View style={TableStyles.container}>
//                   {/* <DataTable>
//                     <DataTable.Row style={TableStyles.headerow}>
//                       <DataTable.Title style={TableStyles.column}>
//                         Travel Mode
//                       </DataTable.Title>
//                       <DataTable.Title style={TableStyles.column}>
//                         Company
//                       </DataTable.Title>
//                       <DataTable.Title style={TableStyles.column}>
//                         Departure
//                       </DataTable.Title>
//                     </DataTable.Row>

//                     <DataTable.Row style={TableStyles.itemrow}>
//                       <DataTable.Cell style={TableStyles.column}>
//                         {renderNameCell("StarShip")}
//                       </DataTable.Cell>
//                       <DataTable.Cell style={TableStyles.column}>
//                         Nasa
//                       </DataTable.Cell>
//                       <DataTable.Cell style={TableStyles.column}>
//                         Date - time
//                       </DataTable.Cell>
//                     </DataTable.Row>

//                     <DataTable.Row style={TableStyles.itemrow}>
//                       <DataTable.Cell style={TableStyles.column}>
//                         {renderNameCell("Delta IV")}
//                       </DataTable.Cell>
//                       <DataTable.Cell style={TableStyles.column}>
//                         Amazon
//                       </DataTable.Cell>
//                       <DataTable.Cell style={TableStyles.column}>
//                         Date - time
//                       </DataTable.Cell>
//                     </DataTable.Row>

//                     <DataTable.Row style={TableStyles.itemrow}>
//                       <DataTable.Cell style={TableStyles.column}>
//                         {renderNameCell("Cruise III")}
//                       </DataTable.Cell>
//                       <DataTable.Cell style={TableStyles.column}>
//                         Nasa
//                       </DataTable.Cell>
//                       <DataTable.Cell style={TableStyles.column}>
//                         Date - time
//                       </DataTable.Cell>
//                     </DataTable.Row>

//                     <DataTable.Row style={TableStyles.itemrow}>
//                       <DataTable.Cell style={TableStyles.column}>
//                         {renderNameCell("Starship")}
//                       </DataTable.Cell>
//                       <DataTable.Cell style={TableStyles.column}>
//                         Meta
//                       </DataTable.Cell>
//                       <DataTable.Cell style={TableStyles.column}>
//                         Date - time
//                       </DataTable.Cell>
//                     </DataTable.Row>

//                   </DataTable> */}
//                   <View style={{ backgroundColor: "red", width: "100%" }}>
//                     <DataTable>
//                       <DataTable.Row style={TableStyles.headerow}>
//                         <DataTable.Title style={TableStyles.column}>
//                           Travel Mode
//                         </DataTable.Title>
//                         <DataTable.Title style={TableStyles.column}>
//                           Company
//                         </DataTable.Title>
//                         <DataTable.Title style={TableStyles.column}>
//                           Departure
//                         </DataTable.Title>
//                       </DataTable.Row>

//                       {flights.map((flight, index) => (
//                         <DataTable.Row key={index} style={TableStyles.itemrow}>
//                           <DataTable.Cell style={TableStyles.column}>
//                             {renderNameCell({
//                               bookedSeats: flight.bookedSeats,
//                               ship: flight.flightName,
//                               company: flight.company,
//                               date: flight.dateTime.split(" ")[0],
//                               time: flight.dateTime.split(" ")[1],
//                               from: startPlanet,
//                               to: destinationPlanet,
//                               id: flight.id,
//                             })}
//                           </DataTable.Cell>
//                           <DataTable.Cell style={TableStyles.column}>
//                             {flight.company}
//                           </DataTable.Cell>
//                           <DataTable.Cell style={TableStyles.column}>
//                             {flight.dateTime}
//                           </DataTable.Cell>
//                         </DataTable.Row>
//                       ))}
//                     </DataTable>

//                     <Modal
//                       visible={isFlightModalVisible}
//                       animationType="fade"
//                       transparent
//                     >
//                       <BookingDetailsScreen
//                         ship={flight.ship}
//                         company={flight.company}
//                         from={flight.from}
//                         to={flight.to}
//                         date={flight.date}
//                         time={flight.time}
//                         onChange={() => setFlightModalVisible(flight)}
//                         onConfirm={() => setFlightModalVisible(false)}
//                         getClass={setSelected}
//                         getSeats={setSeats}
//                       />
//                       {/* <Text>
//                       {flight.ship} {flight.company} {flight.from} {flight.to}{" "}
//                       {flight.date} {flight.time}
//                     </Text> */}
//                     </Modal>
//                   </View>
//                 </View>
//                 <Text></Text>
//                 <Text></Text>
//               </View>
//             </>
//           )}
//         </View>
//       </ScrollView>
//     </ImageBackground>
//   );
// };

// export default BookingChat;

import React, { useState, useEffect } from "react";
import {
  View,
  Pressable,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Modal,
  ImageBackground,
} from "react-native";
import { DataTable } from "react-native-paper";
import PlanetSelectScreen from "./PlanetSelectScreen";
import CitySelectScreen from "./CitySelectScreen";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import flights from "../Config/flights";
import BookingDetailsScreen from "./BookingDetailsScreen";
import { router } from "expo-router";
import colors from "../Config/colors";
import useRGB from "../hooks/useRGB";
import personalDetails from "../Config/personalDetails";
//===============================================================================================================================
const Select = (props) => {
  return (
    <Pressable style={SelectStyles.container} onPress={props.onPress}>
      <Text style={SelectStyles.text}>{props.selection} </Text>
      <Image
        source={{
          uri: "https://img.icons8.com/?size=512&id=oMLpGdOEA5PT&format=png",
        }} // Replace with your image path
        style={SelectStyles.image}
      />
    </Pressable>
  );
};

const SelectStyles = StyleSheet.create({
  container: {
    flexDirection: "row", // Horizontal layout
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    top: 100,
    left: 140,
    right: 100,
    width: 250,
    height: 40, // Align items vertically
    backgroundColor: "lightgrey",
  },
  text: {
    fontSize: 14,
    lineHeight: 21,

    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
});

//==========================================================================================================
const ChatQuestion = (props) => {
  return (
    <View style={ChatQStyles.button1}>
      <Text style={ChatQStyles.text1}>{props.Q}</Text>
    </View>
  );
};

//=========================================================================================================
const ShortDetails = (props) => {
  return (
    <>
      <View style={styles4.container}>
        <Text style={styles4.text}>
          From :{" "}
          {` ${
            props.startPlanet
              ? props.startPlanet.charAt(0).toUpperCase() +
                props.startPlanet.slice(1)
              : ""
          }, ${props.startCity ? props.startCity.replace(/_/g, " ") : ""}\n`}
          Destination:
          {` ${
            props.endPlanet
              ? props.endPlanet.charAt(0).toUpperCase() +
                props.endPlanet.slice(1)
              : ""
          }, ${props.endCity ? props.endCity.replace(/_/g, " ") : ""}\n`}
          Date:
          {` ${props.date ? props.date.toISOString().split("T")[0] : ""}\n`}
        </Text>
      </View>
    </>
  );
};

const styles4 = StyleSheet.create({
  container: {
    flexDirection: "row", // Horizontal layout
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    top: 120,
    left: 0,
    right: 100,
    width: 250,
    height: 100,
    backgroundColor: "pink",
  },
  text: {
    fontSize: 14,
    lineHeight: 21,

    letterSpacing: 0.25,
    color: "black",
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
});
const styles3 = StyleSheet.create({
  button: {
    alignItems: "left",
    justifyContent: "center",
    paddingVertical: 0,
    paddingHorizontal: 10,
    borderRadius: 10,
    top: 75,
    left: 0,
    right: 100,
    width: 200,
    height: 60,
    alignContent: "center",

    backgroundColor: "pink",
  },
  text: {
    fontSize: 13,
    lineHeight: 15,
    color: "black",
  },
  background: {
    backgroundColor: useRGB(colors.backgroundDark1, 0.5),
    height: 1800,
  },
});
//================================================================================================
const ChatQStyles = StyleSheet.create({
  button1: {
    alignItems: "left",
    justifyContent: "center",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 10,
    top: 80,
    left: 0,
    right: 100,
    width: 200,
    height: 45,
    alignContent: "center",

    backgroundColor: "#FF69B4",
  },
  text1: {
    fontSize: 14,
    lineHeight: 21,

    letterSpacing: 0.25,
    color: "black",
  },
  background1: {
    backgroundColor: "pink",
  },
});

//===============================================================================================

const TableStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 11,
    borderRadius: 10,
  },
  column: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#dcdcdc",
    justifyContent: "center",
  },
  cellText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007bff", // Customize the pressable text color
  },
  headerow: {
    backgroundColor: "pink",
  },
  itemrow: {
    backgroundColor: "lightgrey",
  },
});
//==========================================================================================================
//==========================================================================================================
//==========================================================================================================
//Payment Screen Elements
//===============================================================================================================================
const SelectAns = (props) => {
  return (
    <Pressable style={SelectAnsStyles.container1}>
      <Text style={SelectAnsStyles.text}>{props.SelectAnsion} </Text>
    </Pressable>
  );
};

const SelectAnsStyles = StyleSheet.create({
  container1: {
    flexDirection: "row", // Horizontal layout
    alignItems: "center",
    textAlign: "center",
    alignContent: "center",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    top: 30,
    left: 200,
    right: 100,
    width: 200,
    height: 40, // Align items vertically
    backgroundColor: "lightgrey",
  },
  container2: {
    flexDirection: "row", // Horizontal layout
    alignItems: "center",
    textAlign: "center",
    alignContent: "center",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    top: 30,
    left: 150,
    right: 50,
    width: 300,
    height: 40, // Align items vertically
    backgroundColor: "lightgrey",
  },
  text: {
    //fontSize: 14,
    lineHeight: 21,

    letterSpacing: 0.25,
    color: "black",
  },
});
//=========================================================================================================

const HeadingStyle = StyleSheet.create({
  container: {
    flexDirection: "row", // Horizontal layout
    alignItems: "center",
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    top: 50,
    left: 0,
    right: 100,
    alignSelf: "center",
    alignContent: "center",
    textAlign: "center",
    width: 250,
    height: 40, // Align items vertically
    backgroundColor: "lightgrey",
    fontSize: 20,
    fontWeight: "bold",
  },
});

//==========================================================================================================
const ChatQues = (props) => {
  return (
    <View style={ChatStyle.button1}>
      <Text style={ChatStyle.text1}>{props.Q}</Text>
    </View>
  );
};

//=========================================================================================================

const Style4 = StyleSheet.create({
  container: {
    flexDirection: "row", // Horizontal layout
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    top: 120,
    left: 0,
    right: 100,
    width: 250,
    height: 100,
    backgroundColor: "lightgrey",
  },
  text: {
    fontSize: 14,
    lineHeight: 21,

    letterSpacing: 0.25,
    color: "black",
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
});
const Style3 = StyleSheet.create({
  button: {
    alignItems: "left",
    justifyContent: "center",
    paddingVertical: 0,
    paddingHorizontal: 10,
    borderRadius: 30,
    top: 75,
    left: 0,
    right: 100,
    width: 200,
    height: 60,
    alignContent: "center",

    backgroundColor: "pink",
  },
  text: {
    fontSize: 13,
    lineHeight: 15,
    color: "black",
  },
  background: {
    backgroundColor: "#1A051D",
    height: 1500,
  },
});
//================================================================================================
const ChatStyle = StyleSheet.create({
  button1: {
    alignItems: "left",
    justifyContent: "center",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 20,
    top: 30,
    left: 0,
    right: 100,
    width: 200,
    height: 50,
    alignContent: "center",

    backgroundColor: "#FF69B4",
  },
  text1: {
    fontSize: 14,
    lineHeight: 21,

    letterSpacing: 0.25,
    color: "black",
  },
  background1: {
    backgroundColor: "pink",
  },
});

//===============================================================================================

const BoxStyles = StyleSheet.create({
  container: {
    flexDirection: "row", // Arrange components horizontally
    justifyContent: "space-between", // Space them evenly along the row
    alignItems: "center", // Center components vertically
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 70,
    backgroundColor: "pink",
  },
  leftSide: {
    flex: 1, // Take up half of the row's space
    marginRight: 2,
  },
  rightSide: {
    flex: 1, // Take up half of the row's space
    marginLeft: 2,
  },
  leftTextHeader: {
    textAlign: "left",
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  leftText: {
    textAlign: "left",
    fontSize: 16,

    color: "#333",
  },
  rightTextHeader: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  rightText: {
    textAlign: "center",
    fontSize: 16,

    color: "#333",
  },
});

//==========================================================================================================
const BookingChat = (props) => {
  const [showSecondButton, setShowSecondButton] = useState(false);
  const [showThirdButton, setShowThirdButton] = useState(false);
  const [showFourthButton, setShowFourthButton] = useState(false);
  const [showFifthButton, setShowFifthButton] = useState(false);

  //Payment Screen Elements
  const [showSixthButton, setShowSixthButton] = useState(false);
  const [showSeventhButton, setShowSeventhButton] = useState(false);
  const [showEighthButton, setShowEighthButton] = useState(false);
  const [showNinethButton, setShowNinethButton] = useState(false);

  const [startPlanet, setStartPlanet] = useState("");
  const [isStartPlanetModalVisible, setStartPlanetModalVisible] =
    useState(false);

  const [startCity, setStartCity] = useState("");
  const [isStartCityModalVisible, setStartCityModalVisible] = useState(false);

  const [destinationPlanet, setDestinationPlanet] = useState("");
  const [isDestinationPlanetModalVisible, setDestinationPlanetModalVisible] =
    useState(false);

  const [destinationCity, setDestinationCity] = useState("");
  const [isDestinationCityModalVisible, setDestinationCityModalVisible] =
    useState(false);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(null);

  const [flight, setFlight] = useState({});
  const [isFlightModalVisible, setFlightModalVisible] = useState(false);

  const [selected, setSelected] = useState("1st Class");
  const [seats, setSeats] = useState([]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    console.log("A date has been picked: ", date);
    setDate(date);
    hideDatePicker();
    handleFourthButtonPress();
  };

  const handleFirstButtonPress = () => {
    setShowSecondButton(true);
  };

  const handleSecondButtonPress = () => {
    setShowThirdButton(true);
  };

  const handleThirdButtonPress = () => {
    setShowFourthButton(true);
  };
  const handleFourthButtonPress = () => {
    setShowFifthButton(true);
  };

  //==========================================================================
  // Payment Screen components
  const handleFifthButtonPress = () => {
    setShowSixthButton(true);
  };
  const handleSixthButtonPress = () => {
    setShowSeventhButton(true);
  };

  const handleSeventhButtonPress = () => {
    setShowEighthButton(true);
  };

  const handleEighthButtonPress = () => {
    setShowNinethButton(true);
    props.navigation.navigate("BookingDetails");
  };
  const handleNinethButtonPress = () => {};

  const handleNamePress = (flight) => {
    // Handle the press event for the name
    console.log(`Pressed on ${flight}`);
    setFlight(flight);
    setFlightModalVisible(true);
  };

  const renderNameCell = (flight) => (
    <Pressable onPress={() => handleNamePress(flight)}>
      <Text style={TableStyles.cellText}>{flight.ship}</Text>
    </Pressable>
  );

  const handlePlanet = (planet) => {
    setStartPlanet(planet);
    setStartPlanetModalVisible(false);
  };

  const handleDestinationPlanet = (planet) => {
    setDestinationPlanet(planet);
    setDestinationPlanetModalVisible(false);
  };

  const handleStartCity = (city) => {
    setStartCity(city);
    setStartCityModalVisible(false);
    handleFirstButtonPress();
  };

  const handleDestinationCity = (city) => {
    setDestinationCity(city);
    setDestinationCityModalVisible(false);
    handleSecondButtonPress();
    handleThirdButtonPress();
  };

  return (
    <ImageBackground source={require("../assets/welcomeBackground.jpg")}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles3.background}>
          <View style={styles3.button}>
            <Text style={styles3.text}>
              Hi {personalDetails.User.userName}.{"\n"}
              From where would you like to start your journey?
            </Text>
          </View>
          <Select
            selection={
              startPlanet
                ? startPlanet.charAt(0).toUpperCase() + startPlanet.slice(1)
                : "Find Your Start Planet           "
            }
            onPress={() => {
              setStartPlanetModalVisible(true);
              console.log("aaaa");
            }}
          />
          <Modal
            visible={isStartPlanetModalVisible}
            transparent
            animationType="fade"
          >
            <PlanetSelectScreen onPress={handlePlanet} />
          </Modal>
          <Text> </Text>

          {startPlanet && (
            <Pressable
              style={SelectStyles.container}
              onPress={() => setStartCityModalVisible(true)}
            >
              <Text style={SelectStyles.text}>
                {startCity ? startCity.replace(/_/g, " ") : "Find City"}{" "}
              </Text>
              <Image
                source={{
                  uri: "https://img.icons8.com/?size=512&id=oMLpGdOEA5PT&format=png",
                }}
                style={SelectStyles.image}
              />
            </Pressable>
          )}
          {/* <ShortDetails
            startPlanet={startPlanet}
            startCity={startCity}
            endPlanet={destinationCity}
            endCity={destinationCity}
            date={date}
          /> */}
          <Modal
            visible={isStartCityModalVisible}
            transparent
            animationType="fade"
          >
            <CitySelectScreen planet={startPlanet} onPress={handleStartCity} />
          </Modal>

          {showSecondButton && (
            <>
              <View>
                <Text></Text>
                <Text></Text>
                <ChatQuestion Q="What is Your Destination ?" />
                <Select
                  selection={
                    destinationPlanet
                      ? destinationPlanet.charAt(0).toUpperCase() +
                        destinationPlanet.slice(1)
                      : "Find Destination Planet           "
                  }
                  onPress={() => setDestinationPlanetModalVisible(true)}
                />
                <Modal
                  visible={isDestinationPlanetModalVisible}
                  transparent
                  animationType="fade"
                >
                  <PlanetSelectScreen onPress={handleDestinationPlanet} />
                </Modal>
                <Text> </Text>
                {destinationPlanet && (
                  <Pressable
                    onPress={() => setDestinationCityModalVisible(true)}
                    style={SelectStyles.container}
                  >
                    <Text style={SelectStyles.text}>
                      {destinationCity
                        ? destinationCity.replace(/_/g, " ")
                        : "Find City"}{" "}
                    </Text>
                    <Image
                      source={{
                        uri: "https://img.icons8.com/?size=512&id=oMLpGdOEA5PT&format=png",
                      }}
                      style={SelectStyles.image}
                    />
                  </Pressable>
                )}
                <Modal
                  visible={isDestinationCityModalVisible}
                  transparent
                  animationType="fade"
                >
                  <CitySelectScreen
                    planet={destinationPlanet}
                    onPress={handleDestinationCity}
                  />
                </Modal>
              </View>
            </>
          )}

          {/* {showThirdButton && (
            <>
              <Text></Text>
              <Text></Text>
              <ChatQuestion Q="Any Other Stops?" />
              <Select selection="Find Planet                             " />
              <Text> </Text>
              <Pressable
                onPress={handleThirdButtonPress}
                style={SelectStyles.container}
              >
                <Text style={SelectStyles.text}>Find City </Text>
                <Image
                  source={{
                    uri: "https://img.icons8.com/?size=512&id=oMLpGdOEA5PT&format=png",
                  }}
                  style={SelectStyles.image}
                />
              </Pressable>
            </>
          )} */}

          {showFourthButton && (
            <>
              <Text></Text>
              <Text></Text>
              <ChatQuestion Q="When would you like to travel ?" />

              <Pressable
                onPress={showDatePicker}
                style={SelectStyles.container}
              >
                <Text style={SelectStyles.text}>
                  {date ? date.toISOString().split("T")[0] : "Select Date:"}{" "}
                </Text>
                <Image
                  source={{
                    uri: "https://icons8.com/icon/GlEOr5x0aJpH/calender",
                  }} // Replace with your image path
                  style={SelectStyles.image}
                />
              </Pressable>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
              />
            </>
          )}
          {showFifthButton && (
            <>
              <View>
                <ShortDetails
                  startPlanet={startPlanet}
                  startCity={startCity}
                  endPlanet={destinationPlanet}
                  endCity={destinationCity}
                  date={date}
                />
                <Text></Text>
                <Text></Text>
                <Text></Text>

                <ChatQuestion Q="Please find the availabe Flights below" />
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <View style={TableStyles.container}>
                  {/* <DataTable>
                    <DataTable.Row style={TableStyles.headerow}>
                      <DataTable.Title style={TableStyles.column}>
                        Travel Mode
                      </DataTable.Title>
                      <DataTable.Title style={TableStyles.column}>
                        Company
                      </DataTable.Title>
                      <DataTable.Title style={TableStyles.column}>
                        Departure
                      </DataTable.Title>
                    </DataTable.Row>

                    <DataTable.Row style={TableStyles.itemrow}>
                      <DataTable.Cell style={TableStyles.column}>
                        {renderNameCell("StarShip")}
                      </DataTable.Cell>
                      <DataTable.Cell style={TableStyles.column}>
                        Nasa
                      </DataTable.Cell>
                      <DataTable.Cell style={TableStyles.column}>
                        Date - time
                      </DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row style={TableStyles.itemrow}>
                      <DataTable.Cell style={TableStyles.column}>
                        {renderNameCell("Delta IV")}
                      </DataTable.Cell>
                      <DataTable.Cell style={TableStyles.column}>
                        Amazon
                      </DataTable.Cell>
                      <DataTable.Cell style={TableStyles.column}>
                        Date - time
                      </DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row style={TableStyles.itemrow}>
                      <DataTable.Cell style={TableStyles.column}>
                        {renderNameCell("Cruise III")}
                      </DataTable.Cell>
                      <DataTable.Cell style={TableStyles.column}>
                        Nasa
                      </DataTable.Cell>
                      <DataTable.Cell style={TableStyles.column}>
                        Date - time
                      </DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row style={TableStyles.itemrow}>
                      <DataTable.Cell style={TableStyles.column}>
                        {renderNameCell("Starship")}
                      </DataTable.Cell>
                      <DataTable.Cell style={TableStyles.column}>
                        Meta
                      </DataTable.Cell>
                      <DataTable.Cell style={TableStyles.column}>
                        Date - time
                      </DataTable.Cell>
                    </DataTable.Row>

                  </DataTable> */}
                  <DataTable>
                    <DataTable.Row style={TableStyles.headerow}>
                      <DataTable.Title style={TableStyles.column}>
                        Travel Mode
                      </DataTable.Title>
                      <DataTable.Title style={TableStyles.column}>
                        Company
                      </DataTable.Title>
                      <DataTable.Title style={TableStyles.column}>
                        Departure
                      </DataTable.Title>
                    </DataTable.Row>

                    {flights.map((flight, index) => (
                      <DataTable.Row key={index} style={TableStyles.itemrow}>
                        <DataTable.Cell style={TableStyles.column}>
                          {renderNameCell({
                            bookedSeats: flight.bookedSeats,
                            ship: flight.flightName,
                            company: flight.company,
                            date: flight.dateTime.split(" ")[0],
                            time: flight.dateTime.split(" ")[1],
                            from: startPlanet,
                            to: destinationPlanet,
                            id: flight.id,
                          })}
                        </DataTable.Cell>
                        <DataTable.Cell style={TableStyles.column}>
                          {flight.company}
                        </DataTable.Cell>
                        <DataTable.Cell style={TableStyles.column}>
                          {flight.dateTime}
                        </DataTable.Cell>
                      </DataTable.Row>
                    ))}
                  </DataTable>
                  <Modal
                    visible={isFlightModalVisible}
                    animationType="fade"
                    transparent
                  >
                    <BookingDetailsScreen
                      ship={flight.ship}
                      company={flight.company}
                      from={flight.from}
                      to={flight.to}
                      date={flight.date}
                      time={flight.time}
                      onChange={() => setFlightModalVisible(flight)}
                      onConfirm={() => {
                        setFlightModalVisible(false);
                        setShowSixthButton(true);
                      }}
                      getClass={setSelected}
                      getSeats={setSeats}
                    />
                    {/* <Text>
                      {flight.ship} {flight.company} {flight.from} {flight.to}{" "}
                      {flight.date} {flight.time}
                    </Text> */}
                  </Modal>
                </View>

                {showSixthButton && (
                  <>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text style={HeadingStyle.container}> Payment</Text>
                    <View style={BoxStyles.container}>
                      <View style={BoxStyles.leftSide}>
                        <Text style={BoxStyles.leftTextHeader}>
                          Flight Details
                        </Text>
                        <Text style={BoxStyles.leftText}>
                          Flight Name: {flight.ship}
                        </Text>
                        <Text style={BoxStyles.leftText}>
                          From: {flight.from}
                        </Text>
                        <Text style={BoxStyles.leftText}>
                          To: {flight.from}
                        </Text>
                        <Text style={BoxStyles.leftText}>
                          Flight date: {flight.date}
                        </Text>
                      </View>
                      <View style={BoxStyles.rightSide}>
                        <Text style={BoxStyles.rightTextHeader}>Price</Text>
                        {/* <Text style={BoxStyles.rightText}>
                          Flight Price : $...{" "}
                        </Text>
                        <Text style={BoxStyles.rightText}>Tax: .....</Text> */}
                        <Text style={BoxStyles.rightText}>
                          Total Price: .....
                        </Text>
                      </View>
                    </View>
                    <ChatQues Q="Please SelectAns your payment option" />

                    <Text> </Text>
                    <Pressable
                      style={SelectAnsStyles.container1}
                      onPress={handleSixthButtonPress}
                    >
                      <Text style={SelectAnsStyles.text}>{personalDetails.AccDetails.cardNumber}</Text>
                    </Pressable>
                  </>
                )}

                {showSeventhButton && (
                  <>
                    <View>
                      <Text></Text>
                      <ChatQues Q="Please confirm your payments" />
                      <Text> </Text>
                      <Text></Text>
                      <Pressable
                        onPress={handleSeventhButtonPress}
                        style={SelectAnsStyles.container2}
                      >
                        <Text style={SelectAnsStyles.text}>
                          Pay $xxx using payment method{" "}
                        </Text>
                      </Pressable>
                    </View>
                  </>
                )}

                {showEighthButton && (
                  <>
                    <Text></Text>
                    <Text></Text>

                    <ChatQues Q="Payment is successfull! Have a nice journey !!" />

                    <Text></Text>
                    <Pressable
                      onPress={handleEighthButtonPress}
                      style={SelectAnsStyles.container1}
                    >
                      <Text style={SelectAnsStyles.text}>
                        Make another Booking{" "}
                      </Text>
                    </Pressable>

                    <Text></Text>

                    <Pressable
                      onPress={handleEighthButtonPress}
                      style={SelectAnsStyles.container1}
                    >
                      <Text style={SelectAnsStyles.text}>
                        Add to Favourites{" "}
                      </Text>
                    </Pressable>
                  </>
                )}
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default BookingChat;
