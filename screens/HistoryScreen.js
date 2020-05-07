import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import HistoryView from '../components/HistoryView'

export default function HistoryScreen () {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <HistoryView/>

    </ScrollView>
  )
}

HistoryScreen.navigationOptions = {
  title: 'History'

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'seagreen'

  }

})
