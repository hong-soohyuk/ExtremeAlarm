import React, {useState} from 'react';
import type {FC} from 'react';
//prettier-ignore
import { View, Text, UnderlineText, TouchableView, MaterialCommunityIcon as Icon,} from '../theme/navigation';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';
import * as D from '../data';
import {Alarm} from 'react-native-simple-alarm';

export type ListItemProps = {
  alarm: D.AlarmType;
};

const ListItem: FC<ListItemProps> = alarm => {
  return (
    <View style={[styles.View]}>
      <TouchableView style={[styles.View]}>
        <Icon name="comment" size={24} color={Colors.blue500} />
        <Text>{alarm.alarm.content}</Text>
      </TouchableView>
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    flexDirection: 'row',
    padding: 3,
    justifyContent: 'center',
  },
});

export default ListItem;
