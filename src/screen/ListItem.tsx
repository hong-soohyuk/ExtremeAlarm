import React, {useState} from 'react';
import type {FC} from 'react';
//prettier-ignore
import { View, Text} from '../theme/navigation';
import * as D from '../data';
import {styles} from './ListItem.style';
import ActiveSwitch from './ActiveSwitch';
import moment from 'moment';

export type ListItemProps = {
  props: D.AlarmType;
  // active: boolean;
  // date: string;
  // message: string;
  // snooze: number;
  // oid?: string | number;
};

const ListItem: FC<ListItemProps> = ({props}) => {
  const {oid, active, date, message, snooze} = props;
  return (
    <View style={[styles.view]}>
      <View style={[styles.timeView]}>
        {/* <Text style={[styles.timeText]}>{moment(date).format('HH:mm')}</Text> */}
        <Text style={[styles.timeText]}>
          {moment.utc(date, true).format('HH:mm A')}
        </Text>
        <ActiveSwitch {...props} />
      </View>
      <View style={[styles.messageView]}>
        <Text style={[styles.messageText]}>
          alarm will ring {moment(date).fromNow()}
        </Text>
        <Text style={[styles.messageText]}>
          {active ? <>activated</> : <>canceled</>}
        </Text>
      </View>
    </View>
  );
};
export default ListItem;
