import React from 'react';
import type {FC} from 'react';
import {styles} from './ListItem.style';
import moment from 'moment-timezone';
import {Swipeable, TouchableOpacity} from 'react-native-gesture-handler';
import {Animated, Switch, Text, View} from 'react-native';
import {
  AlarmType,
  deleteAlarmById,
  getAlarms,
  switchAlarmById,
} from '../libs/alarm';

const ListItem = (props: AlarmType) => {
  const {oid, active, date, snooze, message} = props;
  return (
    <Swipeable
      renderRightActions={(progress, dragAnimatedValue) =>
        renderRightActions(progress, dragAnimatedValue)
      }
      friction={1.5}
      onSwipeableRightOpen={() => deleteAlarmById(oid)}>
      <View style={[styles.itemView]}>
        <View style={[styles.timeView]}>
          <Text style={[styles.timeText]}>{moment(date).format('HH:mm')}</Text>
          <Switch
            value={active}
            onChange={() =>
              switchAlarmById({...props}).then(() => {
                getAlarms();
              })
            }
          />
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
