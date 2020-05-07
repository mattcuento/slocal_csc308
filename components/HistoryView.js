import React, { Component } from 'react'
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text, Image, View
} from 'react-native'

import Constants from 'expo-constants'
// import { useNavigation } from '@react-navigation/native';
import { useNavigation } from 'react-navigation-hooks'

function Item ({ image, name, time, selected, onSelect, ...props }) {
  const { navigate } = useNavigation()

  return (
    <TouchableOpacity

      onPress={() => navigate('Hike')}

      style={[
        styles.item,
        { backgroundColor: selected ? '#bdb76b' : '#f0e68c' }
      ]}
    >
      <View style= {{
        flex: 1,
        flexDirection: 'row'

      }}>
        <Image
          source = {{ uri: image }}
          style = {{ width: 200, height: 200, marginHorizontal: 10 }}>
        </Image>

        <View style = {{
          flex: 1,
          flexDirection: 'column'
        }}>

          <Text style={styles.name}>{name}</Text>
          <Text style={styles.name}>Completed: {time}</Text>

        </View>

      </View>

    </TouchableOpacity>
  )
}

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
    const hikes = await axios.get('https://slo-explore-308.herokuapp.com/')
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
    const hikes = this.getHikes()
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.hikes}
          renderItem={({ item }) => (
            <Item
              image = {item.image}
              name={item.name}
              time= {item.time}
              navigation={this.props}
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

export default HistoryView
