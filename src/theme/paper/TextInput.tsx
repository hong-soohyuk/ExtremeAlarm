import React, {forwardRef} from 'react';
import type {ForwardRefRenderFunction, ComponentProps} from 'react';
import {TextInput as ReactNativeTextInput} from 'react-native';
import {useTheme} from 'react-native-paper';
export type TextInputProps = ComponentProps<typeof ReactNativeTextInput>;

const _TextInput: ForwardRefRenderFunction<
  ReactNativeTextInput,
  TextInputProps
> = ({style, ...props}, ref) => {
  const {colors} = useTheme();
  return (
    <ReactNativeTextInput
      ref={ref}
      style={[{color: colors.text, borderColor: colors.placeholder}, style]}
      {...props}
    />
  );
};
export const TextInput = forwardRef(_TextInput);
