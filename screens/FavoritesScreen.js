import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ExpoConfigView } from '@expo/samples'
import FavoritesView from '../components/FavoritesView'

export default function FavoritesScreen () {
  return (
    <ScrollView style={styles.container}>
      <FavoritesView/>
    </ScrollView>
  )
}

FavoritesScreen.navigationOptions = {
  title: 'Favorites'
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'seagreen'
  }
})
