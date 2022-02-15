import React, {useState, useCallback, useEffect, useRef} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {ScrollEnabledProvider, useScrollEnabled} from '../contexts';
import {useNavigation, DrawerActions} from '@react-navigation/native';
// prettier-ignore
import {SafeAreaView, View, Text,  UnderlineText, TopBar,NavigationHeader, MaterialCommunityIcon as Icon} from '../theme'
import ListItem from './ListItem';
import * as D from '../data';
// prettier-ignore
import { createAlarm, deleteAllAlarms, getAlarms,} from 'react-native-simple-alarm';
import moment from 'moment';
import TimePicker from './TimeModal';
import TimeModal from './TimeModal';

export default function Home() {
  const navigation = useNavigation();
  const [alarms, setAlarms] = useState<D.AlarmType[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
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
          <NavigationHeader
            title="Alarm"
            // Left={() => <Text style={{fontSize: 20}}>Edit</Text>}
            Right={() => (
              <Icon
                name="plus"
                size={30}
                onPress={() => {
                  setModalVisible(true);
                }}
              />
            )}
          />
          <TopBar noSwitch>
            <UnderlineText onPress={deleteAll} style={styles.text}>
              delete all alarms
            </UnderlineText>
          </TopBar>
          <FlatList
            ref={flatListRef}
            scrollEnabled={scrollEnabled}
            data={alarms}
            renderItem={({item}) => <ListItem props={item} />}
            keyExtractor={item => item.oid}
          />
          <TimeModal visible={modalVisible} setVisible={setModalVisible} />
        </View>
      </ScrollEnabledProvider>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {flex: 1},
  text: {marginRight: 10, fontSize: 20},
});
