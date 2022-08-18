import Geolocation from '@react-native-community/geolocation';
import React, { useEffect, useId } from 'react';
import { StyleSheet } from 'react-native';

import MapView, { MapMarkerProps, Marker } from 'react-native-maps';

interface Props {
  markers?: MapMarkerProps[];
}

export const Map: React.FC<Props> = ({ markers }) => {
  useEffect(() => {
    Geolocation.getCurrentPosition(info =>
      console.log('📌 Current Location: ', info),
    );
  }, []);

  const id = useId();
  return (
    <MapView
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation
      style={{ ...StyleSheet.absoluteFillObject }}>
      {markers?.map((markerData, index) => (
        <Marker key={`${index} - ${id}`} {...markerData} />
      ))}
    </MapView>
  );
};
