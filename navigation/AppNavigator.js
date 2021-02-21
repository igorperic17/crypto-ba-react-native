import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const AppNavigator = () => {

  const MainTabNavigator = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <MainTabNavigator.Navigator>
        <MainTabNavigator.Screen name="Servises" component={HomeScreen}/>
        <MainTabNavigator.Screen name="About us" component={SettingsScreen}/>
      </MainTabNavigator.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;
