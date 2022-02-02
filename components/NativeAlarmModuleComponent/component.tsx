import React from 'react';
import {View, Button} from 'react-native';
import ExtremeAlarmModule from '../../native-modules/AlarmModule';

// TOOD: revisit this. putting this on hold right now in favor of 'react-native-simple-alarm'

const ExtremeAlarmModuleButton = () => {
  const onPress = () => {
    ExtremeAlarmModule.createExtremeAlarm('test from soohyuk');
  };

  return (
    <View
      style={{
        marginTop: 32,
        paddingHorizontal: 24,
      }}>
      <Button
        title="Click to invoke your native module!"
        color="#841584"
        onPress={onPress}
      />
    </View>
  );
};

export default ExtremeAlarmModuleButton;
