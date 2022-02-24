import type {Action} from 'redux';
import {AlarmType} from '../../libs/alarm/alarmType';

export type State = AlarmType[];

export type AddAction = Action<'@alarm/add'> & {
  payload: AlarmType;
};

export type EditAction = Action<'@alarm/edit'> & {
  payload: AlarmType['oid'];
};

export type DeleteAction = Action<'@alarm/delete'> & {
  payload: AlarmType[];
};

export type DeleteAllAction = Action<'@alarm/deleteAll'>;

export type GetAction = Action<'@alarm/get'> & {
  payload: AlarmType[];
};

export type Actions =
  | AddAction
  | EditAction
  | DeleteAction
  | DeleteAllAction
  | GetAction;
