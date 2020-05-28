import React, { Component } from 'react'
import {
  ScrollView
} from 'react-native'
import HikeDetailsView from '../components/HikeDetailsView'

export default class HikeScreen extends Component {
  render () {
    return (
      <ScrollView>
        <HikeDetailsView/>
      </ScrollView>
    )
  }
}
