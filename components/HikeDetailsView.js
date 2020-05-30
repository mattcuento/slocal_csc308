import React, { Component } from 'react'
import StarRating from 'react-native-star-rating'
import {
  ScrollView,
  StyleSheet,
  Image,
  Button,
  Text, View
} from 'react-native'
import { withNavigation } from 'react-navigation'
import { Divider, Card, registerCustomIconType } from 'react-native-elements'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
registerCustomIconType('font-awesome-5', FontAwesome5)

class HikeDetailsView extends Component {
  render () {
    const { navigation } = this.props
    return (
      <ScrollView style={styles.container}>
        <View style={styles.button}>
          <Button title="Go Back" onPress={() => navigation.goBack()}/>
        </View>
        <View style={styles.imageView}>
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
          <View style={styles.reviewsView}>
          </View>
        </Card>
        <View style={{ marginTop: 40 }}>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    alignItems: 'flex-start'
  },
  container: {
    flex: 1,
    backgroundColor: '#d6e9d7'
  },
  imageView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#d6e9d7'
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
  }
})

export default withNavigation(HikeDetailsView)
