import {combineReducers} from 'redux';
import * as A from './alarm';

//prettier-ignore
export const rootReducer = combineReducers({
  alarm: A.reducer
})
