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
registerCustomIconType('font-awesome-5', FontAwesome5)

class AddPhotoView extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const { navigation } = this.props
    return (
      <ScrollView style={styles.container}>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
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
