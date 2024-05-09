import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';

import Community from '../screens/Community';
import Dashboard from '../screens/Dashboard';
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeInActive from '../assests/public/Home_InActive.png';
import CommunityInActive from '../assests/public/Community_InActive.png';
import DashboardInActive from '../assests/public/Dashboard_InActive.png';
import NotificationInActive from '../assests/public/Notification_InActive.png';
import HomeActive from '../assests/public/Home_Active.png';
import CommunityActive from '../assests/public/Community_Active.png';
import DashboardActive from '../assests/public/Dashboard_Active.png';
import NotificationActive from '../assests/public/Notification_Active.png';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

const BottomNavigator = () => {
  const Drawer = createBottomTabNavigator();
  const activeTab = useState(0);
  const translateY = useSharedValue(0);
  // custom bottom bar
  function MyTabBar({state, descriptors, navigation}) {
    return (
      <View style={styles.bottomTabContainer}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          let iconSource;
          const isFocused = state.index === index;
          switch (route.name) {
            case 'Home':
              iconSource = isFocused ? HomeActive : HomeInActive;
              break;
            case 'Community':
              iconSource = isFocused ? CommunityActive : CommunityInActive;
              break;
            case 'Dashboard':
              iconSource = isFocused ? DashboardActive : DashboardInActive;
              break;
            case 'Notification':
              iconSource = isFocused
                ? NotificationActive
                : NotificationInActive;
              break;
            default:
              iconSource = isFocused ? HomeActive : HomeInActive;
          }
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }

            translateY.value = withSpring(translateY.value - 10);
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          // const animateStyle = {
          //   transform,
          // };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabButton}
              activeOpacity={1}>
              <Animated.View
                style={[
                  styles.iconContainer,
                  {transform: [{translateY}]},
                  // isFocused && styles.iconContainerActive,
                ]}>
                <Image source={iconSource} style={styles.iconStyle} />
              </Animated.View>
              <Text style={styles.tabLabel}>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
  return (
    <Drawer.Navigator tabBar={props => <MyTabBar {...props}></MyTabBar>}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Drawer.Screen
        name="Community"
        component={Community}
        options={{
          tabBarLabel: 'Community',
        }}
      />
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={Notifications}
        options={{
          tabBarLabel: 'Notification',
        }}
      />
    </Drawer.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  bottomTabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 80,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'relative',
  },
  tabButton: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
  },

  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  // iconContainerActive: {
  //   backgroundColor: '#06A5D8',
  //   borderRadius: 100,
  //   paddingVertical: 10,
  //   paddingHorizontal: 10,
  //   transform: [{translateY: -15}],
  //   margin: 0,
  // },
  iconStyle: {
    width: 22,
    height: 22,
  },
  tabLabel: {color: '#8C8C8C'},
});
