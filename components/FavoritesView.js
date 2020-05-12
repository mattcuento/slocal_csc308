import React, { Component } from 'react'
import axios from 'axios'
import {
  SafeAreaView,
  Button,
  FlatList,
  StyleSheet
} from 'react-native'
import Item from './Item'
import { withNavigation } from 'react-navigation'

class FavoritesView extends Component {
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
    await axios.get('https://slo-explore-308.herokuapp.com/')
      .then(res => res.data)
      .then(data => {
        this.setState({
          selected: null,
          isLoading: false,
          hikes: data
        })
        console.log(data)
      })
  }

  componentDidMount () {
    this.getHikes()
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('SearchStack')}
          title='Back'
        />
        <FlatList
          data={this.state.hikes}
          renderItem={({ item }) => (
            <Item
              image = {item.image}
              name={item.name}
              rate={item.rating}
              details = {item.description}
              // selected={!!this.state.selected.get(item.name)}
              // onSelect={onSelect}
            />
          )}
          keyExtractor={item => item._id}
          extraData={this.state.selected}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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

export default withNavigation(FavoritesView)
