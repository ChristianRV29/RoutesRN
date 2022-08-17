import React from 'react';
import { View, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

import MapView from 'react-native-maps';

import { mapScreenStyles } from '~src/styles';

export const MapScreen = () => {
  return (
    <View style={mapScreenStyles.mainWrapper}>
      <MapView
        style={{ ...StyleSheet.absoluteFillObject }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};
