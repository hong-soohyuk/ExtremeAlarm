import React from 'react';
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

//                              in rootReducer
// const deviceLanguage =
//   Platform.OS === 'ios'
//     ? NativeModules.SettingsManager.settings.AppleLocale ||
//       NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
//     : NativeModules.I18nManager.localeIdentifier; // Android
// console.log(deviceLanguage);

const store = makeStore();

const App = () => {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default App;
