import * as A from './alarm';
import * as AL from './alarmList';

export type AppState = {
  alarm: A.State;
  alarmList: AL.State;
};
