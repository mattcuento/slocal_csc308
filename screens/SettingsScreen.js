import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import {
  View,
  Button,
  StyleSheet,
  ImageBackground
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
      <View style={styles.wrapper}>
        <View style={{ marginTop: 40 }}>
          <View style={styles.buttonStyle}>
            <Button
              title="Location Services"
              color="darkcyan"
              onPress={() => this.props.navigation.navigate('Register')}
            />
          </View>
          <View style={styles.buttonStyle}>
            <Button
              title="Clear Data"
              color="darkcyan"
              onPress={() => this.props.navigation.navigate('Register')}
            />
          </View>
          <View style={styles.buttonStyle}>
            <Button
              title="Log Out"
              color="darkcyan"
              onPress={() => this.props.navigation.navigate('Welcome')}
            />
          </View>
        </View>
      </View>
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
