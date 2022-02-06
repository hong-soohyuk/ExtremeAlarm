import React, {FC, useMemo} from 'react';
import {Text, StyleSheet} from 'react-native';

export type SuperTextProps = {
  style?: any;
  type?: any;
  color?: any;
  fontSize?: any;
  numberOfLines?: any;
  textAlign?: any;
  children?: any;
};

const SuperText = (props: SuperTextProps) => {
  return (
    //{/* style={[family, styles.main, {color, fontSize, textAlign}, style]} */}
    <Text numberOfLines={props.numberOfLines} allowFontScaling={false}>
      {props.children}
    </Text>
  );
};
const styles = StyleSheet.create({
  main: {
    backgroundColor: 'transparent',
  },
});
export default SuperText;
