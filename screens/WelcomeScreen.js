import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import {
  Text,
  View,
  Button,
  StyleSheet,
  ImageBackground
} from 'react-native'
import { Card } from 'react-native-elements'

export class Landing extends Component {
  render () {
    return (
      <ImageBackground
        style={styles.imageStyle}
        source={require('../assets/images/slo-background.jpg')}>
        { <Welcome navigation={this.props.navigation}/> }
      </ImageBackground>
    )
  }
}

export class Welcome extends Component {
  render () {
    return (
      <View style={styles.outer}>
        <Card style={styles.wrapper}>
          <View >
            <Text style={styles.welcomeText}>SLO Explore</Text>
            <View style={styles.buttonStyle}>
              <Button
                title="Sign Up"
                color="darkcyan"
                onPress={() => this.props.navigation.navigate('Register')}
              />
            </View>
            <View style={styles.buttonStyle}>
              <Button
                title="Login"
                color="darkcyan"
                onPress={() => this.props.navigation.navigate('Login')}
              />
            </View>
          </View>
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  outer: {
    paddingTop: '20%'
  },
  wrapper: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textWrapper: {
    display: 'flex',
    flex: 1
  },
  welcomeText: {
    fontSize: 50,
    color: 'darkcyan',
    fontWeight: '800',
    textShadowColor: '#BBB',
    textShadowRadius: 6,
    padding: 20,
    textAlign: 'center'
  },
  buttonStyle: {
    height: 30,
    width: 100,
    alignSelf: 'center',
    margin: 15
  },
  imageStyle: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  }
})

export default withNavigation(Landing)
