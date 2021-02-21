import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBarIcon from '../components/TabBarIcon';
import ServicesScreen from '../screens/ServicesScreen';
import RxcScreen from '../screens/RxcScreen';
import AboutUsScreen from '../screens/AboutUsScreen';

const AppNavigator = () => {

  const MainTabNavigator = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <MainTabNavigator.Navigator 
      screenOptions={ ({ route }) => ({
        tabBrarIcon: ({ color }) => {
          let icon;
          if (route.name === 'Services') {
            icon = 'S';
          } else if (route.name === 'About Us') {
            icon = 'A';
          }
          return <TabBarIcon name={route.name}></TabBarIcon>
          // return <Text style={{color: color}}>{icon}</Text>
        }
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        activeBackgroundColor: '#111A2B',
        inactiveBackgroundColor: '#00091A',
      }}
      >
        <MainTabNavigator.Screen name="Services" component={ServicesScreen}/>
        <MainTabNavigator.Screen name="RXC" component={RxcScreen}/>
        <MainTabNavigator.Screen name="About us" component={AboutUsScreen}/>
      </MainTabNavigator.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;

// const styles = StyleSheet.create({
  
// });