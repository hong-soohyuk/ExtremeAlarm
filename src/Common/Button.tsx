import React, {useMemo} from 'react';
import {View, TouchableOpacity} from 'react-native';

export type buttonProp = {
  //todo: 이게 뭔데
  accessible: any;
  accessibilityLabel: any;
  onPress: any;
  disabled: any;
  style: any;
  onLayout: any;
  noAnimation: any;
  hitSlop: any;
  children: any;
};

const Button = (props: buttonProp) => {
  //prettier-ignore
  const { accessible, accessibilityLabel, onPress, disabled, style, onLayout, noAnimation, hitSlop,} = props;
  return useMemo(() => {
    if (noAnimation) {
      <View
        accessible={accessible}
        accessibilityLabel={accessibilityLabel}
        onStartShouldSetResponder={() => !disabled}
        onResponderGrant={onPress}
        style={style}
        onLayout={onLayout}
        hitSlop={hitSlop}>
        {props.children}
      </View>;
    } else {
      <TouchableOpacity
        accessible={accessible}
        accessibilityLabel={accessibilityLabel}
        disabled={disabled}
        onPress={onPress}
        style={[style]}
        onLayout={onLayout}
        hitSlop={hitSlop}>
        {props.children}
      </TouchableOpacity>;
    }
  }, []);
};

export default Button;
