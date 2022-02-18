import React, {
  ComponentProps,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import type {FC} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
// prettier-ignore
import {Colors} from 'react-native-paper';
import {AutoFocusProvider, useAutoFocus} from '../contexts';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {ModalStackParamList} from './StackNavigator';
import {StackNavigationProp} from '@react-navigation/stack';

type messageScreenProps = StackNavigationProp<ModalStackParamList, 'Message'>;
type messageRouteProps = RouteProp<ModalStackParamList, 'Message'>;

const EditMessage = () => {
  const navigation = useNavigation<messageScreenProps>();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Back',
    });
  }, [navigation]);

  const route = useRoute<messageRouteProps>();
  const focus = useAutoFocus();
  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>set your message</Text>
      <AutoFocusProvider contentContainerStyle={[styles.keyboardAwareFocus]}>
        <TextInput
          onFocus={focus}
          style={[styles.textInput]}
          value={route.params.message}
          onChangeText={route.params.setMessage}
        />
      </AutoFocusProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    marginTop: 30,
    fontSize: 18,
    color: Colors.grey800,
  },
  keyboardAwareFocus: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textInput: {
    width: '95%',
    marginTop: 10,
    padding: 5,
    fontSize: 24,
    borderRadius: 5,
    backgroundColor: Colors.grey300,
  },
});
export default EditMessage;
