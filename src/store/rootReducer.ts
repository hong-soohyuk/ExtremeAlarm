import {combineReducers} from 'redux';
import * as A from './alarm';
import * as AL from './alarmList';

//prettier-ignore
export const rootReducer = combineReducers({
  alarm: A.reducer,
  alarmList: AL.reducer
})
