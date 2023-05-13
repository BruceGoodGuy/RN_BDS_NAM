/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TOKEN_LATEST_USERNAME } from '../../screens/Services/constants';
import authHook from './AuthHook';

export const saveNumberPhone = async data => {
  try {
    await AsyncStorage.setItem(TOKEN_LATEST_USERNAME, JSON.stringify(data));
  } catch (error) {
    throw new Error(error);
  }
};

//  get Username from localStorage
export const getNumberPhone = async () => {
  try {
    let latestPhoneNumber = await AsyncStorage.getItem(TOKEN_LATEST_USERNAME);
    return latestPhoneNumber;
  } catch (error) {
    return null;
  }
};

