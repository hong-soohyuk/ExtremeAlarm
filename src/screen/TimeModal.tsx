import React, {ComponentProps, useCallback, useEffect, useState} from 'react';
import type {FC} from 'react';
import DatePicker from 'react-native-date-picker';
//prettier-ignore
import { Pressable, StyleSheet, Text, View, Switch} from 'react-native';
import {FlatList, State, TouchableOpacity} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {ModalStackParamList} from './StackNavigator';
import {createAlarm, createAlarmProps} from '../libs/alarm';
import {Colors} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../store';
import * as A from '../store/alarm';

type alarmScreenProp = StackNavigationProp<ModalStackParamList, 'AddAlarm'>;

const TimeModal = () => {
  const navigation = useNavigation<alarmScreenProp>();

  //prettier-ignore
  const {active, date, message, snooze, soundName} = useSelector<AppState, A.State>(({alarm}) => alarm);
  const dispatch = useDispatch();
  const initialState = useCallback(() => {
    dispatch(A.cancelAction());
  }, []);
  useEffect(initialState, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={[{fontSize: 18, color: Colors.blue500}]}>Cancel</Text>
        </Pressable>
      ),
      headerRight: () => (
        <Pressable
          onPress={() => {
            createAlarm({active, date, message, snooze, soundName});
            navigation.goBack();
          }}>
          <Text
            style={[{fontSize: 18, color: Colors.blue500, fontWeight: '600'}]}>
            Save
          </Text>
        </Pressable>
      ),
    });
  }, [date, navigation]);
  //header setting

  const optionData = [
    {navigateTo: 'Message', value: message},
    {navigateTo: 'Repeat', value: 'Never'},
    {navigateTo: 'Song', value: 'Marimba'}, //soundName
  ];

  return (
    <View style={[styles.view]}>
      <DatePicker
        date={date}
        mode="time"
        onDateChange={selectedDate =>
          dispatch(A.updateAction('date', selectedDate))
        }
      />
      <View style={[styles.tapListView]}>
        <FlatList
          data={optionData}
          ItemSeparatorComponent={props => {
            return <View style={[styles.seperator]} />;
          }}
          renderItem={({item, index, separators}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(item.navigateTo)}>
              <View style={[styles.tapItemView]}>
                <Text style={[{fontSize: 20, color: Colors.grey900}]}>
                  {item.navigateTo}
                </Text>
                <Text style={[{fontSize: 20, color: Colors.grey600}]}>
                  {item.value}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <View style={[styles.seperator]} />
        <TouchableOpacity disabled={true}>
          <View style={[styles.tapItemView]}>
            <Text style={[{fontSize: 20, color: Colors.grey900}]}>Active</Text>
            <Switch
              value={active}
              onChange={() => {
                dispatch(A.updateAction('active', !active));
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  tapListView: {
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: Colors.grey200,
  },
  tapItemView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    marginLeft: 12,
    marginRight: 12,
    margin: 10,
  },
  seperator: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: 'lightgray',
  },
});

export default TimeModal;
