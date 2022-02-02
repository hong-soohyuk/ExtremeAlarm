/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

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
import {ActionConst, Router, Scene} from 'react-native-router-flux';
import Home from './src/Home/Home';

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
    <Router>
      <Scene key={'rootSceen'}>
        <Scene key={'Home'} component={Home} />
        {/* <Scene key={'AddAlarm'} component={AddAlarm} type={ActionConst.RESET}/> */}
        {/* <Scene key={'EditAlarm'}component={EditAlarm} type={ActionConst.RESET}/> */}
      </Scene>
    </Router>
  );
};

export default App;
