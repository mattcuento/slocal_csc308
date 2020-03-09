import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer,
         createStackNavigator, 
         createSwitchNavigator } from 'react-navigation-stack';

import HikeScreen from '../screens/HikeDetails';

const config = Platform.select({
  web: { headerMode: 'None' },
  default: {},
});

const HikeNavigator = createStackNavigator(
  {
    Hike: HikeScreen,
  },
  config
);

export default HikeNavigator;
