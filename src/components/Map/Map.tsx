import React, { useId } from 'react';
import { StyleSheet } from 'react-native';

import MapView, { MapMarkerProps, Marker } from 'react-native-maps';

interface Props {
  markers?: MapMarkerProps[];
}

export const Map: React.FC<Props> = ({ markers }) => {
  const id = useId();
  return (
    <MapView
      style={{ ...StyleSheet.absoluteFillObject }}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {markers?.map((markerData, index) => (
        <Marker key={`${index} - ${id}`} {...markerData} />
      ))}
    </MapView>
  );
};
