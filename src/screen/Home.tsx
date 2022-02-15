import React, {useState, useCallback, useEffect, useRef} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {ScrollEnabledProvider, useScrollEnabled} from '../contexts';
import {useNavigation, DrawerActions} from '@react-navigation/native';
// prettier-ignore
import {SafeAreaView, View, UnderlineText,TopBar,NavigationHeader, MaterialCommunityIcon as Icon} from '../theme'
import ListItem from './ListItem';
import * as D from '../data';
import {
  createAlarm,
  deleteAllAlarms,
  getAlarms,
} from 'react-native-simple-alarm';
import moment from 'moment';
import TimePicker from './TimePicker';

export default function Home() {
  const navigation = useNavigation();
  const [date, setDate] = useState<Date>(new Date());
  const [open, setOpen] = useState<boolean>(false);
  const [alarms, setAlarms] = useState<D.AlarmType[]>([]);
  const [scrollEnabled] = useScrollEnabled();

  const getSavedAlarms = useCallback(async () => {
    try {
      const savedAlarms = await getAlarms();
      setAlarms(savedAlarms);
    } catch (error) {
      console.log('setting call error' + error);
    }
  }, [alarms]);

  const deleteAll = useCallback(async () => {
    try {
      await deleteAllAlarms();
      // setAlarms([]);
    } catch (error) {
      console.log('delete error' + error);
    }
  }, []);

  useEffect(() => {
    getSavedAlarms();
  }, [getSavedAlarms]);

  const flatListRef = useRef<FlatList | null>(null);
  return (
    <SafeAreaView>
      <ScrollEnabledProvider>
        <View style={[styles.view]}>
          <NavigationHeader title="Home" />
          <TopBar noSwitch>
            <UnderlineText onPress={() => setOpen(true)} style={styles.text}>
              add alarm
            </UnderlineText>
            <UnderlineText onPress={deleteAll} style={styles.text}>
              delete all alarms
            </UnderlineText>
          </TopBar>
          <TimePicker open={open} setOpen={setOpen} />
          <FlatList
            ref={flatListRef}
            scrollEnabled={scrollEnabled}
            data={alarms}
            renderItem={({item}) => <ListItem props={item}/>}
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
