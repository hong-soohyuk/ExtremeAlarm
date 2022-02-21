import {Alarm} from 'react-native-simple-alarm/dist/Types';

// type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;

// export type AlarmType = Overwrite<Alarm, {date: Date}>;

export type AlarmType = Alarm;

/*  
---- Alarm(simple alarm)
export declare type Alarm = PushNotificationObject & {
    active: boolean;
    date: string;
    message: string;
    snooze: number;
    oid?: string | number;
};
export declare type ID = string | number | undefined;
        
---- PushNotificationObject
...
  Android properties only
...
    IOS only properties 
 category?: any;

    iOS and Android properties
 id?: string | number | undefined;
 title?: string | undefined;
 message: string;
 userInfo?: any;
 playSound?: boolean | undefined;
 soundName?: string | undefined;
 number?: string | number | undefined;
 repeatType?: 'week' | 'day' | 'hour' | 'minute' | 'time' | undefined;
 repeatTime?: number | undefined;
*/
