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
import { Card } from 'react-native-elements'

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
          bio: 'this worked'
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
            <View style={{ flex: 1 }}>
              <Avatar/>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', padding: 5 }}>
              <Text style={styles.nameText}>{this.state.name}</Text>
              <Text style={styles.headerText}>Joined On: <Text style={styles.buttonText}>{this.state.joinDate}</Text></Text>
            </View>
          </View>
          <Card>
            <View style={styles.infoContainer}>
              <Text style={{ marginLeft: 5 }}>
                <Text style={styles.headerText}>Hikes Completed: </Text>
                <Text style={styles.buttonText}>{this.state.hikes}</Text>
              </Text>
              <Text style={{ marginLeft: 5, paddingBottom: 5 }}>
                <Text style={styles.headerText}>Bio:</Text>
                <Text style={{ fontSize: 18 }}>{this.state.bio}</Text>
              </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
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
              <TouchableOpacity style={styles.buttonContainer}
                onPress={() => this.props.navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </Card>
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
    backgroundColor: '#d6e9d7',
    flex: 1
  },
  avatarContainer: {
    flexDirection: 'row'
  },
  avatarImage: {
    flex: 1,
    width: 150,
    height: 150,
    borderRadius: 100,
    margin: 35
  },
  buttonContainer: {
    flex: 1,
    width: '75%',
    backgroundColor: '#FFF',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  infoContainer: {
    flex: 1,
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
    marginTop: 15
  }
})

export default withNavigation(ProfileView)
