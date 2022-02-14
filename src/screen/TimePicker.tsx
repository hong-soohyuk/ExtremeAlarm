import React, {useState} from 'react';
import type {FC} from 'react';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {createAlarm} from 'react-native-simple-alarm';

type TimePickerProps = {
  open: boolean;
  setOpen: (active: boolean) => void;
  // isActive: boolean;
  // setIsActive: (active: boolean) => void;
};

const TimePicker: FC<TimePickerProps> = props => {
  const {open, setOpen} = props;

  const [date, setDate] = useState<Date>(new Date());

  function handleTimePicked(picked_Date: Date) {
    setDate(picked_Date);
    createAlarm({
      active: true,
      date: date,
      message: 'first sample alarm',
      snooze: 1,
    });

    setOpen(false);
  }
  return (
    <DatePicker
      modal
      title={'select your time'}
      open={open}
      date={date}
      onConfirm={handleTimePicked}
      onCancel={() => setOpen(false)}
      mode="time"
    />
  );
};
export default TimePicker;
