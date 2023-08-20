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
    height: 1500,
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
const BookingChat = (props) => {
  const [showSecondButton, setShowSecondButton] = useState(false);
  const [showThirdButton, setShowThirdButton] = useState(false);
  const [showFourthButton, setShowFourthButton] = useState(false);
  const [showFifthButton, setShowFifthButton] = useState(false);

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
      <ScrollView>
        <View style={styles3.background}>
          <View style={styles3.button}>
            <Text style={styles3.text}>
              Hi User.
              {"\n"}
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
                            ship: flight.flightName,
                            company: flight.company,
                            date: flight.dateTime.split(" ")[0],
                            time: flight.dateTime.split(" ")[1],
                            from: startPlanet,
                            to: destinationPlanet,
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
                    />
                    {/* <Text>
                      {flight.ship} {flight.company} {flight.from} {flight.to}{" "}
                      {flight.date} {flight.time}
                    </Text> */}
                  </Modal>
                </View>
                <Text></Text>
                <Text></Text>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default BookingChat;
