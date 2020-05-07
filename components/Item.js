
import React, { Component } from 'react'
import axios from 'axios'
import {
  SafeAreaView,
  TouchableOpacity,
  Button,
  FlatList,
  StyleSheet,
  Text, Image, View
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import Constants from 'expo-constants'
// import { useNavigation } from '@react-navigation/native';
import { useNavigation } from 'react-navigation-hooks'

function Item ({ image, name, rate, loc, diff, selected, onSelect, details, ...props }) {
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
          <Text style={styles.name}>Location: {loc}</Text>
          <Text style={styles.name}>Rating: {rate}</Text>
          <Text style={styles.name}>Difficulty: {diff}</Text>
          <Text style={styles.name}>Description: {details}</Text>
        </View>

      </View>

    </TouchableOpacity>
  )
}
