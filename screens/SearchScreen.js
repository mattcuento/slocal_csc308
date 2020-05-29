import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import ListView from '../components/ListView'
import { withNavigation } from 'react-navigation'

class SearchScreen extends Component {
  render() {
    const { navigation } = this.props
    console.log(navigation)
    return (
      <ScrollView style={styles.container}>
        {/**
         * Go ahead and delete ExpoLinksView and replace it with your content;
         * we just wanted to provide you with some helpful links.
         */}
        <ListView/>
  
      </ScrollView>
    )
  }
}

SearchScreen.navigationOptions = {
  title: 'SLO Explore'

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'seagreen'

  }

})

export default withNavigation(SearchScreen)