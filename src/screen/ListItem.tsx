import React, {useState} from 'react';
import type {FC} from 'react';
//prettier-ignore
import { View, Text} from '../theme/navigation';
import * as D from '../data';
import {styles} from './ListItem.style';
import ActiveSwitch from './ActiveSwitch';
import moment from 'moment';
import {Swipeable} from 'react-native-gesture-handler';
import {renderRightActions} from '../contexts/';
import {deleteAlarm, deleteAlarmById} from 'react-native-simple-alarm';

export type ListItemProps = {
  props: D.AlarmType; // active: boolean; date: string; message: string; snooze: number; oid?: string | number;
};

const ListItem: FC<ListItemProps> = ({props}) => {
  const {oid, active, date, message, snooze} = props;

  return (
    <Swipeable
      renderRightActions={(progress, dragAnimatedValue) =>
        renderRightActions(progress, dragAnimatedValue, oid)
      }>
      <View style={[styles.view]}>
        <View style={[styles.timeView]}>
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
    </Swipeable>
  );
};
export default ListItem;
