import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import type {RouteProp, ParamListBase} from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import Timer from './Timer';

type TabBarIconProps = {focused: boolean; color: string; size: number};

const icons: Record<string, string[]> = {
  Alarm: ['ios-alarm', 'ios-alarm-outline'],
  Timer: ['ios-timer', 'ios-timer-outline'],
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
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Alarm"
        component={StackNavigator}
        options={{tabBarLabel: 'Alarm', tabBarBadge: 2}}
      />
      <Tab.Screen
        name="Timer"
        component={Timer}
        options={{tabBarLabel: 'Timer'}}
      />
    </Tab.Navigator>
  );
}
