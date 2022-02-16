import React from 'react';
import type {FC} from 'react';
import {View, Text} from '../theme/navigation';
import {styles} from './ListItem.style';
import ActiveSwitch from './ActiveSwitch';
import moment from 'moment';
import {Swipeable, TouchableOpacity} from 'react-native-gesture-handler';
import {deleteAlarmById} from 'react-native-simple-alarm';
import {Animated} from 'react-native';

import {Alarm as AlarmType} from 'react-native-simple-alarm/dist/Types';

const ListItem = (props: AlarmType) => {
  const deleteItem = async (oid: string | number) => {
    try {
      await deleteAlarmById(oid);
    } catch (error) {
      console.log('deleting alarm by id error: ', error);
    }
  };
  return (
    <Swipeable
      renderRightActions={(progress, dragAnimatedValue) =>
        renderRightActions(progress, dragAnimatedValue)
      }
      friction={1.5}
      onSwipeableRightOpen={() => deleteItem(oid)}>
      <View style={[styles.itemView]}>
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

/* Swipe to remove pane*/
const renderRightActions = (
  progress: Animated.AnimatedInterpolation,
  dragAnimatedValue: Animated.AnimatedInterpolation,
) => {
  const scale = dragAnimatedValue.interpolate({
    inputRange: [-50, 0],
    outputRange: [1, 1],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.rightActionView, {transform: [{scale}]}]}>
      <TouchableOpacity>
        <Text style={styles.rightActionText}>Delete</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ListItem;
