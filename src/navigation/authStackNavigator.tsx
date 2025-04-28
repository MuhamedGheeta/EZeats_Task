// MainStackNavigator.tsx

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ScreenNames from './screenNames';
import SigninScreen from '@screens/auth/signin';

import OtpScreen from '@screens/auth/otp';

const Stack = createStackNavigator();

const AuthStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.Singin}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreenNames.Singin} component={SigninScreen} />
      <Stack.Screen name={ScreenNames.Otp} component={OtpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
