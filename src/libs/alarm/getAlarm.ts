import {Alarm as AlarmType} from 'react-native-simple-alarm/dist/Types';
import {getAlarms as RNGetAlarms} from 'react-native-simple-alarm';
import {getAlarmById as RNGetAlarmById} from 'react-native-simple-alarm';

export const getAlarms = async () => {
  try {
    return await RNGetAlarms();
  } catch (error) {
    console.log('setting call error' + error);
  }
};

export const getAlarmById = async (oid: string | number) => {
  // let id = '07699912-87d9-11ea-bc55-0242ac130003';
  try {
    const alarm = await RNGetAlarmById(oid);
  } catch (error) {
    console.log('in getAlarmById: ', error);
  }
};
