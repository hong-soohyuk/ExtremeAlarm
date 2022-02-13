import React from 'react';
import type {FC, ComponentProps} from 'react';
import {View as ReactNativeView} from 'react-native';
import {useTheme} from 'react-native-paper';

export type ViewProps = ComponentProps<typeof ReactNativeView> & {
  accent?: boolean;
  notification?: boolean;
  primary?: boolean;
  surface?: boolean;
  background?: boolean;
};

export const View: FC<ViewProps> = ({
  style,
  accent,
  notification,
  primary,
  surface,
  background,
  ...props
}) => {
  const {colors} = useTheme();
  //prettier-ignore
  const backgroundColor = accent? colors.accent
                                  : notification? colors.notification
                                    : primary? colors.primary
                                      : surface? colors.surface
                                        : background? colors.background: 'transparent';

  return <ReactNativeView style={[{backgroundColor}, style]} {...props} />;
};
