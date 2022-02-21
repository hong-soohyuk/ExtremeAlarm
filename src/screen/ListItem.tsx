import React, {useState} from 'react';
import {styles} from './ListItem.style';
import moment from 'moment-timezone';
import {Swipeable, TouchableOpacity} from 'react-native-gesture-handler';
import {Animated, Switch, Text, View} from 'react-native';
import {AlarmType, deleteAlarmById, switchAlarmById} from '../libs/alarm';

const ListItem = (props: AlarmType) => {
  const {oid, active, date, snooze, message} = props;
  // console.log(props);
  return (
    <Swipeable
      renderRightActions={(progress, dragAnimatedValue) =>
        renderRightActions(progress, dragAnimatedValue)
      }
      friction={1.5}
      onSwipeableRightOpen={() => deleteAlarmById(oid)}>
      <View style={[styles.itemView]}>
        <View style={[styles.timeView]}>
          <Text style={[styles.timeText]}>
            {moment(date).format('HH:mm A')}
            {/* use HH for 24hours system, or hh for 12hours */}
          </Text>
          <Switch value={active} onChange={() => switchAlarmById({...props})} />
        </View>
        <View style={[styles.messageView]}>
          <Text style={[styles.messageText]}>
            {/* alarm will ring {moment(date).fromNow()} */}
            {date}/ {snooze}/ {message}
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
