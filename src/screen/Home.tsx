import React, {useState, useLayoutEffect, useCallback, useEffect} from 'react';
import {SafeAreaView, StyleSheet, FlatList, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollEnabledProvider, useScrollEnabled} from '../contexts';
import {useNavigation} from '@react-navigation/native';
// prettier-ignore
import ListItem from './ListItem';
import {RootStackParamList} from './StackNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {AlarmType, deleteAllAlarms} from '../libs/alarm';
import {useSelector} from 'react-redux';
import {AppState} from '../store/AppState';
import * as AL from '../store/alarmList';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
  const [scrollEnabled] = useScrollEnabled();
  const navigation = useNavigation<homeScreenProp>();
  const alarmList = useSelector<AppState, AL.State>(({alarmList}) => alarmList);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () =>
        //prettier-ignore
        <Icon name="trash-can-outline" size={30} 
        onPress={() => {
          deleteAllAlarms()
        }}/>,
      headerTitle: 'Alarm',
      headerRight: () =>
        //prettier-ignore
        <Icon name="plus" size={30} 
        onPress={() => navigation.navigate('ModalStackView')} />,
    });
  }, [deleteAllAlarms, navigation]);

  return (
    <SafeAreaView style={[{flex: 1}]}>
      <ScrollEnabledProvider>
        <View style={[styles.view]}>
          <FlatList
            scrollEnabled={scrollEnabled}
            data={alarmList}
            keyExtractor={(item, index) => index.toString()} // since oid === undefined |typeof string | number
            renderItem={(result: {item: AlarmType}) => (
              <ListItem {...result.item} />
            )}
          />
        </View>
      </ScrollEnabledProvider>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {flex: 1},
  text: {marginRight: 10, fontSize: 20},
});
