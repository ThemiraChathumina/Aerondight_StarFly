import React, { useState } from 'react';
import { View, Pressable,StyleSheet, Text,ScrollView ,Image} from 'react-native';
import { DataTable } from 'react-native-paper';

//===============================================================================================================================
const Select = (props) => {
  return (
    <Pressable style={SelectStyles.container}>
      <Text style={SelectStyles.text}>{props.selection}   </Text>
      <Image
        source={{ uri: "https://img.icons8.com/?size=512&id=oMLpGdOEA5PT&format=png" }} // Replace with your image path
        style={SelectStyles.image}
      />
    </Pressable>
  );
};

const SelectStyles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Horizontal layout
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    top:100,
    left:140,
    right:100,
    width:250, 
    height:40,// Align items vertically
    backgroundColor: 'lightgrey',
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
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
            From : .
              {"\n"}
            Destinations: 
            {"\n"}
            Date/Time:
            </Text>
        
    </View>
    
    </>
  );
};

const styles4 = StyleSheet.create({
  container: {
    flexDirection: 'row', // Horizontal layout
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    top:120,
    left:0,
    right:100,
    width:250, 
    height:100,
    backgroundColor: 'lightgrey',
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    
    
    letterSpacing: 0.25,
    color: 'black',
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
});
const styles3 = StyleSheet.create({
    
  
  button: {
    alignItems: 'left',
    justifyContent: 'center',
    paddingVertical: 0,
    paddingHorizontal: 10,
    borderRadius: 10,
    top:75,
    left:0,
    right:100,
    width:200,
    height:60,
    alignContent:'center',
    
    backgroundColor: 'pink',
    
  },
  text: {
    fontSize: 13,
    lineHeight: 15,
    color: 'black',
    
  },
  background:{
    backgroundColor:"#1A051D",
    height:1500,
  }
  
});
//================================================================================================
const ChatQStyles = StyleSheet.create({
    
  
  button1: {
    alignItems: 'left',
    justifyContent: 'center',
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 10,
    top:80,
    left:0,
    right:100,
    width:200,
    height:45,
    alignContent:'center',
    
    backgroundColor: '#FF69B4',
    
  },
  text1: {
    fontSize: 14,
    lineHeight: 21,
    
    letterSpacing: 0.25,
    color: 'black',
  },
  background1:{
    backgroundColor:"pink",
  }
  
});

//===============================================================================================



const TableStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    borderRadius: 10,

  },
  column: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#dcdcdc',
    justifyContent: 'center',
  },
  cellText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff', // Customize the pressable text color
  },
  headerow:{
    backgroundColor: 'pink',

    
  },
  itemrow:{
    backgroundColor: 'lightgrey',

    
  }
});

//==========================================================================================================
const BookingChat = (props) => {
  const [showSecondButton, setShowSecondButton] = useState(false);
  const [showThirdButton, setShowThirdButton] = useState(false);
  const [showFourthButton, setShowFourthButton] = useState(false);
  const [showFifthButton, setShowFifthButton] = useState(false);
  

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

  const handleNamePress = (name) => {
    // Handle the press event for the name
    console.log(`Pressed on ${name}`);
  };

  const renderNameCell = (name) => (
    <Pressable onPress={() => handleNamePress(name)}>
      <Text style={TableStyles.cellText}>{name}</Text>
    </Pressable>
  );
  
  return (
    
    <>
    <ScrollView>
    <View style={styles3.background}>
    <View style={styles3.button}>
        
            <Text style={styles3.text}>
              Hi User.
              {"\n"}
            From where would you like to start your journey?</Text>
        
    </View>
    <Select selection="Find Your Start Planet           "/>
    <Text> </Text>
    <Pressable style={SelectStyles.container} onPress={handleFirstButtonPress}>
    <Text style={SelectStyles.text}>Find City                                     </Text>
      <Image
        source={{ uri: "https://img.icons8.com/?size=512&id=oMLpGdOEA5PT&format=png" }} 
        style={SelectStyles.image}
      />
      </Pressable>
    
    {showSecondButton && (
      <>
        <View>
        <Text></Text>
        <Text></Text>
        <ChatQuestion Q = "What is Your Destination ?" />
        <Select selection="Find Your Destination Planet "/>
        <Text> </Text>
        <Pressable onPress={handleSecondButtonPress} style={SelectStyles.container}>
        <Text style={SelectStyles.text}>Find City                                     </Text>
        <Image
        source={{ uri: "https://img.icons8.com/?size=512&id=oMLpGdOEA5PT&format=png" }} 
        style={SelectStyles.image}/>
        </Pressable>
        </View>
      </>
      )}
    
    {showThirdButton && (
      <>
      <Text></Text>
      <Text></Text>
      <ChatQuestion Q = "Any Other Stops?" />
      <Select selection="Find Planet                             "/>
      <Text> </Text>
      <Pressable onPress={handleThirdButtonPress} style={SelectStyles.container}>
      <Text style={SelectStyles.text}>Find City                                     </Text>
      <Image
      source={{ uri: "https://img.icons8.com/?size=512&id=oMLpGdOEA5PT&format=png" }} 
      style={SelectStyles.image}/>
      </Pressable>
      
      </>
      )}
    

    {showFourthButton && (
      <>
      <Text></Text>
      <Text></Text>
      <ChatQuestion Q = "When would you like to travel ?" />
      
      <Pressable onPress={handleFourthButtonPress} style={SelectStyles.container}>
      <Text style={SelectStyles.text}>Select Date and Time:                        </Text>
      <Image
      source={{ uri: "https://icons8.com/icon/GlEOr5x0aJpH/calender" }} // Replace with your image path
      style={SelectStyles.image}/>
      </Pressable>
      
      </>
      )}
    {showFifthButton && (
      <>
      <View>
      <ShortDetails/>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      
      <ChatQuestion Q = "Please find the availabe Flights below" />
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <View style={TableStyles.container}>
      <DataTable >
        <DataTable.Row style={TableStyles.headerow}>
          <DataTable.Title style={TableStyles.column}>Travel Mode</DataTable.Title>
          <DataTable.Title style={TableStyles.column}>Company</DataTable.Title>
          <DataTable.Title style={TableStyles.column}>Departure</DataTable.Title>
        </DataTable.Row>

        <DataTable.Row style={TableStyles.itemrow}>
          <DataTable.Cell style={TableStyles.column}>{renderNameCell('StarShip')}</DataTable.Cell>
          <DataTable.Cell style={TableStyles.column}>Nasa</DataTable.Cell>
          <DataTable.Cell style={TableStyles.column}>Date - time</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={TableStyles.itemrow}>
          <DataTable.Cell style={TableStyles.column}>{renderNameCell('Delta IV')}</DataTable.Cell>
          <DataTable.Cell style={TableStyles.column}>Amazon</DataTable.Cell>
          <DataTable.Cell style={TableStyles.column}>Date - time</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={TableStyles.itemrow}>
          <DataTable.Cell style={TableStyles.column}>{renderNameCell('Cruise III')}</DataTable.Cell>
          <DataTable.Cell style={TableStyles.column}>Nasa</DataTable.Cell>
          <DataTable.Cell style={TableStyles.column}>Date - time</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={TableStyles.itemrow}>
          <DataTable.Cell style={TableStyles.column}>{renderNameCell('Starship')}</DataTable.Cell>
          <DataTable.Cell style={TableStyles.column}>Meta</DataTable.Cell>
          <DataTable.Cell style={TableStyles.column}>Date - time</DataTable.Cell>
        </DataTable.Row>

        {/* Add more rows as needed */}
      </DataTable>
      </View>
      <Text></Text>
      <Text></Text>
      
      </View>
      </>
      )}
    
    
    </View>
    </ScrollView>
    </>
    
    
    
    
    
  );
};


export default BookingChat;
