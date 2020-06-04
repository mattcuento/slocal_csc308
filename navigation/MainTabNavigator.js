import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import TabBarIcon from '../components/TabBarIcon'
import MapScreen from '../screens/MapScreen'
import StatTrackerScreen from '../screens/StatTrackerScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SearchScreen from '../screens/SearchScreen'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
})

const tabNavigator = createBottomTabNavigator({
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === 'ios'
              ? 'ios-search'
              : 'md-search'
          }
        />
      )
    }
  },

  Map: {
    screen: MapScreen,
    navigationOptions: {
      tabBarLabel: 'Map',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === 'ios'
              ? 'ios-pin'
              : 'md-pin'
          }
        />
      )
    }
  },

  StatTracker: {
    screen: StatTrackerScreen,
    navigationOptions: {
      tabBarLabel: 'Stat Tracker',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === 'ios'
              ? 'ios-radio-button-on'
              : 'md-radio-button-on'
          }
        />
      )
    }
  },

  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused}
          name={
            Platform.OS === 'ios'
              ? 'ios-person'
              : 'md-person'
          }
        />
      )
    }
  }
},
{
  initialRouteName: 'Search'
},
config
)

tabNavigator.path = ''

export default tabNavigator
