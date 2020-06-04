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
import { Card } from 'react-native-elements'
import axios from 'axios'

class RegisterView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      name: '',
      password: '',
      password2: '',
      errors: {},
      isAuthorized: false,
      isLoading: false
    }
    this.onPressLogin = this.onPressLogin.bind(this)
  }

  async onPressLogin () {
    const { email, name, password, password2 } = this.state
    const newUser = { email, name, password, password2 }
    console.log(newUser)

    const onSuccess = () => {
      // Set JSON Web Token on success
      this.setState({ isLoading: false, isAuthorized: true })
      this.props.navigation.navigate('Main', {
        username: this.state.name
      })
    }

    const onFailure = error => {
      console.log('here')
      console.log(error)
    }

    // Show spinner when call is made
    this.setState({ isLoading: true })

    await axios.post('https://slo-explore-308.herokuapp.com/users/new',
      {
        email: email,
        name: name,
        password: password,
        password2: password2
      }).then(() => {
      if (email === '' || name === '' || password === '' || password2 === '') {
        throw new Error('Fill out all fields')
      } else if (password.length < 6) {
        throw new Error('Password must be longer than 6 characters')
      } else if (password !== password2) {
        throw new Error('Passwords do not match')
      }
    })
      .then(onSuccess)
      .catch(onFailure)
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
                <Card>
                  <Text style={styles.loginText}>SLO Explore Registration</Text>
                  <View style={styles.textWrapper}>
                    <Text style={styles.credentialText}>{'Email:'}</Text>
                    <TextInput style={styles.credentialStyle}
                      onChangeText={(email) => this.setState({ email })}
                      value={this.state.email}
                    />
                  </View>
                  <View style={styles.textWrapper}>
                    <Text style={styles.credentialText}>{'Username:'}</Text>
                    <TextInput style={styles.credentialStyle}
                      onChangeText={(name) => this.setState({ name })}
                      value={this.state.name}
                    />
                  </View>
                  <View style={styles.textWrapper}>
                    <Text style={styles.credentialText}>{'Password:'}</Text>
                    <TextInput secureTextEntry={true} style={styles.credentialStyle}
                      onChangeText={(password) => this.setState({ password })}
                      value={this.state.password}
                    />
                  </View>
                  <View style={styles.textWrapper}>
                    <Text style={styles.credentialText}>{'Confirm Password:'}</Text>
                    <TextInput secureTextEntry={true} style={styles.credentialStyle}
                      onChangeText={(password2) => this.setState({ password2 })}
                      value={this.state.password2}
                    />
                  </View></Card>
              </ScrollView>
              <View style={styles.buttonWrapper}>
                <TouchableHighlight style={styles.buttonStyle}
                  onPress={this.onPressLogin}>
                  {/* onPress={() => this.props.navigation.navigate('SearchStack')} */}
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
    marginTop: '20%',
    flex: 1
  },
  loginText: {
    fontSize: 30,
    color: 'darkcyan',
    fontWeight: '400',
    marginBottom: 10,
    paddingLeft: 26,
    paddingRight: 30,
    paddingTop: 20,
    textShadowColor: '#BBB',
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
    height: Dimensions.get('window').height
  }
})

export default withNavigation(RegisterView)
