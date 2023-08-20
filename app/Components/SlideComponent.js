// // YourComponent.js

// import React, { useState, useEffect } from "react";
// import { View, Text } from "react-native";
// import fetchFlights from "../Config/api"; // Update the path accordingly

// const YourComponent = () => {
//   const [flights, setFlights] = useState({});

//   useEffect(() => {
//     const apiUrl = "http://192.168.1.100:8000/payment_methods/";
//     fetchFlights(apiUrl)
//       .then((data) => {
//         setFlights(data);
//       })
//       .catch((error) => {
//         // Handle error if needed
//       });
//   }, []);

//   console.log(flights);

//   return (
//     <View>
//       <Text>hehe</Text>
//     </View>
//   );
// };

// export default YourComponent;
