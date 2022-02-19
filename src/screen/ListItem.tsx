import React from 'react';
import {styles} from './ListItem.style';
import moment from 'moment';
import {Swipeable, TouchableOpacity} from 'react-native-gesture-handler';
import {Animated, Switch, Text, View} from 'react-native';
import {Alarm as AlarmType} from 'react-native-simple-alarm/dist/Types';
import {deleteAlarmById, switchAlarmById} from '../libs/alarm';

const ListItem = (props: AlarmType) => {
  const {oid, active, date, message, snooze} = props;
  return (
    <Swipeable
      renderRightActions={(progress, dragAnimatedValue) =>
        renderRightActions(progress, dragAnimatedValue)
      }
      friction={1.5}
      onSwipeableRightOpen={() => deleteAlarmById({...props})}>
      <View style={[styles.itemView]}>
        <View style={[styles.timeView]}>
          <Text style={[styles.timeText]}>
            {moment(props.date, true).format('HH:mm A')}{' '}
            {/* use HH for 24hours system, or hh for 12hours */}
          </Text>
          <Switch value={active} onChange={() => switchAlarmById({...props})} />
        </View>
        <View style={[styles.messageView]}>
          <Text style={[styles.messageText]}>
            alarm will ring {moment(props.date).fromNow()}
          </Text>
          <Text style={[styles.messageText]}>
            {props.active ? <>activated</> : <>canceled</>}
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
