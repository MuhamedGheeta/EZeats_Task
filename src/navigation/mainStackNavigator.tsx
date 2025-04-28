// MainStackNavigator.tsx

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ScreenNames from './screenNames';

import DetailsScreen from '@screens/details';
import BottomTabNavigator from './bottomTabNavigator';

const Stack = createStackNavigator();

const MainStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.BottomTabs}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ScreenNames.BottomTabs}
        component={BottomTabNavigator}
      />
      <Stack.Screen
        name={ScreenNames.DetailsScreen}
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
