/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  Image,
  Button,
  Text, View,
  SafeAreaView
} from 'react-native'
import { withNavigation } from 'react-navigation'
import { Divider, Card, registerCustomIconType } from 'react-native-elements'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Carousel from 'react-native-snap-carousel'
import { Form, Input } from 'native-base'
registerCustomIconType('font-awesome-5', FontAwesome5)

class AddReviewView extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const { navigation } = this.props
    return (
      <ScrollView>
        <View style={styles.container}>
          <Card>
            <Form>
              <Input></Input>
            </Form>
          </Card>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }
})

export default withNavigation(AddReviewView)
