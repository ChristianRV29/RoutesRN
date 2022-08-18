import Geolocation from '@react-native-community/geolocation';
import React, { useEffect, useId } from 'react';
import { StyleSheet } from 'react-native';

import MapView, { MapMarkerProps, Marker } from 'react-native-maps';

interface Props {
  markers?: MapMarkerProps[];
}

export const Map: React.FC<Props> = ({ markers }) => {
  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => {
        console.log('📌 User location coordinates: ', info);
      },
      error => {
        console.log('🐞 Error: ', error);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      },
    );
  }, []);

  const id = useId();
  return (
    <MapView
      initialRegion={{
        latitude: 5.716118333333333,
        longitude: -72.93119666666666,
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
