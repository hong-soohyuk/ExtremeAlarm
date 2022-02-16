import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';
import color from 'color';

export const styles = StyleSheet.create({
  itemView: {
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

  /* Swipeables */
  rightActionView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: Colors.red500,
    marginTop: 3,
    marginBottom: 3,
    padding: 5,
    borderRadius: 10,
  },
  rightActionText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,
  },
});
