import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TransitionPresets} from '@react-navigation/stack';
import Home from './Home';
import TimeModal from './TimeModal';
import EditMessage from './EditMessage';

export type RootStackParamList = {
  Home: undefined;
  ModalStackView: undefined;
};
export type ModalStackParamList = {
  TimeModal: undefined;
  EditMessage: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const ModalStack = createNativeStackNavigator<ModalStackParamList>();

const ModalStackView = () => {
  return (
    <ModalStack.Navigator screenOptions={{headerShown: false}}>
      <ModalStack.Screen
        name="TimeModal"
        component={TimeModal}
        options={{
          headerShown: false,
          presentation: 'modal',
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
      <ModalStack.Screen
        name="EditMessage"
        component={EditMessage}
        options={{
          headerShown: true,
          presentation: 'card',
        }}
      />
    </ModalStack.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen
        name="ModalStackView"
        component={ModalStackView}
        options={{
          headerShown: false,
          presentation: 'modal',
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
    </RootStack.Navigator>
  );
};

export default StackNavigator;

// export default function StackNavigator() {
// const interpolator = useNavigationHorizontalInterpolator();
// const leftOptions = useMemo<StackNavigationOptions>(
//   () => ({
//     gestureDirection: 'horizontal-inverted',
//     cardStyleInterpolator: interpolator,
//   }),
//   [],
// );
// const rightOptions = useMemo<StackNavigationOptions>(
//   () => ({
//     gestureDirection: 'horizontal',
//     cardStyleInterpolator: interpolator,
//   }),
//   [],
// );
// return (
//   <Stack.Navigator screenOptions={{headerShown: false}}>
//     <Stack.Screen name="Home" component={Home} />
//     <Stack.Screen
//       name="TimeModal"
//       component={TimeModal}
//       options={{presentation: 'modal'}}
//     />
//     <Stack.Screen name="HomeLeft" component={EditMessage} />
//     {/* <Stack.Screen name="HomeRight" component={HomeRight} options={rightOptions}/> */}
//   </Stack.Navigator>
// );
// }
