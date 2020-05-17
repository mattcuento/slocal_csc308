import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import {
  Button,
  StyleSheet,
  ImageBackground, SafeAreaView
} from 'react-native'

export class Background extends Component {
  render () {
    return (
      <ImageBackground
        style={styles.imageStyle}
        source={require('../assets/images/slo-background.jpg')}>
        { <Settings navigation={this.props.navigation}/> }
      </ImageBackground>
    )
  }
}

export class Settings extends Component {
  render () {
    return (
      <SafeAreaView style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('ProfileStack')}
          title='Back'
        />
        <Button
          title="Location Services"
          color="darkcyan"
          onPress={() => this.props.navigation.navigate('Register')}
        />

        <Button
          title="Clear Data"
          color="darkcyan"
          onPress={() => this.props.navigation.navigate('Register')}
        />
        <Button
          title="Log Out"
          color="darkcyan"
          onPress={() => this.props.navigation.navigate('Welcome')}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    paddingTop: 40,
    flex: 1,
    alignItems: 'center'
  },
  textWrapper: {
    display: 'flex',
    flex: 1,
    paddingLeft: 30
  },
  settingsText: {
    fontSize: 50,
    color: 'white',
    fontWeight: '800',
    marginBottom: 60,
    textShadowColor: 'darkcyan',
    textShadowRadius: 6
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
  }
})

export default withNavigation(Background)
