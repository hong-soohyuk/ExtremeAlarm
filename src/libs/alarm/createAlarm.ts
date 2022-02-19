import {createAlarm as RNCreateAlarm} from 'react-native-simple-alarm';
import * as Localize from 'react-native-localize';
import moment from 'moment-timezone';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../store';
import * as A from '../../store/alarm';

export type createAlarmProps = {
  active: boolean; // Set to true when a push notification is scheduled.
  date: Date; // Date for alarm to get triggered. ISO Format. ex) 1996-10-15T00:05:32.000Z
  message: string; // Notification Message on Push Notification
  snooze: number; //Any data that is needed for the alarm. [Object]
  soundName: string;
  /*
  todo:
    id?: string | number | undefined; ??? Alarm의 oid 랑 다른건지 확인
      title?: string | undefined;
    message: string;
      userInfo?: any;
      playSound?: boolean | undefined;
    soundName?: string | undefined;
    number?: string | number | undefined;
    repeatType?: 'week' | 'day' | 'hour' | 'minute' | 'time' | undefined;
    repeatTime?: number | undefined;
  */
};

export const createAlarm = async (props: createAlarmProps) => {
  //prettier-ignore
  const {active, date, message, snooze, soundName} = props;

  const localTimeZoneStr = Localize.getTimeZone().toString();
  const timePickedTz = moment(date).tz(localTimeZoneStr).format();
  //strict

  console.log('알람 만드는 함수: ', timePickedTz);
  console.log('알람 만드는 함수: ', message);

  try {
    await RNCreateAlarm({
      active: active,
      date: timePickedTz,
      message: message,
      snooze: snooze,
      soundName: soundName,
    });
    console.log('알람 만들어짐: ', {
      active: active,
      date: timePickedTz,
      message: message,
      snooze: snooze,
      soundName: soundName,
    });
  } catch (error) {
    console.log(error);
  }
};
