import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Landing from '../screens/Landing';
import Home from '../screens/Home';
import DrawerNavigator from './DrawerNavigator';
import ParentRegister from '../screens/ParentRegister';
// import TempPasscode from 'UltimateClone-FE\screens\TempPasscode.jsx'
import TempPasscode from "../screens/TempPasscode"

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="ParentRegister"
          component={ParentRegister}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="TempPasscode"
          component={TempPasscode}
          options={{headerShown: false}}></Stack.Screen>  
      </Stack.Navigator>
        

    </NavigationContainer>
  );
};

export default AppNavigator;
