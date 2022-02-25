import {activateAlarmById, cancelAlarmById} from 'react-native-simple-alarm';
import * as Localize from 'react-native-localize';
import {editAlarm as RNEditAlarm} from 'react-native-simple-alarm';
import moment from 'moment-timezone';
import {AlarmType} from '.';
import {useDispatch} from 'react-redux';
import * as AL from '../../store/alarmList';

export const switchAlarmById = async (props: AlarmType) => {
  if (props.oid) {
    console.log('스위칭', JSON.stringify(props));
    try {
      props.active
        ? await cancelAlarmById(props.oid).then(response => {
            console.log('캔슬', JSON.stringify(response)); //여기서 왜 시간이 지 맘대로 바뀌냐고
          })
        : await activateAlarmById(props.oid);
    } catch (error) {
      console.log('in switchAlarmById: ', error);
    }
  } else console.log('alarm without oid: ');
};

const editAlarm = async (props: AlarmType) => {
  const {oid, active, date, message, snooze} = props;

  const localTimeZoneStr = Localize.getTimeZone().toString();
  const timePickedTz = moment(date).tz(localTimeZoneStr).format();
  //strict

  try {
    console.log('editAlarm called', {oid, date, snooze, message, active});
    await RNEditAlarm({
      oid,
      date: timePickedTz,
      // date: moment().add(1, 'days').format(), it was...  date: moment().add(1, 'days')format();,
      snooze: 1,
      message: 'Message',
      active: true,
    });
  } catch (error) {
    console.log('in editAlarm :', error);
  }
};
