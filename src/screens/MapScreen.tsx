import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { mapScreenStyles } from '~src/styles';

export const MapScreen = () => {
  return (
    <View style={mapScreenStyles.mainWrapper}>
      <Text style={mapScreenStyles.text}>Welcome to Routes app</Text>
      <Icon name="map-outline" size={30} color={'black'} />
    </View>
  );
};
