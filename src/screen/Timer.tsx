import React, {useState, useCallback, useEffect, useRef} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {ScrollEnabledProvider, useScrollEnabled} from '../contexts';
import {useNavigation} from '@react-navigation/native';
// prettier-ignore
import {SafeAreaView, View, Text,  UnderlineText, TopBar,NavigationHeader, MaterialCommunityIcon as Icon} from '../theme'
import * as D from '../data';
export default function Timer() {
  const navigation = useNavigation();
  const [alarms, setAlarms] = useState<D.AlarmType[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [scrollEnabled] = useScrollEnabled();

  return (
    <SafeAreaView>
      <ScrollEnabledProvider>
        <View style={[styles.view]}>
          <NavigationHeader title="Timer" />
        </View>
      </ScrollEnabledProvider>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {flex: 1},
  text: {marginRight: 10, fontSize: 20},
});
