import {RouteProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import {ModalStackParamList} from '../StackNavigator';
type songScreenProps = StackNavigationProp<ModalStackParamList, 'Song'>;
type songRouteProps = RouteProp<ModalStackParamList, 'Song'>;
const Song = () => {
  const navigation = useNavigation<songScreenProps>();

  return <View></View>;
};
export default Song;
