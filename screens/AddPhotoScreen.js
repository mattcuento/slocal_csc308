import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet
} from 'react-native'
import AddPhotoView from '../components/AddPhotoView'

export default class AddPhotoScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <AddPhotoView/>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d6e9d7'
  }
})
