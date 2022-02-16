import React from 'react';
import type {FC} from 'react';
import {Animated, GestureResponderEvent, StyleSheet} from 'react-native';
import {Text, View} from '../theme';
import {Swipeable, TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from 'react-native-paper';
import {deleteAlarmById} from 'react-native-simple-alarm';

export const renderRightActions = (
  progress: Animated.AnimatedInterpolation,
  dragAnimatedValue: Animated.AnimatedInterpolation,
  oid: string,
) => {
  const opacity = dragAnimatedValue.interpolate({
    inputRange: [-50, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  const deleteItem = async (oid: string) => {
    try {
      await deleteAlarmById(oid);
    } catch (error) {
      console.log('deleting alarm by id error: ', error);
    }
  };
  return (
    <View style={styles.rightAction}>
      <Animated.View style={[styles.button, {opacity}]}>
        <TouchableOpacity onPress={() => deleteItem(oid)}>
          <Text style={styles.text}>Delete</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  rightAction: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.red500,
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
  },
  text: {
    color: Colors.white,
    fontWeight: 'bold',
    padding: 3,
  },
});
