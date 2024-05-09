import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DrawerNavigator from '../Navigator/DrawerNavigator';
import BottomNavigator from '../Navigator/BottomNavigator';

export default function Landing() {
  // return <DrawerNavigator></DrawerNavigator>;
  return <BottomNavigator></BottomNavigator>;
}

const styles = StyleSheet.create({});
