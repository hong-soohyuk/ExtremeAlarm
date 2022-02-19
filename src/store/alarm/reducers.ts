import {Dispatch} from 'redux';
import * as T from './types';

const initialAlarmState: T.State = {
  active: false,
  date: new Date(),
  message: 'empty strg',
  snooze: 1,
  soundName: '',
};

export const reducer = (state = initialAlarmState, action: T.Actions) => {
  switch (action.type) {
    case '@alarm/update':
      return {...state, [action.fieldName]: action.value};
    case '@alarm/cancel':
      return initialAlarmState;
  }
  return state;
};

export const getAlarmss = (dispatch: Dispatch) => {};
