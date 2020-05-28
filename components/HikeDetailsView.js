import React, { Component } from 'react'
import StarRating from 'react-native-star-rating'
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

class HikeDetailsView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'N/A',
          text: 'N/A',
          url: 'https://via.placholder.com/150'
        },
        {
          title: 'N/A',
          text: 'N/A',
          url: 'https://via.placholder.com/150'
        },
        {
          title: 'N/A',
          text: 'N/A',
          url: '"https://via.placholder.com/150"'
        }
      ]
    }

    this._renderItem = this._renderItem.bind(this)
  }

  _renderItem ({ item, index }) {
    return (
      <View style={{
        backgroundColor: '#FFF',
        borderRadius: 8,
        height: 250,
        paddingBottom: 50,
        marginLeft: 5,
        marginRight: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1
      }}>
        <View style={styles.cardView}>
          <Image
            source = {{ uri: 'https://via.placeholder.com/150' }}
            style={styles.cardStyle}
          >
          </Image>
        </View>
        <View style={styles.textWrapper}>
          <Text style={{ fontSize: 30 }}>{item.title}</Text>
          <Text>{item.text}</Text>
        </View>
      </View>
    )
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
              source = {{ uri: 'https://via.placeholder.com/150' }}
              style={styles.imageStyle}>
            </Image>
            <Image
              source = {require('../assets/images/p_hike.png')}
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
            <SafeAreaView style={{ flex: 1, paddingTop: 50, height: 260 }}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                <Carousel
                  layout={'default'}
                  // eslint-disable-next-line no-return-assign
                  ref={ ref => this.carousel = ref }
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={250}
                  autoplay={true}
                  layoutCardOffset={2}
                  loop={true}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({ activeIndex: index }) } />
              </View>
            </SafeAreaView>
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
  }
})

export default withNavigation(HikeDetailsView)
