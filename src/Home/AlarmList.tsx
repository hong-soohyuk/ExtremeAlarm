import moment from 'moment';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {RadioButton} from 'react-native-paper';

import {getAlarms} from 'react-native-simple-alarm';

const AlarmList = () => {
  const alarms = getAlarms();
  const initialState = alarms;
  const radioProps = [
    {label: 'On', value: 1},
    {label: 'Off', value: 0},
  ];

  return (
    <View>
      <View>
        <View>
          <TouchableOpacity>
            <Text></Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default AlarmList;
