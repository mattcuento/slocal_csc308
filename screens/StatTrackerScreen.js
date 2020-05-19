import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import StatTrackerView from '../components/StatTrackerView'

export default function StatTrackerScreen () {
  return (
    <ScrollView style={styles.container}>
      <StatTrackerView/>
    </ScrollView>
  )
}

StatTrackerScreen.navigationOptions = {
  title: 'Stat Tracker'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
})
