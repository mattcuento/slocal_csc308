import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  ScrollView,
  Dimensions,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ImageBackground,
  KeyboardAvoidingView
} from 'react-native'
import { withNavigation } from 'react-navigation'

class LoginView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: '',
      pass: ''
    }
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <ImageBackground
          style={styles.imageStyle}
          source={require('../assets/images/slo-background.jpg')}>
          <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
            <View style={styles.scrollViewWrapper}>
              <ScrollView>
                <Text style={styles.loginText}>SLO Explore Login</Text>
                <View style={styles.textWrapper}>
                  <Text style={styles.credentialText}>{'Username:'}</Text>
                  <TextInput style={styles.credentialStyle}
                    onChangeText={(user) => this.setState({ user })}
                    value={this.state.user}
                  />
                </View>
                <View style={styles.textWrapper}>
                  <Text style={styles.credentialText}>{'Password:'}</Text>
                  <TextInput secureTextEntry={true} style={styles.credentialStyle}
                    onChangeText={(pass) => this.setState({ pass })}
                    value={this.state.pass}
                  />
                </View>
              </ScrollView>
              <View style={styles.buttonWrapper}>
                <TouchableHighlight style={styles.buttonStyle}
                  onPress={() => this.props.navigation.navigate('SearchStack')}>
                  <Icon
                    name="angle-right"
                    color="white"
                    size={32}
                    style={styles.iconStyle}
                  />
                </TouchableHighlight>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1
  },
  textWrapper: {
    display: 'flex',
    flex: 1,
    paddingLeft: 30
  },
  scrollViewWrapper: {
    marginTop: 40,
    flex: 1
  },
  loginText: {
    fontSize: 30,
    color: 'white',
    fontWeight: '400',
    marginBottom: 10,
    paddingLeft: 26,
    paddingRight: 30,
    paddingTop: 20,
    textShadowColor: 'darkcyan',
    textShadowRadius: 6
  },
  credentialText: {
    color: 'darkcyan',
    fontWeight: '300'
  },
  credentialStyle: {
    color: 'black',
    borderBottomColor: 'darkcyan',
    borderBottomWidth: 2,
    height: 30,
    marginRight: 60,
    marginBottom: 12
  },
  buttonWrapper: {
    alignItems: 'flex-end',
    right: 20,
    bottom: 20,
    paddingTop: 0
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 60,
    height: 60,
    backgroundColor: 'green',
    opacity: 0.6
  },
  iconStyle: {
    marginRight: -2,
    marginTop: -2
  },
  imageStyle: {
    flex: 1,
    alignSelf: 'stretch',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 70
  }
})

export default withNavigation(LoginView)
