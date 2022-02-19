import {useCallback} from 'react';
import {
  deleteAlarmById as RNDeleteAlarmById,
  deleteAllAlarms as RNDeleteAllAlarms,
} from 'react-native-simple-alarm';
import {Alarm as AlarmType} from 'react-native-simple-alarm/dist/Types';

type deleteAlarmProps = AlarmType;

export const deleteAlarmById = async (props: deleteAlarmProps) => {
  const {oid} = props;
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
