import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Splash() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('ParentRegister');
    }, 3000);
  }, []);
  return (
    <View style={styles.splashContainer}>
      <Image source={require('../assests/public/Ultimate-Logo.png')}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
