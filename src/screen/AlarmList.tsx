import React, {forwardRef} from 'react';
import type {ComponentProps, ForwardRefRenderFunction} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {useScrollEnabled} from '../contexts';
import ListItem from './ListItem';
import * as D from '../data';

//note: ts-rn p363 참고

export type AlarmListProps = ComponentProps<typeof FlatList> & {
  alarms: D.AlarmType[];
};

const _AlarmList: ForwardRefRenderFunction<FlatList, AlarmListProps> = (
  {style, ...props},
  flatListRef,
) => {
  const [scrollEnabled] = useScrollEnabled();
  const {alarms} = props;

  return (
    <FlatList
      ref={flatListRef}
      scrollEnabled={scrollEnabled}
      data={alarms}
      renderItem={({item}) => <ListItem alarm={item} />}
      keyExtractor={item => item.id}
    />
  );
};

export const AlarmList = forwardRef(_AlarmList);
