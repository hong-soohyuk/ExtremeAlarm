import React, {useEffect, useState} from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {makeStore} from './src/store';

//prettier-ignore
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
// const { AlarmModule } = NativeModules;

// import ExtremeAlarmModule from './native-modules/AlarmModule';
import ReactNativeApp from './components/ReactNativeSampleAppComponent';
import NativeAlarmModuleApp from './components/NativeAlarmModuleComponent';
import RNSoundWrapperComponent from './components/RNSoundWrapperComponent';
import {ActionConst, Router, Scene} from 'react-native-router-flux';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/screen/TabNavigator';

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
