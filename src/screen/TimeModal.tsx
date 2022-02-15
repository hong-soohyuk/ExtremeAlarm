import React, {ComponentProps, useEffect, useState} from 'react';
import type {FC} from 'react';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {createAlarm} from 'react-native-simple-alarm';
import {Modal, Pressable, StyleSheet} from 'react-native';
import {NavigationHeader, Text, View} from '../theme';

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
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(!visible)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DatePicker
              date={date}
              mode="time"
              androidVariant="iosClone"
              onDateChange={date => setDate(date)}
            />
            <View style={[styles.buttonView]}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setVisible(!visible)}>
                <Text style={(styles.textStyle, {color: '#2196F3'})}>
                  Cancel
                </Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonSave]}
                onPress={handleTimePicked}>
                <Text style={[styles.textStyle]}>Save</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonView: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    margin: 10,
    elevation: 2,
  },
  buttonClose: {
    borderColor: '#2196F3',
    borderWidth: 1,
  },
  buttonSave: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default TimeModal;
