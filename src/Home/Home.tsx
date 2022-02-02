import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import AlarmList from './AlarmList';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* navi */}
      <SafeAreaView style={styles.container}>
        <AlarmList />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});

export default Home;
