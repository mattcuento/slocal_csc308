import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
// import FavoritesView from '../components/FavoritesView'
import ListView from '../components/ListView'

export default function FavoritesScreen () {
  return (
    <ScrollView style={styles.container}>
      <ListView/>
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
