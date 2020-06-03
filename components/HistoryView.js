import React, { Component } from 'react'
import Item from './Item'
import axios from 'axios'
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Button
} from 'react-native'
import { withNavigation } from 'react-navigation'

import Constants from 'expo-constants'
// import { useNavigation } from '@react-navigation/native';
class HistoryView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: null,
      isLoading: true,
      hikes: []
    }

    this.getHikes = this.getHikes.bind(this)
  }

  async getHikes () {
    await axios.get('https://slo-explore-308.herokuapp.com/list/location/all/detail')
      .then(res => res.data)
      .then(data => {
        this.setState({
          selected: null,
          isLoading: false,
          hikes: data.splice(0, 5)
        })
      })
  }

  componentDidMount () {
    this.getHikes()
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('ProfileStack')}
          title='Back'
        />
        <FlatList
          data={this.state.hikes}
          renderItem={({ item }) => (
            <Item
              id={item._id}
              name={item.name}
              rating ={item.rating}
              description = {item.description}
              type = {item.type}
              reviewIds={item._reviews}
              photoPaths={item._photos}
              // selected={!!this.state.selected.get(item.name)}
              // onSelect={onSelect}
            />
          )}
          keyExtractor={item => item.name}
          extraData={this.state.selected}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  item: {
    backgroundColor: '#f0e68c',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  }
})

export default withNavigation(HistoryView)
