import { Platform } from 'react-native'
import {
  createStackNavigator
} from 'react-navigation-stack'

import LoginScreen from '../screens/LoginScreen'
import LoginScreen2 from '../screens/LoginScreen2'
import RegisterScreen from '../screens/RegisterScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import FavoritesScreen from '../screens/FavoritesScreen'

const config = Platform.select({
  web: { headerMode: 'None' },
  default: {}
})

const AuthNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Login: LoginScreen,
    Login2: LoginScreen2,
    Register: RegisterScreen,
    Favorites: FavoritesScreen
  },
  config
)

export default AuthNavigator
