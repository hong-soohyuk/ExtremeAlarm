import React, {forwardRef} from 'react';
import type {ForwardRefRenderFunction, ComponentProps} from 'react';
import {StyleSheet, TextInput as ReactNativeTextInput} from 'react-native';
import {useTheme} from '@react-navigation/native';

export type TextInputProps = ComponentProps<typeof ReactNativeTextInput>;

const _TextInput: ForwardRefRenderFunction<
  ReactNativeTextInput,
  TextInputProps
> = ({style, ...props}, ref) => {
  const {colors} = useTheme();
  return (
    <ReactNativeTextInput
      ref={ref}
      style={[
        {color: colors.text, borderColor: colors.text},
        styles.textInput,
        style,
      ]}
      placeholderTextColor={colors.text}
      {...props}
    />
  );
};
export const TextInput = forwardRef(_TextInput);
const styles = StyleSheet.create({
  textInput: {borderWidth: 1, borderRadius: 5},
});
