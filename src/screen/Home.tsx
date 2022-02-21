import React, {useState, useLayoutEffect, useCallback, useEffect} from 'react';
import {SafeAreaView, StyleSheet, FlatList, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollEnabledProvider, useScrollEnabled} from '../contexts';
import {useNavigation} from '@react-navigation/native';
// prettier-ignore
import ListItem from './ListItem';
import {Alarm as AlarmType} from 'react-native-simple-alarm/dist/Types';
import {RootStackParamList} from './StackNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {deleteAllAlarms, getAlarms} from '../libs/alarm';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
  const [scrollEnabled] = useScrollEnabled();
  const navigation = useNavigation<homeScreenProp>();
  const [alarms, setAlarms] = useState<AlarmType[]>([]);

  const fetchData = useCallback(() => {
    getAlarms().then(response => {
      if (response) setAlarms(response);
      else console.log('undefined | empty array returned');
    });
  }, []);

  useLayoutEffect(() => {
    fetchData();
    const willFocusSubscription = navigation.addListener('focus', () => {
      fetchData();
    });
    console.log(alarms);
    return willFocusSubscription;
  }, [fetchData]);

  useEffect(() => {
    navigation.setOptions({
      // prettier-ignore
      headerLeft: () => <Icon name="trash-can-outline" size={30}
      onPress={() => {
        deleteAllAlarms();
        fetchData();
      }}/>,
      headerTitle: 'Alarm',
      // prettier-ignore
      headerRight: () =><Icon name="plus" size={30} onPress={() => navigation.navigate('ModalStackView')}/>,
    });
  }, []);

  return (
    <SafeAreaView style={[{flex: 1}]}>
      <ScrollEnabledProvider>
        <View style={[styles.view]}>
          <FlatList
            scrollEnabled={scrollEnabled}
            data={alarms}
            renderItem={({item}) => <ListItem {...item} />}
            keyExtractor={item => item.date} //oid??
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
