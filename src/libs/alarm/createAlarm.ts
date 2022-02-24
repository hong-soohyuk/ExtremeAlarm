import {createAlarm as RNCreateAlarm} from 'react-native-simple-alarm';
import * as Localize from 'react-native-localize';
import moment from 'moment-timezone';
import {AlarmType} from '.';
import {useDispatch, useSelector} from 'react-redux';
import * as A from '../../store/alarm';
import * as AL from '../../store/alarmList';
import {AppState} from '../../store';

const dispatch = useDispatch();

export const createAlarm = async (props: AlarmType) => {
  const {active, date, message, snooze, soundName} = props;
  try {
    await RNCreateAlarm({
      active: active,
      date: date,
      message: message,
      snooze: snooze,
      soundName: soundName,
    }).then(response => {
      dispatch(AL.addAction({...response}));
    });
  } catch (error) {
    console.log(error);
  }
};
