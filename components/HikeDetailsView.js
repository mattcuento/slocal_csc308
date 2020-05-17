import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  Button,
  Image,
  Text, View
} from 'react-native'
import { withNavigation } from 'react-navigation'
import { Divider, Icon, Card, registerCustomIconType } from 'react-native-elements'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
registerCustomIconType('font-awesome-5', FontAwesome5)

class HikeDetailsView extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
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
          <Card title={'The P'}>
            <View style={styles.infoView}>
              <Icon
                name='clock'
                type='font-awesome-5'
                size={22}
              />
              <Text style={styles.infoHeader}> Time: </Text>
            </View>
            <View style={styles.infoView}>
              <Icon
                name='shoe-prints'
                type='font-awesome-5'
                size={18}
              />
              <Text style={styles.infoHeader}> Distance Hiked: </Text>
            </View>
            <View style={styles.infoView}>
              <Icon
                name='hiking'
                type='font-awesome-5'
                size={22}
              />
              <Text style={styles.infoHeader}>  Current Pace: </Text>
            </View>
            <View style={styles.infoView}>
              <Icon
                name='mountain'
                type='font-awesome-5'
                size={18}
              />
              <Text style={styles.infoHeader}> Current Elevation: </Text>
            </View>
          </Card>
        </View>
        <View style={styles.divView}>
          <Divider style={styles.divStyle}/>
        </View>
        <Card title='Start/Stop Hike'>
          <View style={styles.timerView}>
            <View style={styles.buttonStyle}>
              <Button
                title='Start'
              />
            </View>
            <View style={styles.buttonStyle}>
              <Button
                title='Stop'
                color='#d96668'
              />
            </View>
          </View>
        </Card>
        <View style={{ marginTop: 40 }}>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6e9d7'
  },
  imageView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#d6e9d7'
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
    fontSize: 20
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
  timerView: {
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
