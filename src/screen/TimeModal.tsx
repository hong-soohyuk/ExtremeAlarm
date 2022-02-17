import React, {ComponentProps, useEffect, useState} from 'react';
import type {FC} from 'react';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {createAlarm} from 'react-native-simple-alarm';
import {Modal, Pressable, StyleSheet} from 'react-native';
import {
  NavigationHeader,
  Text,
  View,
  MaterialCommunityIcon as Icon,
} from '../theme';
import {Colors} from 'react-native-paper';
import {
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';

type TimeModalProps = ComponentProps<typeof Modal> & {
  setVisible: (visible: boolean) => void;
};

const TimeModal: FC<TimeModalProps> = ({visible, setVisible, ...props}) => {
  const [date, setDate] = useState<Date>(moment(new Date()).toDate());

  const onChange = (event: Event, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };
  useEffect(() => {
    console.log(date);
  }, [date]);

  const handleTimePicked = async () => {
    try {
      await createAlarm({
        active: true,
        date: date.toISOString(),
        message: 'sample alarm',
        snooze: 1,
      });
    } catch (error) {
      console.log(error);
    }
    console.log('date ' + date + '\n\n');
    console.log('\n\n');
    setVisible(false);
  };
  //prettier-ignore
  const optionData = [{title: 'Repeat', content: 'Never',}, { title: 'Song', content: 'Marimba',}, { title: 'Label', content: 'time to wake up',} ];
  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      statusBarTranslucent={true}
      onRequestClose={() => setVisible(!visible)}>
      <NavigationHeader
        title="Add Alarm"
        Left={() => (
          <Pressable
            style={[styles.pressable]}
            onPress={() => setVisible(false)}>
            <Text style={[styles.textStyle]}>Cancel</Text>
          </Pressable>
        )}
        Right={() => (
          <Pressable style={[styles.pressable]} onPress={handleTimePicked}>
            <Text style={[styles.textStyle]}>Save</Text>
          </Pressable>
        )}
      />
      <DatePicker
        date={date}
        mode="time"
        onDateChange={date => setDate(date)}
      />

      <View style={[styles.tapListView]}>
        <FlatList
          data={optionData}
          ItemSeparatorComponent={props => {
            return (
              <View
                style={{
                  height: 1,
                  marginHorizontal: 20,
                  backgroundColor: 'lightgray',
                }}
              />
            );
          }}
          renderItem={({item, index, separators}) => (
            <TouchableOpacity onPress={() => {}}>
              <View style={[styles.tapItemView]}>
                <Text style={[{fontSize: 20, color: Colors.grey900}]}>
                  {item.title}
                </Text>
                <Text style={[{fontSize: 20, color: Colors.grey600}]}>
                  {item.content}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  pressable: {padding: 8, margin: 4},
  textStyle: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.blue500,
  },
  tapListView: {
    backgroundColor: Colors.grey200,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  tapItemView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    marginLeft: 12,
    marginRight: 12,
    margin: 10,
  },
});

export default TimeModal;
