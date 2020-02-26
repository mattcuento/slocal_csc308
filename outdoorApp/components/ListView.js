import React, { Component } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import Constants from 'expo-constants';



const data1 = [{name: "Bishop's Peak", diff:"4", loc: "Bishops", rate: "5/5"},
				{name: "Madonna", diff:"3", loc: "Madonna", rate: "4/5"},
				{name: "Cal Poly P", diff:"1", loc: "Behind the Red Bricks", rate: "3/5"}];



function Item({ name, rate, loc, diff, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(name)}
      style={[
        styles.item,
        { backgroundColor: selected ? '#khaki' : '#bdb76b' },
      ]}
    >
      <Text style={styles.name}>{name}, {loc}, Rating {rate}, Difficulty {diff}</Text>

    </TouchableOpacity>
  );
}



export default function ListView() {
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
            name={item.name}
            rate={item.rate}
            loc = {item.loc}
            diff = {item.diff}
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
    backgroundColor: '#bdb76b',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});






