/* eslint-disable prettier/prettier */
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';

const NavigationProvider = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn );
  return (
    <NavigationContainer>
      {isLoggedIn ? <AuthNavigator /> : <BottomTabNavigator />}
    </NavigationContainer>
  );
};
export default NavigationProvider;
