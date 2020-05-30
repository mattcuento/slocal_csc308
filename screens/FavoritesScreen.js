import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
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
    backgroundColor: '#d6e9d7'
  }
})
