import * as T from './types';

const initialAlarmState: T.State = {
  active: true,
  date: new Date().toISOString(),
  message: 'empty string!',
  snooze: 1,
  soundName: '',
};

export const reducer = (state = initialAlarmState, action: T.Actions) => {
  switch (action.type) {
    case '@alarm/update':
      console.log('업뎃 액션ㅇㅇ ', action.propertyName, action.value);
      return {...state, [action.propertyName]: action.value};
    case '@alarm/reset':
      console.log('리셋 액션ㅇㅇ 이니셜 스테이트');
      return initialAlarmState;
  }
  return state;
};
