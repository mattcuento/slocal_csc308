import React, { Component } from 'react'
import StarRating from 'react-native-star-rating'
import {
  Text, View,
  StyleSheet
} from 'react-native'
import { Card } from 'react-native-elements'

class Review extends Component {
  render () {
    return (
      <Card>
        <View style={styles.header}>
          <Text style={styles.nameText}>{this.props.user}</Text>
          <StarRating
            starSize={13}
            rating={this.props.rating}
            fullStarColor='#000'
          />
        </View>
        <View style={styles.divider}></View>
        <View style={styles.content}>
          <Text>{this.props.description}</Text>
        </View>
      </Card>
    )
  }
}

export default Review

const styles = StyleSheet.create({
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  header: {
    width: '25%'
  },
  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 5
  },
  content: {
    padding: 2
  }
})
