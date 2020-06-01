import React, { Component } from 'react'
import MapView, { Marker } from 'react-native-maps'
import {
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native'
import { withNavigation } from 'react-navigation'
import { markerInfo } from '../constants/MapMarkers.js'

class HikeMapView extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <MapView style={styles.mapStyle}
          initialRegion={{
            latitude: 35.28275,
            longitude: -120.65962,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}>
          {markerInfo.map(marker => (
            <Marker
              key={marker.id}
              coordinate={marker.coordinate}
              title={marker.title}
            />
          ))}
        </MapView>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6e9d7'
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
})

export default withNavigation(HikeMapView)
