import React, { Component } from 'react'
import axios from 'axios'
import { withNavigation } from 'react-navigation'
import {
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  Image
} from 'react-native'
import Axios from 'axios'

export class ProfileView extends Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = {
      name: '',
      hikes: 0,
      joinDate: '',
      bio: ''
    }

    this.getUser = this.getUser.bind(this)
  }

  async getUser () {
    await axios.get('https://slo-explore-308.herokuapp.com/users/one')
      .then(res => res.data)
      .then(data => {
        this.setState({
          name: data.username,
          hikes: 1,
          joinDate: data.time,
          bio: 'this worked',
        })
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  componentDidMount () {
    this.getUser()
  }

  render () {
    return (
      <>
        <ScrollView style={styles.mainContainer}>
          <View style={styles.avatarContainer}>
            <Avatar/>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.nameText}>{this.state.name}</Text>
            <View style={styles.textSpacer}>
            </View>
            <Text style={{ marginLeft: 5 }}>
              <Text style={styles.headerText}>Hikes Completed: </Text>
              <Text style={styles.buttonText}>{this.state.hikes}</Text>
            </Text>
            <Text style={{ marginLeft: 5 }}>
              <Text style={styles.headerText}>Joined On: </Text>
              <Text style={styles.buttonText}>{this.state.joinDate}</Text>
            </Text>
            <Text style={{ marginLeft: 5, paddingBottom: 5 }}>
              <Text style={styles.headerText}>Bio:</Text>
              <Text style={{ fontSize: 18 }}>{this.state.bio}</Text>
            </Text>
          </View>
          <View style={styles.mainContainer}>
            <TouchableOpacity style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('Favorites')}>
              <Text style={styles.buttonText}>Favorites</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('History')}>
              <Text style={styles.buttonText}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('Settings')}>
              <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Logout</Text>
            </View>
          </View>
        </ScrollView>
      </>
    )
  }
}

export class Avatar extends Component {
  render () {
    return (
      <Image
        resizeMode="contain"
        source={require('../assets/images/gramps.png')}
        style={styles.avatarImage}
      />
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'seagreen',
    flex: 1
  },
  avatarContainer: {
    backgroundColor: 'seagreen',
    flex: 1,
    flexDirection: 'row'
  },
  avatarImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: '#f0e68c',
    marginBottom: 20,
    marginLeft: 20,
    marginTop: 20
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: '#f0e68c',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20
  },
  infoContainer: {
    flex: 1,
    backgroundColor: '#f0e68c',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20
  },
  buttonText: {
    fontSize: 24,
    marginLeft: 5
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  nameText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 5
  },
  textSpacer: {
    backgroundColor: '#f0e68c',
    marginTop: 15
  }
})

export default withNavigation(ProfileView)
