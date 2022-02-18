import React, {ComponentProps, useEffect, useState} from 'react';
import type {FC} from 'react';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {createAlarm} from 'react-native-simple-alarm';
import {Modal, Pressable, StyleSheet} from 'react-native';
// prettier-ignore
import { NavigationHeader, Text, View, MaterialCommunityIcon as Icon, TextInput,} from '../theme';
import {Colors} from 'react-native-paper';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import EditMessage from './EditMessage';
import {useNavigation} from '@react-navigation/native';
import {ModalStackParamList} from './StackNavigator';

type modalScreenProp = StackNavigationProp<ModalStackParamList, 'TimeModal'>;

const TimeModal = () => {
  const navigation = useNavigation<modalScreenProp>();
  const [date, setDate] = useState<Date>(moment(new Date()).toDate());
  const [message, setMessage] = useState<string>('Empty string');
  const onChange = (event: Event, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };
  useEffect(() => {
    console.log(date);
  }, [date]);

  const handleTimePicked = async () => {
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
    console.log('date ' + date + '\n\n');
    console.log('\n\n');
  };
  //prettier-ignore
  const optionData = [ {title: 'Repeat', content: 'Never'}, {title: 'Song', content: 'Marimba'}, {title: 'Label', content: 'time to wake up'},
  ];
  return (
    <View style={[styles.modalView]}>
      <NavigationHeader
        title="Add Alarm"
        Left={() => (
          <Pressable style={[styles.pressable]} onPress={() => {}}>
            <Text style={[styles.textStyle]}>Cancel</Text>
          </Pressable>
        )}
        Right={() => (
          <Pressable style={[styles.pressable]} onPress={handleTimePicked}>
            <Text style={[styles.textStyle]}>Save</Text>
          </Pressable>
        )}
      />
      <DatePicker
        date={date}
        mode="time"
        onDateChange={date => setDate(date)}
      />

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
              onPress={() => navigation.navigate('EditMessage')}>
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
  modalView: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  pressable: {padding: 8, margin: 4},
  textStyle: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.blue500,
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
