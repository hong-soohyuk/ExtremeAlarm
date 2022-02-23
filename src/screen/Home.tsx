import React, {useState, useLayoutEffect, useCallback, useEffect} from 'react';
import {SafeAreaView, StyleSheet, FlatList, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollEnabledProvider, useScrollEnabled} from '../contexts';
import {useNavigation} from '@react-navigation/native';
// prettier-ignore
import ListItem from './ListItem';
import {RootStackParamList} from './StackNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {AlarmType, deleteAllAlarms, getAlarms} from '../libs/alarm';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
  const [scrollEnabled] = useScrollEnabled();
  const navigation = useNavigation<homeScreenProp>();
  const [alarms, setAlarms] = useState<AlarmType[]>([]);

  const fetchData = useCallback(() => {
    getAlarms().then(response => {
      if (response) setAlarms([...response]);
      else console.log('undefined | empty array returned');
    });
  }, []);

  useEffect(() => {
    const willFocusSubscription = navigation.addListener('focus', () => {
      fetchData();
    });
    return willFocusSubscription;
  }, [fetchData, navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () =>
        //prettier-ignore
        <Icon name="trash-can-outline" size={30} 
        onPress={() => {
          deleteAllAlarms().then(response => {
            if(response) setAlarms([...response]);
          })
        }}/>,
      headerTitle: 'Alarm',
      headerRight: () =>
        //prettier-ignore
        <Icon name="plus" size={30} 
        onPress={() => navigation.navigate('ModalStackView')} />, // createAlarms().then
    });
  }, [fetchData, deleteAllAlarms, navigation]);

  return (
    <SafeAreaView style={[{flex: 1}]}>
      <ScrollEnabledProvider>
        <View style={[styles.view]}>
          {console.log('flatlist render?', alarms)}
          <FlatList
            scrollEnabled={scrollEnabled}
            data={alarms}
            keyExtractor={(item: AlarmType) => item.date}
            renderItem={(result: {item: AlarmType}) => (
              <ListItem {...result.item} fetchDate={fetchData}/>
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
