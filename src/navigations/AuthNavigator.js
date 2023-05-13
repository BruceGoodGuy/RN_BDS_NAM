/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, ForgotPassword, Register, Home, Profile, ChangePassword, ProductDetail} from '../screens';
import {COLORS, ROUTES} from '../constants';
import BottomTabNavigator from './BottomTabNavigator';
import ChangeProfile from '../screens/account/ChangeProfile';
// import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();
// Navigator, Screen, Group

function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen
          name={ROUTES.FORGOT_PASSWORD}
          component={ForgotPassword}
          options={({route}) => ({
            headerTintColor: COLORS.white,
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
             headerShown: false,
            // title: route.params.userId,
          })}
        />
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} options={{headerShown: false}} />
      <Stack.Screen name={ROUTES.HOME} component={BottomTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name={ROUTES.PROFILE} component={Profile} options={{title:'Thông Tin Tài Khoản', headerTitleAlign: 'center'}} />
      <Stack.Screen name={ROUTES.CHANGEPASS} component={ChangePassword} options={{headerShown: false}} />
      <Stack.Screen name={ROUTES.PRODUCTDETAIL} component={ProductDetail} options={{title: 'Chi Tiết Sản Phẩm', headerTitleAlign: 'center'}} />
      <Stack.Screen name={ROUTES.CHANGEPROFILE} component={ChangeProfile} options={{title: 'Thay đổi thông tin tài khoản', headerTitleAlign: 'center'}} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
