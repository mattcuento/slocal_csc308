import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ExpoConfigView } from '@expo/samples'
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
