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
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  NativeModules
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// const { AlarmModule } = NativeModules;
import { createAlarm, getAlarms } from 'react-native-simple-alarm';
import moment from 'moment'
// import ExtremeAlarmModule from './native-modules/AlarmModule';
// import ReactNativeApp from './components/ReactNativeSampleAppComponent'
// import NativeAlarmModuleApp from './components/NativeAlarmModuleComponent';

const mycreateAlarm = async () => {
  try {
    await createAlarm({
        active: false,
        date: new Date().toISOString(),
        message: 'message',
        snooze: 1,
      });
  } catch (e) {}
}


const mygetAlarms = async () => {
  try {
    const alarms = await getAlarms();
    console.log(alarms)
  } catch (e) {}
}

const App = () => {
  const onPress = () => {
    // mycreateAlarm()
    mygetAlarms()
  };

  return (
    <View style={{
      marginTop: 32,
      paddingHorizontal: 24,
    }}>
      <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
      />
    </View>
  
  );
};



export default App;
