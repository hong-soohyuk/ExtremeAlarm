import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {ScrollEnabledProvider} from '../contexts';
import {useNavigation} from '@react-navigation/native';

export default function Timer() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollEnabledProvider>
        <View style={[styles.view]}></View>
      </ScrollEnabledProvider>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {flex: 1},
  text: {marginRight: 10, fontSize: 20},
});
