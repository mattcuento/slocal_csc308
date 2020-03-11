import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { 
  Text,
  TouchableHighlight,
  TextInput, 
  ScrollView, 
  KeyboardAvoidingView, 
  View,
  Button,
  StyleSheet,
  Image
} from 'react-native';

export default class HikeScreen extends Component {
  render() {
    return (
    <View style={styles.imageWrapper}> 
      <HikePicture/>
      <HikeDescription 
        name='The "P"' 
        desc='Location: CalPoly, SLO*Elevation: 650 ft*Trail Length: 0.4 miles*Description: This is the shortest and easiest trail to get to the Cal Poly "P". The ASI student body periodically paints the "P" different colors for various holidays, observances, and athletic/school events.'/>
      <GearIcon gear1={require('../assets/images/boot.png')}/>
    </View>
  );
  }
}

export class HikePicture extends Component {
  render() {
  return (
      <Image
        source={require('../assets/images/p_hike.png')}
        style={styles.imageStyle}
      />
  );
  }
}

export class HikeDescription extends Component {
  render() {
    return (
      <View style={styles.descWrapper}>
        <Text style={styles.nameStyle}>{this.props.name}</Text>
        <Text style={styles.descStyle}>{this.props.desc.replace(/\*/g, '\n')}</Text>
      </View>
    );
  }
}

export class GearIcon extends Component {
  render() {
    return (
      <View style={styles.gearWrapper}>
        <Text style={styles.nameStyle}>Recommended Gear</Text>
        <Image source={this.props.gear1} style={styles.gearStyle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageWrapper: {
    display: "flex",
    flex: 1,
  },
  descWrapper: {
    display: "flex",
    flex: 2,
    backgroundColor: "seagreen"
  },
  nameStyle: {
    fontSize: 50,
    fontWeight: "800",
  },
  descStyle: {
    fontSize: 18,
    fontWeight: "400",
  },
  gearWrapper: {
    display: "flex",
    flex: 1.5,
    backgroundColor: "seagreen"
  },
  buttonStyle: {
    marginBottom: 30,
    marginLeft: 90,
    height: 30,
    width: 100
  },
  imageStyle: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  },
  gearStyle: {
    flex: 1,
    alignSelf: 'stretch',
    width: 140,
    height: 90
  }
});
