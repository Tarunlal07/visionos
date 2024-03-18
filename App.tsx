import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screen/Homescreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <HomeScreen/>
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Home" component={HomeScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default App;
