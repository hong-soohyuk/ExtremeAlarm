import React, {useState, useCallback, useEffect, useRef} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {ScrollEnabledProvider, useScrollEnabled} from '../contexts';
import {useNavigation, DrawerActions} from '@react-navigation/native';
// prettier-ignore
import {SafeAreaView, View, UnderlineText,TopBar,NavigationHeader, MaterialCommunityIcon as Icon} from '../theme'
import ListItem from './ListItem';
import * as D from '../data';
import {createAlarm} from 'react-native-simple-alarm';
import moment from 'moment';
import {create} from 'react-test-renderer';
import DatePicker from 'react-native-date-picker';

export default function Home() {
  const navigation = useNavigation();
  const [date, setDate] = useState<Date>(new Date());
  const [open, setOpen] = useState<boolean>(false);
  const [alarms, setAlarms] = useState<D.AlarmType[]>([]);
  const [scrollEnabled] = useScrollEnabled();
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
          </TopBar>
          <DatePicker
            open={open}
            date={date}
            onConfirm={() => {}}
            onCancel={
              () => {}
              // this._hideDateTimePicker
            }
            mode="time"
          />
          <FlatList
            ref={flatListRef}
            scrollEnabled={scrollEnabled}
            data={alarms}
            renderItem={({item}) => <ListItem alarm={item} />}
            keyExtractor={item => item.id}
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
