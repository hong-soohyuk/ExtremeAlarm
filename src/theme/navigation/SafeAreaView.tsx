import React from 'react';
import type {FC, ComponentProps} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView as ReactNativeSafeAreaView} from 'react-native-safe-area-context';

export type SafeAreaViewProps = ComponentProps<typeof ReactNativeSafeAreaView>;

export const SafeAreaView: FC<SafeAreaViewProps> = ({
  style,
  children,
  ...props
}) => {
  return (
    <ReactNativeSafeAreaView style={[styles.flex, style]} {...props}>
      {children}
    </ReactNativeSafeAreaView>
  );
};
const styles = StyleSheet.create({
  flex: {flex: 1},
});
