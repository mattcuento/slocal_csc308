import { createBrowserApp } from '@react-navigation/web'
import { createSwitchNavigator } from 'react-navigation'

import AuthNavigator from './AuthNavigator'
import HikeNavigator from './HikeNavigator'
import MainTabNavigator from './MainTabNavigator'
import HistoryNavigator from './HistoryNavigator'
import SettingsNavigator from './SettingsNavigator'

const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html

  Auth: AuthNavigator,
  Hike: HikeNavigator,
  History: HistoryNavigator,
  Settings: SettingsNavigator,
  Main: MainTabNavigator

})
switchNavigator.path = ''

export default createBrowserApp(switchNavigator, { history: 'hash' })
