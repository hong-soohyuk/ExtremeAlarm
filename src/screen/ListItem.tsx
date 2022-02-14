import React, {useState} from 'react';
import type {FC} from 'react';
//prettier-ignore
import { View, Text, UnderlineText, TouchableView, MaterialCommunityIcon as Icon,} from '../theme/navigation';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';
import * as D from '../data';
import {Alarm} from 'react-native-simple-alarm';
import {styles} from './ListItem.style';

export type ListItemProps = {
  alarm: D.AlarmType;
};

const ListItem: FC<ListItemProps> = ({alarm}) => {
  return (
    <View style={[styles.view]}>
      <Text style={[styles.message]}>{alarm.message}</Text>
      <View style={[styles.dateView]}>
        <Text style={[styles.text]}>{alarm.date}</Text>
      </View>
      <Text style={[styles.comments]}>
        Is this active?? {alarm.active ? <>yes</> : <>no</>}
      </Text>
    </View>
  );
};
export default ListItem;
