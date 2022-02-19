import type {Action} from 'redux';
import {createAlarmProps} from '../../libs/alarm';

export type State = createAlarmProps;

export type UpdateAction = Action<'@alarm/update'> & {
  fieldName: string;
  value: any;
};

export type CancelAction = Action<'@alarm/cancel'>;

export type Actions = CancelAction | UpdateAction;
