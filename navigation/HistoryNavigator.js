import React from 'react'
import { Platform } from 'react-native'
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation-stack'

import HistoryScreen from '../screens/HistoryScreen'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
})

const HistoryNavigator = createStackNavigator(
  {
    HistoryScreen: HistoryScreen
  },
  config
)

export default HistoryNavigator
