import React from 'react'
import { StyleSheet } from 'react-native'
import ProfileView from '../components/ProfileView'

export default function ProfileScreen () {
  return (
    <ProfileView/>
  )
}

ProfileScreen.navigationOptions = {
  title: 'Profile'
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'seagreen'
  }
})
