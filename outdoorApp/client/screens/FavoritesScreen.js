import React from 'react';
import { ScrollView, StyleSheet, Text, View,} from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import ProfileView from "../components/FavoritesView";

export default function FavoritesScreen() {
  return (
      <FavoritesView/>
  );
}

FavoriteScreen.navigationOptions = {
  title: 'Favorites',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'seagreen',
  },});
