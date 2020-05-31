import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  StyleSheet
} from 'react-native'
import AddReviewView from '../components/AddReviewView'

export default class AddReviewScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <AddReviewView/>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d6e9d7'
  }
})
