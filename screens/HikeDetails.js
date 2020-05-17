import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet
} from 'react-native'
import HikeDetailsView from '../components/HikeDetailsView'

export default class HikeScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <HikeDetailsView/>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  imageWrapper: {
    display: 'flex',
    flex: 1
  },
  descWrapper: {
    display: 'flex',
    flex: 2,
    backgroundColor: 'seagreen'
  },
  nameStyle: {
    fontSize: 50,
    fontWeight: '800'
  },
  descStyle: {
    fontSize: 18,
    fontWeight: '400'
  },
  gearWrapper: {
    display: 'flex',
    flex: 1.5,
    backgroundColor: 'seagreen'
  },
  buttonStyle: {
    marginBottom: 30,
    marginLeft: 90,
    height: 30,
    width: 100
  },
  imageStyle: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  },
  gearStyle: {
    flex: 1,
    alignSelf: 'stretch',
    width: 140,
    height: 90
  }
})
