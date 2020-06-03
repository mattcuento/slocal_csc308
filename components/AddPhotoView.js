/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  Image,
  Button,
  Text, View,
  SafeAreaView
} from 'react-native'
import { withNavigation } from 'react-navigation'
import { Divider, Card, registerCustomIconType } from 'react-native-elements'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Carousel from 'react-native-snap-carousel'
import * as ImagePicker from 'expo-image-picker'
import { TouchableOpacity } from 'react-native-gesture-handler'
registerCustomIconType('font-awesome-5', FontAwesome5)

class AddPhotoView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedImage: 'https://via.placeholder.com/150'
    }

    this.permissions = this.permissions.bind(this)
  }

  async permissions () {
    const permissionResult = await ImagePicker.requestCameraRollPermissionsAsync()

    if (permissionResult.granted === false) {
      console.alert('Permission to access camera roll is required!')
      return
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync().then(
      photo => {
        this.setState({
          selectedImage: photo.uri
        })
      }
    )
  }

  render () {
    const { navigation } = this.props
    return (
      <ScrollView style={styles.container}>
        <View style={styles.view}>
          <TouchableOpacity
            onPress={this.permissions}
            style={styles.photoButton}
          >
            <Text style={styles.photoText}>
              Choose a Photo
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={{ uri: this.state.selectedImage.localUri }}
            style={styles.thumbnail}
          ></Image>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  photoButton: {

  },
  photoText: {

  },
  container: {
    marginVertical: 150,
    flex: 1,
    backgroundColor: '#d6e9d7',
    width: '100%',
    height: '150%'
  },
  imageView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#d6e9d7'
  },
  cardView: {
    width: '100%',
    height: '100%'
  },
  cardStyle: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  descText: {
    fontSize: 15
  },
  gearText: {
    fontSize: 15
  },
  imageStyle: {
    width: 360,
    height: 320
  },
  infoView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5
  },
  infoHeader: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  divView: {
    marginTop: 15,
    marginLeft: 22,
    marginRight: 22
  },
  divStyle: {
    backgroundColor: 'green',
    height: 2
  },
  reviewsView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonStyle: {
    width: 100,
    marginLeft: 10,
    marginRight: 10
  },
  textWrapper: {
    paddingHorizontal: 10
  }
})

export default withNavigation(AddPhotoView)
