import type {Action} from 'redux';
import {AlarmType} from '../../libs/alarm/alarmType';

export type State = AlarmType;

export type UpdateAction = Action<'@alarm/update'> & {
  propertyName: string;
  value: any;
};

export type ResetAction = Action<'@alarm/reset'>;

export type Actions = ResetAction | UpdateAction;
