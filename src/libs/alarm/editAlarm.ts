import {activateAlarmById, cancelAlarmById} from 'react-native-simple-alarm';
import {Alarm as AlarmType} from 'react-native-simple-alarm/dist/Types';
import {editAlarm as RNEditAlarm} from 'react-native-simple-alarm';
import moment from 'moment';

type editAlarmByIdProps = AlarmType;

export const switchAlarmById = async (props: editAlarmByIdProps) => {
  const {oid, active, date, message, snooze} = props;
  if (oid) {
    try {
      active ? await cancelAlarmById(oid) : await activateAlarmById(oid);
    } catch (error) {
      console.log('in switchAlarmById: ', error);
    }
  } else
    console.log('alarm without oid: ', {oid, active, date, message, snooze});
};

const editAlarm = async (props: editAlarmByIdProps) => {
  const {oid, active, date, message, snooze} = props;
  try {
    await RNEditAlarm({
      oid,
      date: moment().add(1, 'days').format(),
      // it was...  date: moment().add(1, 'days')format();,
      snooze: 1,
      message: 'Message',
      active: true,
    });
  } catch (error) {
    console.log('in editAlarm :', error);
  }
};
