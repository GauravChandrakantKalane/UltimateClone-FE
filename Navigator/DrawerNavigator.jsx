import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Panchang from '../screens/Panchang';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import AppNavigator from './AppNavigator';

const DrawerNavigator = () => {
  const navigation = useNavigation();
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrowleft" size={20} color="black" />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Drawer.Screen
        name="Panchang"
        component={Panchang}
        options={{
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrowleft" size={20} color="black" />
              </TouchableOpacity>
            );
          },
        }}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
