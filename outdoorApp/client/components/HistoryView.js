import React, { Component } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Button,
  FlatList,
  StyleSheet,
  Text, Image, View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import Constants from 'expo-constants';
// import { useNavigation } from '@react-navigation/native';
import { useNavigation } from 'react-navigation-hooks';



const data1 = [{name: "Bishop's Peak", date:"3/19/2020", image: "https://www.hikespeak.com/img/Central-Coast/SLO/Bishop_Peak/Bishop_Peak_Trail_IMG_6637.jpg"},
        {name: "Madonna", date: "4/1/2019", image: "https://www.hikespeak.com/img/Central-Coast/SLO/Madonna/Cerro_San_Luis_Trail_IMG_0763.jpg"},
        {name: "Cal Poly P", diff:"8/14/2019", image: "https://magazine.calpoly.edu/wp-content/uploads/2015/10/Protecting-the-P1.jpg"}];

/*constructor(props) {
	super(props);
	this.state = { isLoading: true }
}

componentDidMount() {
	fetch('/list')
	.then((response) => response.json())
	.then((responseJson)) => {
		this.setState({
			isLoading: false,
			dataSource: responseJson
		}, function() {
		
		});
	})
	.catch((error) => {
		console.log('List View Data Error.');
	});
}*/

function Item({ image, name, date, selected, onSelect, ...props }) {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
     
      onPress={() => navigate('Hike')}
      
      style={[
        styles.item,
        { backgroundColor: selected ? '#bdb76b' : '#f0e68c' },
      ]}
    >
    <View style= {{
        flex: 1,
        flexDirection: 'row'

    }}>
        <Image 
          source = {{uri: image}}
          style = {{width: 200, height: 200, marginHorizontal: 10}}>
        </Image>

        <View style = {{
            flex: 1,
            flexDirection: 'column'
        }}>

            <Text style={styles.name}>{name}</Text>
            <Text style={styles.name}>Completed: {date}</Text>
            
        </View>

    </View>
      
    </TouchableOpacity>
  );
}




export default function ListView({props}) {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data1}
        renderItem={({ item }) => (
          <Item
            image = {item.image}
            name={item.name}
            date={item.date}
            navigation={props}
            selected={!!selected.get(item.name)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.name}
        extraData={selected}
      />
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f0e68c',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});







