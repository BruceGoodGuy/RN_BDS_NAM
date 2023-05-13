/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import AuthNavigator from './src/navigations/AuthNavigator';
import BottomTabNavigator from './src/navigations/BottomTabNavigator';
import authHook from './src/Actions/Auth/AuthHook';
import NavigationProvider from './src/navigations/NavigationProvider';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/store';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {
  const GetFCMToken = async () => {
    // const fcmToken = await AsyncStorage.getItem('fcmtoken');
    // if (!fcmToken) {
    try {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log(fcmToken);
        // setTokenPush(fcmToken);
        // await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    } catch (error) {
      console.log(error, 'error in fcmtoken');
    }
    //  }
  };

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };

  const NotificationListner = () => {
    messaging().onNotificationOpenedApp(remoteMessage => {});
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
      });
    messaging().onMessage(async remoteMessage => {
      console.log(remoteMessage);
    });
  };

  // const ForegroundMessage = () => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     PushNotification.createChannel(
  //       {
  //         channelId: 'specialid',
  //         channelName: 'Special messasge',
  //         channelDescription: 'Notification for special message',
  //         importance: 4,
  //         vibrate: true,
  //       },
  //       created => console.log(`createChannel returned '${created}'`),
  //     );
  //     PushNotification.localNotification({
  //       channelId: 'specialid',
  //       title: remoteMessage.notification.title,
  //       message: remoteMessage.notification.body,
  //       smallIcon: 'ic_notification',
  //     });
  //   });

  //   return unsubscribe;
  // };

  const {token} = authHook();
  React.useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true, duration: 500});
    });
  }, []);
  React.useEffect(() => {
    requestUserPermission();
    NotificationListner();
    GetFCMToken();
    // ForegroundMessage();
  }, []);

  return (
    <StoreProvider store={store}>
      <SafeAreaProvider style={{flex: 1}}>
        <NavigationProvider />
      </SafeAreaProvider>
    </StoreProvider>
    // <NavigationContainer>
    //   {token ? <AuthNavigator /> : <BottomTabNavigator />}
    //   {/* <AuthNavigator /> */}
    // </NavigationContainer>
  );
}
