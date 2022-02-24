import {
  deleteAlarmById as RNDeleteAlarmById,
  deleteAllAlarms as RNDeleteAllAlarms,
} from 'react-native-simple-alarm';
import {AlarmType} from '.';
import {useDispatch} from 'react-redux';
import * as AL from '../../store/alarmList';

const dispatch = useDispatch();

export const deleteAlarmById = async (oid: AlarmType['id']) => {
  if (oid) {
    try {
      await RNDeleteAlarmById(oid).then(response => {
        dispatch(AL.deleteAction([...response]));
      });
    } catch (error) {
      console.log('deleting alarm by id error: ', error);
    }
  } else console.log('OID of the alarm is undefined');
};

export const deleteAllAlarms = async () => {
  try {
    await RNDeleteAllAlarms().then(response => {
      dispatch(AL.deleteAllAction());
    });
  } catch (error) {
    console.log('delete error' + error);
  }
};
