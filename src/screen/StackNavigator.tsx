import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TransitionPresets} from '@react-navigation/stack';
import Home from './Home';
import TimeModal from './TimeModal';
import EditMessage from './EditMessage';
import {Pressable, StyleSheet, Text} from 'react-native';
import {Colors} from 'react-native-paper';

export type RootStackParamList = {
  Home: undefined;
  ModalStackView: undefined;
};
export type ModalStackParamList = {
  AddAlarm: undefined;
  Message: {message: string; setMessage: (val: string) => void};
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const ModalStack = createNativeStackNavigator<ModalStackParamList>();

const ModalStackView = () => {
  return (
    <ModalStack.Navigator screenOptions={{headerShown: false}}>
      <ModalStack.Screen
        name="AddAlarm"
        component={TimeModal}
        options={{
          headerShown: true,
          title: 'Add Alarm',
          presentation: 'modal',
          ...TransitionPresets.ModalPresentationIOS,
         
        }}
      />
      <ModalStack.Screen
        name="Message"
        component={EditMessage}
        options={{
          headerShown: true,
          presentation: 'card',
        }}
      />
    </ModalStack.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
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

export default StackNavigator;
