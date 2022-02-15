import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';
import color from 'color';

export const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 3,
    marginBottom: 3,
    padding: 5,
    justifyContent: 'space-around',
    borderColor: Colors.deepPurple100,
    borderWidth: 2,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    backgroundColor: Colors.white,
  },

  timeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  timeText: {
    padding: 3,
    fontSize: 40,
    fontWeight: '500',
  },
  messageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  messageText: {padding: 3, fontSize: 15},
});
