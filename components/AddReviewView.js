/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import StarRating from 'react-native-star-rating'
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  TextInput,
  SafeAreaView
} from 'react-native'
import { withNavigation } from 'react-navigation'
import { Divider, Button, Text, Input, Card, registerCustomIconType } from 'react-native-elements'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Carousel from 'react-native-snap-carousel'
registerCustomIconType('font-awesome-5', FontAwesome5)

class AddReviewView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cardTitle: 'Add Review for ',
      starCount: 0,
      comment: ''
    }
  }

  onStarRatingPress (rating) {
    this.setState({
      starCount: rating
    })
  }

  render () {
    const { navigation } = this.props
    return (
      <ScrollView style={styles.container}>
        <View style={styles.cardView}>
          <Card title={`${this.state.cardTitle}${navigation.getParam('hikeName', 'missing hike name')}`}>
            <View style={styles.ratingView}>
              <Text style={styles.ratingText}>Rating: </Text>
              <StarRating
                starSize={26}
                rating={this.state.starCount}
                selectedStar={(rating) => this.onStarRatingPress(rating)}
                fullStarColor='#4EF3AB'
              />
            </View>
            <View>
              <Text style={styles.ratingText}>Comment: </Text>
              <Input
                placeholder='Enter comments here...'
                onChangeText={newComment => this.setState({ comment: newComment })}
              />
            </View>
          </Card>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={styles.buttonView}>
              <Button
                title='Submit Review'
              />
            </View>
            <View style={styles.buttonView}>
              <Button
                title='Go Back'
                onPress={() => navigation.goBack()}
              />
            </View>
          </View>
        </View>
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
    height: 800
  },
  imageView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#d6e9d7'
  },
  buttonView: {
    width: 330,
    marginTop: 10
  },
  cardView: {
    marginTop: 30,
    width: '100%',
    height: '100%'
  },
  cardStyle: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  ratingText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  ratingView: {
    flex: 1,
    flexDirection: 'row'
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

export default withNavigation(AddReviewView)
