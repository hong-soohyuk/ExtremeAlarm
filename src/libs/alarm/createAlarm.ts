import {createAlarm as RNCreateAlarm} from 'react-native-simple-alarm';
import * as Localize from 'react-native-localize';
import moment from 'moment-timezone';
import {AlarmType} from '.';

export const createAlarm = async (props: AlarmType) => {
  const {active, date, message, snooze, soundName} = props;
  console.log('알람 만드는 함수, ', date);
  try {
    await RNCreateAlarm({
      active: active,
      date: date,
      message: message,
      snooze: snooze,
      soundName: soundName,
    });
  } catch (error) {
    console.log(error);
  }
};
