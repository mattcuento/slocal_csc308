import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
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

const MapStack = createStackNavigator(
  {
    Map: MapScreen
  },
  config
)

MapStack.navigationOptions = {
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

MapStack.path = ''

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen
  },
  config
)

SearchStack.navigationOptions = {
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

SearchStack.path = ''

const StatTrackerStack = createStackNavigator(
  {
    StatTracker: StatTrackerScreen
  },
  config
)

StatTrackerStack.navigationOptions = {
  tabBarLabel: 'Stat Tracker',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-radio-button-on' : 'md-radio-button-on'} />
  )
}

StatTrackerStack.path = ''

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen
  },
  config
)

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
  )
}

ProfileStack.path = ''

const tabNavigator = createBottomTabNavigator({
  SearchStack,
  MapStack,
  StatTrackerStack,
  ProfileStack

})

tabNavigator.path = ''

export default tabNavigator
