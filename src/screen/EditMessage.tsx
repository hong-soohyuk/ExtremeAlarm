import React, {ComponentProps, useEffect, useState} from 'react';
import type {FC} from 'react';
import {Modal, Pressable, StyleSheet} from 'react-native';
// prettier-ignore
import { NavigationHeader, Text, View, MaterialCommunityIcon as Icon, TextInput,} from '../theme';
import {Colors} from 'react-native-paper';

const EditMessage = () => {
  return <Text>hello</Text>;
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

export default EditMessage;
