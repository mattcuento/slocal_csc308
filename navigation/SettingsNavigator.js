import { Platform } from 'react-native'
import {
  createStackNavigator
} from 'react-navigation-stack'

import SettingsScreen from '../screens/SettingsScreen'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
  title: 'Settings'
})

const SettingsNavigator = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
)

export default SettingsNavigator
