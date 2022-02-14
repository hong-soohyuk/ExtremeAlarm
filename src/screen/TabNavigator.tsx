import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type {RouteProp, ParamListBase} from '@react-navigation/native';
import {Stack} from 'react-native-router-flux';
import StackNavigator from './StackNavigator';
import {useSelector} from 'react-redux';
import {AppState, Locale} from '../store';

type TabBarIconProps = {focused: boolean; color: string; size: number};

const icons: Record<string, string[]> = {
  Main: ['home-circle', 'home-circle-outline'],
};
const screenOptions = ({route}: {route: RouteProp<ParamListBase, string>}) => {
  return {
    tabBarIcon: ({focused, color, size}: TabBarIconProps) => {
      const {name} = route;
      const focusedSize = focused ? size + 6 : size;
      const focusedColor = focused ? Colors.lightBlue500 : color;
      const [icon, iconOutline] = icons[name];
      const iconName = focused ? icon : iconOutline;
      return <Icon name={iconName} size={focusedSize} color={focusedColor} />;
    },
    headerShown: false,
  };
};
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const initialLocale = useSelector<AppState, Locale>(state => state.locale);
  console.log('in tap navigator, locale iso code', initialLocale);
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Main"
        component={StackNavigator}
        options={{tabBarLabel: 'Main', tabBarBadge: 3}}
      />
    </Tab.Navigator>
  );
}
