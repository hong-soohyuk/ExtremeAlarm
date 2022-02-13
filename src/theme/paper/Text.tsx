import React from 'react';
import type {FC, ComponentProps} from 'react';
import {Text as ReactNativeText} from 'react-native';
import {useTheme} from 'react-native-paper';

export type TextProps = ComponentProps<typeof ReactNativeText>;

export const Text: FC<TextProps> = ({style, ...props}) => {
  const {colors} = useTheme();
  return <ReactNativeText style={[{color: colors.text}, style]} {...props} />;
};
