import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {TransitionPresets} from '@react-navigation/stack';
import Home from './Home';
import TimeModal from './TimeModal';
import Message from './alarmDetail/Message';
import Song from './alarmDetail/Song';
import Repeat from './alarmDetail/Repeat';

export type RootStackParamList = {
  Home: undefined;
  ModalStackView: undefined; // stack navigation.
};
export type ModalStackParamList = {
  AddAlarm: undefined; // initial route of stack navigation
  Message: undefined;
  Song: undefined;
  Repeat: undefined;
};

const modalScreenOption: NativeStackNavigationOptions = {
  headerBackTitle: 'Back',
  presentation: 'card',
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const ModalStack = createNativeStackNavigator<ModalStackParamList>();

const StackNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen
        name="ModalStackView"
        component={ModalStackView}
        options={{
          headerShown: false,

          presentation: 'modal',
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
    </RootStack.Navigator>
  );
};

const ModalStackView = () => {
  return (
    <ModalStack.Navigator
      initialRouteName="AddAlarm"
      screenOptions={{headerShown: true}}>
      <ModalStack.Screen
        name="AddAlarm"
        component={TimeModal}
        options={{
          title: 'Add Alarm',
          presentation: 'modal',
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
      <ModalStack.Screen
        name="Message"
        component={Message}
        options={modalScreenOption}
      />
      <ModalStack.Screen
        name="Song"
        component={Song}
        options={modalScreenOption}
      />
      <ModalStack.Screen
        name="Repeat"
        component={Repeat}
        options={modalScreenOption}
      />
    </ModalStack.Navigator>
  );
};

export default StackNavigator;
