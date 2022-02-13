import React from 'react';
import type {FC, ComponentProps} from 'react';
import {Switch as ReactNativeSwitch} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useToggleTheme} from '../../contexts';

export type SwitchProps = ComponentProps<typeof ReactNativeSwitch>;

export const Switch: FC<SwitchProps> = props => {
  const theme = useTheme();
  const toggleTheme = useToggleTheme();
  return (
    <ReactNativeSwitch
      {...props}
      value={theme.dark}
      onValueChange={toggleTheme}
    />
  );
};
