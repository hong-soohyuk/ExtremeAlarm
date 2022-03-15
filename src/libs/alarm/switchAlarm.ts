import {
  activateAlarmById as RNactivateAlarmById,
  cancelAlarmById as RNcancelAlarmById,
} from 'react-native-simple-alarm';
import {AlarmType} from '.';
import {useDispatch} from 'react-redux';
import * as AL from '../../store/alarmList';

export const cancelAlarmById = async (props: AlarmType) => {
  if (props.oid) {
    try {
      await RNcancelAlarmById(props.oid);
    } catch (error) {
      console.log('in cancelAlarmById: ', error);
    }
  } else console.log('alarm without oid: ');
};

export const activateAlarmById = async (props: AlarmType) => {
  if (props.oid) {
    try {
      await RNactivateAlarmById(props.oid);
    } catch (error) {
      console.log('in activateAlarmById: ', error);
    }
  } else console.log('alarm without oid: ');
};
