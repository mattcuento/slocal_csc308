import React, { Component } from 'react'
import {
  ScrollView
} from 'react-native'
import AddPhotoView from '../components/AddPhotoView'

export default class HikeScreen extends Component {
  render () {
    return (
      <ScrollView>
        <AddPhotoView/>
      </ScrollView>
    )
  }
}
