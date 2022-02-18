import React, {ComponentProps, useEffect, useState} from 'react';
import type {FC} from 'react';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {createAlarm} from 'react-native-simple-alarm';
import {Pressable, StyleSheet} from 'react-native';
import {NavigationHeader, Text, View} from '../theme';
import {Colors} from 'react-native-paper';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {ModalStackParamList} from './StackNavigator';

type alarmScreenProp = StackNavigationProp<ModalStackParamList, 'AddAlarm'>;

const TimeModal = () => {
  const navigation = useNavigation<alarmScreenProp>();
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
            handleTimePicked();
            navigation.goBack();
          }}>
          <Text
            style={[{fontSize: 18, color: Colors.blue500, fontWeight: '600'}]}>
            Save
          </Text>
        </Pressable>
      ),
    });
  }, [navigation]);
  const [date, setDate] = useState<Date>(new Date());
  useEffect(() => console.log('useEffect', date), [date]); //debug sync
  // const [date, setDate] = useState<Date>(moment(new Date()).toDate());
  const [message, setMessage] = useState<string>('Empty string');

  //prettier-ignore
  const optionData = [ {title: 'Repeat', content: 'Never'}, {title: 'Song', content: 'Marimba'}, {title: 'Label', content: 'time to wake up'}];

  const handleTimeChange = (picked_Date: Date) => {
    console.log('handling time change: ', picked_Date);
    setDate(picked_Date);
    console.log('state time: ', date);
  };
  const handleTimePicked = async () => {
    console.log('before submit: ', date);
    try {
      await createAlarm({
        active: true,
        date: date.toISOString(),
        message: message,
        snooze: 1,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={[styles.view]}>
      <DatePicker date={date} mode="time" onDateChange={handleTimeChange} />
      <View style={[styles.tapListView]}>
        <FlatList
          data={optionData}
          ItemSeparatorComponent={props => {
            return (
              <View
                style={{
                  height: 1,
                  marginHorizontal: 20,
                  backgroundColor: 'lightgray',
                }}
              />
            );
          }}
          renderItem={({item, index, separators}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Message', {message, setMessage})
              }>
              <View style={[styles.tapItemView]}>
                <Text style={[{fontSize: 20, color: Colors.grey900}]}>
                  {item.title}
                </Text>
                <Text style={[{fontSize: 20, color: Colors.grey600}]}>
                  {item.content}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  tapListView: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
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
});

export default TimeModal;
