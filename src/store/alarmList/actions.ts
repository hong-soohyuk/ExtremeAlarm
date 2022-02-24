import type * as T from './types';
import {AlarmType} from '../../libs/alarm/alarmType';

//new Alarm
export const addAction = (payload: AlarmType): T.AddAction => ({
  type: '@alarm/add',
  payload,
});

//return full array
export const deleteAction = (payload: AlarmType[]): T.DeleteAction => ({
  type: '@alarm/delete',
  payload,
});

//return empty array
export const deleteAllAction = (): T.DeleteAllAction => ({
  type: '@alarm/deleteAll',
});

//return alarm array
export const editAction = (payload: AlarmType['oid']): T.EditAction => ({
  type: '@alarm/edit',
  payload,
});

export const getAction = (payload: AlarmType[]): T.GetAction => ({
  type: '@alarm/get',
  payload,
});
