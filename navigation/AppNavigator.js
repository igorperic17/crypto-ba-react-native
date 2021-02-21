import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

console.log(NavigationContainer);
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
// import SettingsScreen from '../screens/SettingsScreen';

const AppNavigator = () => {

  const MainTabNavigator = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <MainTabNavigator.Navigator>
        <MainTabNavigator.Screen name="Services" component={HomeScreen}/>
        {/* <MainTabNavigator.Screen name="About us" component={SettingsScreen}/> */}
      </MainTabNavigator.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;
