import {getAlarms} from '../../libs/alarm';
import * as T from './types';

const initialAlarmState: T.State = [];
// active: true,
// date: new Date().toISOString(),
// message: 'empty string!',
// snooze: 1,
// soundName: '',

export const reducer = (state = initialAlarmState, action: T.Actions) => {
  switch (action.type) {
    case '@alarm/add':
      return [...state, action.payload];
    case '@alarm/delete':
      return [...action.payload];
    case '@alarm/deleteAll':
      return initialAlarmState;
    case '@alarm/edit':
      return state.map(alarm => {
        if (alarm.oid === action.payload) {
          return {...alarm, active: alarm.active ? false : true};
        }
      });
    case '@alarm/get':
      return [...action.payload];
  }
  return state;
};
