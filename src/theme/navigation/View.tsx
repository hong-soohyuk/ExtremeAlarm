import React from 'react';
import type {FC, ComponentProps} from 'react';
import {View as ReactNativeView} from 'react-native';
import {useTheme} from '@react-navigation/native';

export type ViewProps = ComponentProps<typeof ReactNativeView> & {
  border?: boolean;
  card?: boolean;
  primary?: boolean;
  notification?: boolean;
};

export const View: FC<ViewProps> = ({
  border,
  card,
  primary,
  notification,
  style,
  ...props
}) => {
  const {colors} = useTheme();
  const backgroundColor = card
    ? colors.card
    : primary
    ? colors.primary
    : notification
    ? colors.notification
    : colors.background;
  const borderColor = border ? colors.border : undefined;
  const borderWidth = border ? 1 : undefined;
  return (
    <ReactNativeView
      style={[{backgroundColor, borderColor, borderWidth}, style]}
      {...props}
    />
  );
};
