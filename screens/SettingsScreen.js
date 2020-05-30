import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import {
  StyleSheet,
  ImageBackground,
  View,
  Text
} from 'react-native'
import { Card } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'

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
      <Card>
        <View style={styles.wrapper}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ProfileStack')}
            style={{ marginBottom: 10 }}
          ><Text>Back</Text></TouchableOpacity>
          <TouchableOpacity
            title="Location Services"
            color="darkcyan"
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('Register')}
          ><Text>Location Services</Text></TouchableOpacity>
          <TouchableOpacity
            color="darkcyan"
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('Register')}
          ><Text>Clear Data</Text></TouchableOpacity>
          <TouchableOpacity
            color="darkcyan"
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('Welcome')}
          ><Text>Log Out</Text></TouchableOpacity>
        </View>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 280,
    height: 50,
    backgroundColor: '#FFF',
    margin: 15,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  imageStyle: {
    paddingTop: '20%',
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  },
  wrapper: {
    alignItems: 'center',
    width: '100%'
  }
})

export default withNavigation(Background)
