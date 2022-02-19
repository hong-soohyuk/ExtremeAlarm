import type * as T from './types';

//prettier-ignore
export const updateAction = (fieldName: string,value: any): T.UpdateAction => ({
  type: '@alarm/update',
  fieldName, value
});

export const cancelAction = (): T.CancelAction => ({
  type: '@alarm/cancel',
});
