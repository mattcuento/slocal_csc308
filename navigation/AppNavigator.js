import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import MainTabNavigator from './MainTabNavigator'
import HistoryScreen from '../screens/HistoryScreen'
import SettingsScreen from '../screens/SettingsScreen'
import HikeDetails from '../screens/HikeDetails'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import FavoritesScreen from '../screens/FavoritesScreen'

export default createAppContainer(
  createStackNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html

    Hike: HikeDetails,
    History: HistoryScreen,
    Settings: SettingsScreen,
    Main: MainTabNavigator,
    Login: LoginScreen,
    Register: RegisterScreen,
    Welcome: WelcomeScreen,
    Favorites: FavoritesScreen
  },
  {
    initialRouteName: 'Welcome',
    headerMode: 'none'
  }
  )
)
