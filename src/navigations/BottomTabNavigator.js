/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
import {COLORS, ROUTES} from '../constants';
import {Account, History, Home, Product} from '../screens';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AuthNavigator from './AuthNavigator';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#1D95F0"
      labelStyle={{fontSize: 12}}
      style={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name={ROUTES.HOME_TAB}
        component={Home}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarOptions: { 
            activeTintColor: '#000',
            inactiveTintColor: '#fff',
          },
          tabBarActiveTintColor: '#1D95F0',
          tabBarIcon: ({color,focused}) => (
            <Image source={focused ? require('../assets/icons/icon-home-active.png') : require('../assets/icons/icon-home.png')} />
          ),
          headerTitleAlign: 'center',
          headerShown:false,
         // title:'Diamond Tree',
          // headerTintColor: '#FFF',
          // headerStyle: {
          //   backgroundColor: 'orange',
          // },
        }}
      />
      <Tab.Screen
        name={ROUTES.HISTORY}
        component={History}
        options={{
          tabBarLabel: 'Lịch Sử',
          tabBarOptions: {
            activeTintColor: '#000',
            inactiveTintColor: '#fff',
          },
          tabBarIcon: ({color,focused}) => (
            <Image source={focused ? require('../assets/icons/icon-wallet-active.png') : require('../assets/icons/icon-wallet.png')} />

          ),
          headerTitleAlign: 'center',
          title:'Lịch Sử Giao Dịch',
        }}
      />
      <Tab.Screen
        name={ROUTES.PRODUCT}
        component={Product}
        options={{
           tabBarLabel: 'Sản Phẩm',
           tabBarOptions: {
            activeTintColor: '#000',
            inactiveTintColor: '#fff',
          },
          tabBarActiveTintColor: '#1D95F0',
          tabBarIcon: ({color,focused}) => (
            <Image source={focused ? require('../assets/icons/icon-product-ative.png') : require('../assets/icons/icon-product.png')} />

          ),
          title:'Sản Phẩm',
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name={ROUTES.ACCOUNT_NAVIGATOR}
        component={Account}
        options={{
          tabBarLabel: 'Tài Khoản',
          tabBarActiveTintColor: '#1D95F0',
          tabBarIcon: ({color,focused}) => (
            <Image source={focused ? require('../assets/icons/icon-account-active.png') : require('../assets/icons/icon-account.png')} />
          ),
           title:'Tài Khoản',
          headerTitleAlign: 'center',
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: COLORS.transparent,
    borderTopWidth: 0,
    bottom: 15,
    right: 10,
    left: 10,
    height: 92,
  },
});
