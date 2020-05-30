import React, { Component } from 'react'
import {
  TouchableOpacity,
  Text, Image, View,
  StyleSheet
} from 'react-native'
import { useNavigation } from 'react-navigation-hooks'

class Item extends Component {
  render () {
    const { navigation } = this.props
    
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Hike', {
          hikeName: this.props.name,
          hikeRating: this.props.rating,
          hikeDescription: this.props.description
        })}
        style={[
          styles.item,
          { backgroundColor: this.props.selected ? '#EEEEEE' : '#FFFFFF' }
        ]}
      >
        <View style={styles.row}>
          <Image
            source = {{ uri: 'https://via.placeholder.com/150' }}
            style={styles.image}>
          </Image>

          <View style={styles.column}>
            <Text style={styles.nameText}>{this.props.name}</Text>
            <Text>Rating: <Text style={styles.rating}>{this.props.rating}</Text></Text>
            <Text style={styles.description}>Description: {this.props.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default function (props) {
  const navigation = useNavigation()
  return <Item {...props} navigation={navigation}/>
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#BBBBBB',
    borderRadius: 5,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  rating: {
    color: '#FF0000',
    marginVertical: 3
  },
  column: {
    flex: 1,
    flexDirection: 'column'
  },
  image: {
    marginRight: 10,
    width: 125,
    height: 125
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  description: {
    marginVertical: 3
  }
})
