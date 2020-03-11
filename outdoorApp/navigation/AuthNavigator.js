import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer,
         createStackNavigator, 
         createSwitchNavigator } from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const config = Platform.select({
  web: { headerMode: 'None' },
  default: {},
});

const AuthNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen
  },
  config
);

export default AuthNavigator;
