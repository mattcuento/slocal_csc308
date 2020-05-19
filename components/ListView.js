import React, { Component } from 'react'
import { SearchBar } from 'react-native-elements'
import axios from 'axios'
import Item from './Item'
import {
  FlatList,
  StyleSheet,
  View,
  Text
} from 'react-native'

class ListView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: null,
      isLoading: true,
      hikes: [],
      text: ''
    }

    this.arrayholder = []
    this.getHikes = this.getHikes.bind(this)
    this.searchData = this.searchData.bind(this)
    this.renderHeader = this.renderHeader.bind(this)
  }

  searchData (text) {
    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.toUpperCase()}   
      ${item.name.toUpperCase()} ${item.name.toUpperCase()}`

      const textData = text.toUpperCase()

      return itemData.indexOf(textData) > -1
    })
    this.setState({ hikes: newData, text: text })
  }

  renderHeader () {
    return (

      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchData(text)}
        value= {this.state.text}
        autoCorrect={false}
      />
    )
  }

  async getHikes () {
    console.log('here')
    await axios.get('https://slo-explore-308.herokuapp.com/list/location/all/detail')
      .then(res => res.data)
      .then(data => {
        this.setState({
          selected: null,
          isLoading: false,
          hikes: data
        }, () => {
          this.arrayholder = data
        })
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  componentDidMount () {
    this.getHikes()
  }

  render () {
    if (!this.state.isLoading) {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.hikes}
            renderItem={({ item }) => (
              <Item
                image = {item.image}
                name={item.name}
                rating ={item.rating}
                description = {item.description}
              // selected={!!this.state.selected.get(item.name)}
              // onSelect={onSelect}
              />
            )}
            keyExtractor={item => item._id}
            extraData={this.state.selected}
            ListHeaderComponent={this.renderHeader}
          />
        </View>
      )
    } else {
      return (
        <View style={styles.loadView}>
          <Text style={styles.loadText}>
            Loading...
          </Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  loadView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  loadText: {
    color: '#FFF',
    opacity: 0.7,
    fontSize: 60
  }
})

export default ListView
