import React, {Component, FC} from 'react';
import {View, Dimensions, StyleSheet, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from './Button';
import SuperText from './SuperText';

export type navigationProps = {
  //tood: any
  leftButtonTitle: any;
  leftButtonIcon: any;
  rightButtonTitle: any;
  rightButtonIcon: any;
  leftButtonTextStyle: any;
  onLeftButtonPress: any;
  showDivider: boolean;
  top: any;
};

const NavBar = (props: navigationProps) => {
  //prettier-ignore
  const {leftButtonTitle,rightButtonTitle,leftButtonIcon,rightButtonIcon,showDivider, top} = props;
  return (
    <View
    //style={[{borderBottomColor: showDivider ? Colors.textBlack10 : 'transparent',},setToTopStyle,styles.navBar,]}
    >
      <View style={styles.container}>
        {(leftButtonTitle || leftButtonIcon) && renderLeftButton()}

        {renderTitle(rightButtonTitle)}

        {(rightButtonTitle || rightButtonIcon) &&
          renderRightButton(rightButtonTitle)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function renderTitle(title: string): React.ReactNode {
  return <SuperText>{title}</SuperText>;
}

export type rightButtonProps = {
  rightButtonTitle: any;
  rightButtonIcon: any;
  rightButtonTextStyle: any;
  onRightButtonPress: any;
};

const renderRightButton = ({
  rightButtonTitle,
  rightButtonIcon,
}: rightButtonProps) => {
  return (
    <Button
      accessible={undefined}
      accessibilityLabel={
        rightButtonTitle || rightButtonIcon || 'right nav button'
      }
      onPress={undefined}
      disabled={undefined}
      style={undefined}
      onLayout={undefined}
      noAnimation={undefined}
      hitSlop={undefined}>
      <SuperText>{rightButtonTitle}</SuperText>
    </Button>
  );
};

function renderLeftButton(): React.ReactNode {
  throw new Error('Function not implemented.');
}

export default NavBar;
