import React, {Component} from 'react';
import {View, Dimensions, StyleSheet, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from './Button';

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

        {renderTitle()}

        {(rightButtonTitle || rightButtonIcon) && renderRightButton()}
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

export default NavBar;

function renderTitle(): React.ReactNode {
  throw new Error('Function not implemented.');
}

function renderRightButton(): React.ReactNode {
  throw new Error('Function not implemented.');
}

function renderLeftButton(): React.ReactNode {
  throw new Error('Function not implemented.');
}
