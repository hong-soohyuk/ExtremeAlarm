import React from 'react';
//prettier-ignore
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Button, NativeModules } from 'react-native';
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

const mycreateAlarm = async () => {
  try {
    await createAlarm({
      active: false,
      date: new Date().toISOString(),
      message: 'message',
      snooze: 1,
    });
  } catch (e) {}
};

const mygetAlarms = async () => {
  try {
    const alarms = await getAlarms();
    console.log(alarms);
  } catch (e) {}
};

const App = () => {
  const onPress = () => {
    // mycreateAlarm();
    mygetAlarms();
  };

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
