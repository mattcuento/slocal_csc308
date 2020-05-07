import { Platform } from 'react-native'
import {
  createStackNavigator
} from 'react-navigation-stack'

import HikeScreen from '../screens/HikeDetails'

const config = Platform.select({
  web: { headerMode: 'None' },
  default: {}
})

const HikeNavigator = createStackNavigator(
  {
    Hike: HikeScreen
  },
  config
)

export default HikeNavigator
