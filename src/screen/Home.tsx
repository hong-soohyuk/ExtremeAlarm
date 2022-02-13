import React, {useState, useCallback, useEffect, useRef} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {ScrollEnabledProvider, useScrollEnabled} from '../contexts';
import {useNavigation, DrawerActions} from '@react-navigation/native';
// prettier-ignore
import {SafeAreaView, View, UnderlineText,TopBar,NavigationHeader, MaterialCommunityIcon as Icon} from '../theme'
import ListItem from './ListItem';
import * as D from '../data';

export default function Home() {
  const navigation = useNavigation();
  const [alarms, setAlarms] = useState<D.AlarmType[]>([]);

  const addAlarm = useCallback(() => {
    setAlarms(alarms => [
      {
        id: Math.random().toString(36).substring(2, 5),
        content: 'sample' + Math.random().toString(36).substring(2, 5),
      },
      ...alarms,
    ]);
  }, []);

  const [scrollEnabled] = useScrollEnabled();
  const flatListRef = useRef<FlatList | null>(null);

  useEffect(() => addAlarm, []);
  return (
    <SafeAreaView>
      <ScrollEnabledProvider>
        <View style={[styles.view]}>
          <NavigationHeader title="Home" />
          <TopBar noSwitch>
            <UnderlineText onPress={addAlarm} style={styles.text}>
              add alarm
            </UnderlineText>
          </TopBar>
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
