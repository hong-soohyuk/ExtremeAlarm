import type * as T from './types';

//prettier-ignore
export const updateAction = (propertyName: string, value: any): T.UpdateAction => ({
  type: '@alarm/update',
  propertyName, value
});

export const resetAction = (): T.ResetAction => ({
  type: '@alarm/reset',
});
