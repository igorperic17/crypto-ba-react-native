import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBarIcon from '../components/TabBarIcon';
import ServicesScreen from '../screens/ServicesScreen';
import RxcScreen from '../screens/RxcScreen';
import AboutUsScreen from '../screens/AboutUsScreen';

import { Platform, StyleSheet } from 'react-native';

const AppNavigator = () => {

  const MainTabNavigator = createBottomTabNavigator();

  return (
    <NavigationContainer style={styles.container}>
      <MainTabNavigator.Navigator 
      initialRouteName="services"
      screenOptions={ ({ route }) => ({
        tabBarIcon: ({ color }) => {
          let icon;
          if (route.name === 'services') {
            icon = require('../assets/images/icons/services-layer.png');
          } else if (route.name === 'rxc') {
            icon = require('../assets/images/icons/crypto-ba-logo.png');
          } else if (route.name === 'about us') {
            icon = require('../assets/images/icons/about.png');
          }
          return <TabBarIcon text={route.name} image={icon}></TabBarIcon>
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        activeBackgroundColor: '#111A2B',
        inactiveBackgroundColor: '#00091A',
        safeAreaInsets: {
          bottom: 0,
        },
        showLabel: false,
        style: {
          ...Platform.select({
            ios: {
              height: 90
            },
            android: {
              height: 60
            }
          }),
          borderTopWidth: 2
        }
      }}
      >
        <MainTabNavigator.Screen name="services" component={ServicesScreen}/>
        <MainTabNavigator.Screen name="rxc" component={RxcScreen}/>
        <MainTabNavigator.Screen name="about us" component={AboutUsScreen}/>
      </MainTabNavigator.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'blue'
    height: 100
  }
});