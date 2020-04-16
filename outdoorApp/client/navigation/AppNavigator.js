import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthNavigator from './AuthNavigator';
import HikeNavigator from './HikeNavigator';
import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    History: HistoryNavigator,
    Auth: AuthNavigator,
    Hike: HikeNavigator,
    Main: MainTabNavigator,

  })
);
