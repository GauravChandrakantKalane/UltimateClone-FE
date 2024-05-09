import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React from 'react';

const ParentRegister = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={{flex: 1}}>
        {/* Register Page Image Container */}
        <View style={styles.displayImageContainer}>
          <Image
            source={require('../assests/public/Parent_Register.png')}></Image>
        </View>
        {/* Register Page Heading */}
        <View>
          <Text style={styles.registerHeading}>
            Sign up to start your journey!
          </Text>
        </View>
        {/* Parent Register Form */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ParentRegister;

const styles = StyleSheet.create({
  displayImageContainer: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayImage: {},
  registerHeading: {
    textAlign: 'center',
    //styleName: App/Title_App;
    fontFamily: 'Poppins',
    fontSize: 26,
    fontWeight: '600',
    lineHeight: 32,
    color: '#000000',
  },
});
