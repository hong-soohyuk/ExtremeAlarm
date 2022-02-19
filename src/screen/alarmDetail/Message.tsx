import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {Colors} from 'react-native-paper';
import {AutoFocusProvider, useAutoFocus} from '../../contexts';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {ModalStackParamList} from '../StackNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../store';
import * as A from '../../store/alarm';

type messageScreenProps = StackNavigationProp<ModalStackParamList, 'Message'>;
type messageRouteProps = RouteProp<ModalStackParamList, 'Message'>;
const Message = () => {
  const navigation = useNavigation<messageScreenProps>();
  const route = useRoute<messageRouteProps>();

  const focus = useAutoFocus();
  const dispatch = useDispatch();
  //prettier-ignore
  const {message} = useSelector<AppState, A.State>(({alarm}) => alarm);
  const [newMessage, setNewMessage] = useState<string>(message);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => {
            dispatch(A.updateAction('message', newMessage));
            navigation.goBack();
          }}>
          <Text
            style={[{fontSize: 18, color: Colors.blue500, fontWeight: '600'}]}>
            Done
          </Text>
        </Pressable>
      ),
    });
  }, [newMessage]);

  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>set your message</Text>
      <AutoFocusProvider contentContainerStyle={[styles.keyboardAwareFocus]}>
        <TextInput
          onFocus={focus}
          style={[styles.textInput]}
          value={newMessage}
          onChangeText={setNewMessage}
        />
      </AutoFocusProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    marginTop: 30,
    fontSize: 18,
    color: Colors.grey800,
  },
  keyboardAwareFocus: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textInput: {
    width: '95%',
    marginTop: 10,
    padding: 5,
    fontSize: 24,
    borderRadius: 5,
    backgroundColor: Colors.grey300,
  },
});
export default Message;
