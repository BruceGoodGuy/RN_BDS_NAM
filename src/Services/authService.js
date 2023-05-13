/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from './Api';
import axios from 'axios';

const logIn = async data => {
  try {
   // const {phonenumber, password} = data;
    const response = await api.post('/login', data);
    console.log('meoemo: ', response);
   //return response.data;
  } catch (error) {
    console.log('err: ', error);
  }
};

const logOut = async () => {
  AsyncStorage.clear();
  return {
    status: 'success',
    message: 'You are logged out',
  };
};
export default {
  logIn,
  logOut,
};
