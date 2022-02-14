import React, {useState} from 'react';
import type {FC} from 'react';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {createAlarm} from 'react-native-simple-alarm';
import {AppState, Locale} from '../store';
import {useSelector} from 'react-redux';

type TimePickerProps = {
  open: boolean;
  setOpen: (active: boolean) => void;
  // isActive: boolean;
  // setIsActive: (active: boolean) => void;
};

const TimePicker: FC<TimePickerProps> = props => {
  const initialLocale = useSelector<AppState, Locale>(state => state.locale);
  const isoCode = initialLocale.isoCode;
  const {open, setOpen} = props;

  function handleTimePicked(picked_Date: Date) {
    console.log('iso code in this', isoCode);
    console.log('picked date', picked_Date);
    createAlarm({
      active: true,
      date: picked_Date.toISOString(),
      message: 'sample alarm',
      snooze: 1,
    });

    setOpen(false);
  }
  return (
    <DatePicker
      modal
      timeZoneOffsetInMinutes={0} // is this necessary????? 존나...
      locale={initialLocale.isoCode}
      title={'select your time'}
      open={open}
      date={new Date()}
      onConfirm={handleTimePicked}
      onCancel={() => setOpen(false)}
    />
  );
};
export default TimePicker;
