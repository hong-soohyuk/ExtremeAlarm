import React, {useEffect, useState} from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {makeStore} from './src/store';

//prettier-ignore
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Button,
   NativeModules, Platform } from 'react-native';
//prettier-ignore
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

// const { AlarmModule } = NativeModules;
import {createAlarm, getAlarms} from 'react-native-simple-alarm';
import moment from 'moment';

// import ExtremeAlarmModule from './native-modules/AlarmModule';
import ReactNativeApp from './components/ReactNativeSampleAppComponent';
import NativeAlarmModuleApp from './components/NativeAlarmModuleComponent';
import RNSoundWrapperComponent from './components/RNSoundWrapperComponent';
import {ActionConst, Router, Scene} from 'react-native-router-flux';
import Home from './src/Home/Home';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/screen/TabNavigator';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';

const store = makeStore();

// // Must be outside of any component LifeCycle (such as `componentDidMount`).
// PushNotification.configure({
//   // (optional) Called when Token is generated (iOS and Android)
//   onRegister: function (token) {
//     console.log('TOKEN:', token);
//   },

//   // (required) Called when a remote is received or opened, or local notification is opened
//   onNotification: function (notification) {
//     console.log('NOTIFICATION:', notification);

//     // process the notification

//     // (required) Called when a remote is received or opened, or local notification is opened
//     notification.finish(PushNotificationIOS.FetchResult.NoData);
//   },

//   // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
//   onAction: function (notification) {
//     console.log('ACTION:', notification.action);
//     console.log('NOTIFICATION:', notification);

//     // process the action
//   },

//   // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
//   onRegistrationError: function (err) {
//     console.error(err.message, err);
//   },

//   // IOS ONLY (optional): default: all - Permissions to register.
//   permissions: {
//     alert: true,
//     badge: true,
//     sound: true,
//   },

//   // Should the initial notification be popped automatically
//   // default: true
//   popInitialNotification: true,

//   /**
//    * (optional) default: true
//    * - Specified if permissions (ios) and token (android and ios) will requested or not,
//    * - if not, you must call PushNotificationsHandler.requestPermissions() later
//    * - if you are not using remote notification or do not have Firebase installed, use this:
//    *     requestPermissions: Platform.OS === 'ios'
//    */
//   requestPermissions: true,
// });

const App = () => {
  const [permissions, setPermissions] = useState({});
  useEffect(() => {
    const type = 'notification';
    PushNotificationIOS.addEventListener(type, onRemoteNotification);
    return () => {
      PushNotificationIOS.removeEventListener(type);
    };
  });

  const onRemoteNotification = (notification: any) => {
    const isClicked = notification.getData().userInteraction === 1;
    if (isClicked) {
      // Navigate user to another screen
    } else {
      // Do something else with push notification
    }
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default App;
