import React, {FC, forwardRef} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {useScrollEnabled} from '../contexts';
import ListItem from './ListItem';
import * as D from '../data';


const AlarmList = React.forwardRef((props, flatListRef) => {
  const [scrollEnabled] = useScrollEnabled();
  return (
    <FlatList
      ref={flatListRef}
      scrollEnabled={scrollEnabled}
      data={alarms}
      renderItem={({item}) => <ListItem alarm={item} />}
      keyExtractor={item => item.id}
    />
  );
});

export default AlarmList;
