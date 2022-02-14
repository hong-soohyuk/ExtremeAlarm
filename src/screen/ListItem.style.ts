import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';
import color from 'color';

export const styles = StyleSheet.create({
  view: {flexDirection: 'row', padding: 5},
  message: {marginRight: 5, fontSize: 22, fontWeight: '500'},
  dateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 3,
    marginTop: 5,
  },
  text: {fontSize: 16},
  countsView: {
    flexDirection: 'row',
    padding: 3,
    justifyContent: 'space-around',
  },
});
