import React, { Component } from 'react'
import {
  ScrollView
} from 'react-native'
import AddReviewView from '../components/AddReviewView'

export default class HikeScreen extends Component {
  render () {
    return (
      <ScrollView>
        <AddReviewView/>
      </ScrollView>
    )
  }
}
