import {
  deleteAlarmById as RNDeleteAlarmById,
  deleteAllAlarms as RNDeleteAllAlarms,
} from 'react-native-simple-alarm';
import {AlarmType} from '.';

export const deleteAlarmById = async (oid: AlarmType['id']) => {
  if (oid) {
    try {
      await RNDeleteAlarmById(oid);
    } catch (error) {
      console.log('deleting alarm by id error: ', error);
    }
  } else {
    console.log('OID of the alarm is undefined');
  }
};

export const deleteAllAlarms = async () => {
  try {
    await RNDeleteAllAlarms();
  } catch (error) {
    console.log('delete error' + error);
  }
};
