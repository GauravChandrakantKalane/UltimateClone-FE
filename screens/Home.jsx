import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';

const Home = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.title}>Home page</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Panchang');
        }}>
        <Text>Panchang</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
