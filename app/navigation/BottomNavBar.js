import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';
// Screens
import HomeScreen from './dummy_Screens/HomeScreen';
import ChatbotScreen from './dummy_Screens/ChatbotScreen';
import AccountScreen from './dummy_Screens/AccountSceen';

//Screen names
const homeName = "Home";
const ChatbotName = "Chatbot";
const AccountName = "Account";

const Tab = createBottomTabNavigator();

function BottomNavBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
              return <Ionicons name={iconName} size={size} color={color} />;

            } else if (rn === ChatbotName) {
                //iconName = (
                    //<Image
                      //source={require('C:/Users/suwan/Downloads/Coding/ReactNative/DoneWithIt/assets/chatboticon.png')} // Replace with your image source
                     // style={{ width: size, height: size, tintColor: focused ? color : 'blue' }}
                    ///>
                  //);
                iconName = focused ? 'logo-ionitron' : 'logo-ionitron';
                return <Ionicons name={iconName} size={size} color={color} />;

            } else if (rn === AccountName) {
              iconName = focused ? 'person' : 'person-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            }

            // You can return any component that you like here!
            

      
            
            

            //return <iconName/>;
          
            
            
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'blue',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 20},
        
        }}>
          

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={ChatbotName} component={ChatbotScreen} />
        <Tab.Screen name={AccountName} component={AccountScreen} />

      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

export default BottomNavBar;