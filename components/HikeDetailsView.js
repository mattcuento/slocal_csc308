import React, { Component } from 'react'
import StarRating from 'react-native-star-rating'
import ShowMore from 'react-native-show-more-button'
import { SliderBox } from 'react-native-image-slider-box'
import {
  ScrollView,
  StyleSheet,
  Image,
  Button,
  Text,
  View
} from 'react-native'
import { withNavigation } from 'react-navigation'
import { Divider, Card, registerCustomIconType } from 'react-native-elements'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios'
registerCustomIconType('font-awesome-5', FontAwesome5)

class HikeDetailsView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      images: [],
      isLoading: true,
      reviewIds: [],
      reviews: []
    }

    this.getHikeDetails = this.getHikeDetails.bind(this)
    this.getReviewsFromIds = this.getReviewsFromIds.bind(this)
  }

  componentDidMount () {
    this.getHikeDetails()
  }

  async getReviewsFromIds () {
    await axios.post('https://slo-explore-308.herokuapp.com/list/review/', {
      reviewIds: this.state.reviewIds
    })
      .then(res => res.data)
      .then(data => {
        this.setState({
          ...this.state,
          reviews: data
        })
      })
      .catch(err => console.log(err))
  }

  async getHikeDetails () {
    // TODO need reviews and other stuff too or params
    const { navigation } = this.props
    let photos = ['https://via.placeholder.com/200']
    const url = 'https://slo-explore-308.herokuapp.com/list/location/' + navigation.getParam('id', 0) + '/' + navigation.getParam('type', 0)
    console.log(url)
    await axios.get(url)
      .then(res => res.data)
      .then(data => {
        if (data._photos.length > 0) {
          photos = data._photos
        }
        this.setState({
          isLoading: false,
          images: photos,
          reviewIds: data._reviews,
          reviews: this.state.reviews
        })
        this.getReviewsFromIds()
      })
      .catch(err => console.log(err))
  }

  render () {
    const { navigation } = this.props
    return (
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Button
            onPress={() => this.props.navigation.navigate('SearchStack')}
            title='Back'
          />
          <View style={styles.imageView}>
            <Image
              source = {{ uri: this.state.images[0] }}
              style={styles.imageStyle}>
            </Image>
          </View>
          <View style={styles.divView}>
            <Divider style={styles.divStyle}/>
          </View>
          <View>
            <Card title={navigation.getParam('hikeName', 'Missing Hike Name')}>
              <View style={styles.infoView}>
                <Text style={styles.infoHeader}>Rating: </Text>
                <StarRating
                  starSize={26}
                  rating={navigation.getParam('hikeRating', 0)}
                  fullStarColor='#4EF3AB'
                />
              </View>
              <View style={styles.descView}>
                <Text style={styles.infoHeader}>Description: </Text>
                <Text style={styles.descText}>{navigation.getParam('hikeDescription', 'No description')}</Text>
              </View>
              <View style={styles.gearView}>
                <Text style={styles.infoHeader}>Recommended Gear: </Text>
                <Text style={styles.gearText}>{navigation.getParam('hikeGear', 'None')}</Text>
              </View>
            </Card>
          </View>
          <View style={styles.divView}>
            <Divider style={styles.divStyle}/>
          </View>
          <Card title='User Reviews'>
            <ScrollView>

            </ScrollView>
            <View style={styles.reviewsView}>
              <Text>Reviews</Text>
            </View>
          </Card>
          <Card title='Photos'>
            <View style={styles.imageContainer}>
              <SliderBox images={this.state.images}
                parentWidth={340}
              ></SliderBox>
            </View>
          </Card>
          <View style={{ marginTop: 40 }}>
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
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default withNavigation(HikeDetailsView)
