import React, {useState, useCallback, useEffect, useRef} from 'react';
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
  const navigation = useNavigation<homeScreenProp>();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // prettier-ignore
      headerLeft: () => <Icon name="trash-can-outline" size={30} onPress={deleteAllAlarms}/>,
      headerTitle: 'Alarm',
      headerRight: () =>
        // prettier-ignore
        <Icon name="plus" size={30} onPress={() => navigation.navigate('ModalStackView')}/>,
    });
  }, [navigation]);
  const [alarms, setAlarms] = useState<AlarmType[]>([]);
  const [scrollEnabled] = useScrollEnabled();

  const getSavedAlarms = useCallback(() => {
    getAlarms().then(res => {
      if (res) setAlarms(res);
      else console.log('return undefined in getSavedAlarms: ', res);
    });
  }, [alarms]);

  useEffect(() => {
    getSavedAlarms();

    // alarms.map(i => {
    //   console.log(i.date);
    // });
  }, [getSavedAlarms]);

  const flatListRef = useRef<FlatList | null>(null);

  return (
    <SafeAreaView style={[{flex: 1}]}>
      <ScrollEnabledProvider>
        <View style={[styles.view]}>
          <FlatList
            ref={flatListRef}
            scrollEnabled={scrollEnabled}
            data={alarms}
            renderItem={({item}) => <ListItem {...item} />}
            keyExtractor={item => item.oid}
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
