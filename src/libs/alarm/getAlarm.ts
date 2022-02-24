import {getAlarms as RNGetAlarms} from 'react-native-simple-alarm';
import {getAlarmById as RNGetAlarmById} from 'react-native-simple-alarm';
import {useDispatch} from 'react-redux';
import * as AL from '../../store/alarmList';

const dispatch = useDispatch();

export const getAlarms = async () => {
  try {
    await RNGetAlarms().then(response => {
      console.log('겟알람');
      if (response) dispatch(AL.getAction([...response]));
      else console.log('cannot get alarms');
    });
  } catch (error) {
    console.log('setting call error' + error);
  }
};

// export const getAlarmById = async (oid: string | number) => {
//   // let id = '07699912-87d9-11ea-bc55-0242ac130003';
//   try {
//     return await RNGetAlarmById(oid);
//   } catch (error) {
//     console.log('in getAlarmById: ', error);
//   }
// };
