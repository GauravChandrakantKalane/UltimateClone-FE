import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TextInput } from 'react-native';

const TempPasscode = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.displayImageContainer}>
          <Image
            source={require('../assests/public/temp_passcode.png')}
            style={styles.displayImage}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.registerHeading}>
          Temporary Passcode!
          </Text>
          <Text style={styles.registerContent}>
            This is a system-generated temporary passcode. Feel free to log in and change it within
            'My Account' whenever you're ready. Happy navigating!
          </Text>
          <Text style={styles.registerPasscode}>
            Passcode
          </Text>
          <TextInput style={styles.passcodeInput}
            value="1234"
            editable={false}>
            
          </TextInput>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TempPasscode;

const styles = StyleSheet.create({
  displayImageContainer: { 
    width: '100%',
    height: 260,
    marginBottom: 70,
  },
  displayImage: {
    width: '100%', 
    height: '100%',
    resizeMode: 'cover', 
  },
  contentContainer: {
    flex: 1,
    alignItems: 'left',
    justifyContent: 'center', 
    paddingHorizontal: 31, 
  },
  registerHeading: {
    fontFamily:'Poppins-SemiBold',
    fontSize: 26, 
    fontWeight: '850', 
    lineHeight: 40,   
    textAlign: 'left',
    color: '#000000',
    marginBottom: 0,
  },
  registerContent: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15, 
    fontWeight: '1000',
    lineHeight: 22, 
    textAlign: 'left', 
    color: '#989898',
    marginBottom: 20,
  },
  registerPasscode:{
    fontFamily :'Poppins-SemiBold',
    color: '#000000',
    fontSize: 14, 
    lineHeight: 22, 
    textAlign: 'left',
    marginBottom: 5.5,

  },
  passcodeInput:{
    fontFamily :'Poppins-Regular',
    fontSize: 17, 
    fontWeight: '790',
    lineHeight: 22, 
    color: '#B2B2B2',
    borderWidth: 1,
    borderColor: '#B2B2B2',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  }
});
