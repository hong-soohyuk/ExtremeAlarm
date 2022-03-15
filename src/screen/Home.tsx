import React, {useState, useCallback, useEffect, useRef} from 'react';
import {StyleSheet, FlatList, ListRenderItem} from 'react-native';
import {ScrollEnabledProvider, useScrollEnabled} from '../contexts';
import {useNavigation} from '@react-navigation/native';
// prettier-ignore
import {SafeAreaView, View, Text,  UnderlineText, TopBar,NavigationHeader, MaterialCommunityIcon as Icon} from '../theme'
import ListItem from './ListItem';
import {deleteAllAlarms, getAlarms} from 'react-native-simple-alarm';
import {Alarm as AlarmType} from 'react-native-simple-alarm/dist/Types';
import {RootStackParamList} from './StackNavigator';
import {StackNavigationProp} from '@react-navigation/stack';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
  const navigation = useNavigation<homeScreenProp>();
  const [alarms, setAlarms] = useState<AlarmType[]>([]);
  // const [modalVisible, setModalVisible] = useState<boolean>(false);
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
      setAlarms([]);
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
            Right={() =>
              // prettier-ignore
              <Icon name="plus" size={30} onPress={() => navigation.navigate('ModalStackView')}/>
            }
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
            renderItem={({item}) => <ListItem {...item} />}
            keyExtractor={item => item.id}
          />
          {/* <TimeModal visible={modalVisible} setVisible={setModalVisible} /> */}
        </View>
      </ScrollEnabledProvider>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {flex: 1},
  text: {marginRight: 10, fontSize: 20},
});
