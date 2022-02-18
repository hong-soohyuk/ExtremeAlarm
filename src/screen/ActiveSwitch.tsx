import React from 'react';
import type {FC, ComponentProps} from 'react';
import {Switch as ReactNativeSwitch} from 'react-native';
import * as D from '../data';
import {activateAlarmById, cancelAlarmById} from 'react-native-simple-alarm';

export type SwitchProps = ComponentProps<typeof ReactNativeSwitch> &
  D.AlarmType;

const ActiveSwitch: FC<SwitchProps> = props => {
  const {oid, active, date, message, snooze} = props;
  async function editActive() {
    if (oid) {
      try {
        active ? await cancelAlarmById(oid) : await activateAlarmById(oid);
      } catch (error) {
        console.log('switch', error);
      }
    }
  }
  return (
    <ReactNativeSwitch {...props} value={active} onValueChange={editActive} />
  );
};
export default ActiveSwitch;
