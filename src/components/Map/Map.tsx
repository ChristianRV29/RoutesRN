import React, { useId } from 'react';
import { StyleSheet } from 'react-native';

import MapView, { MapMarkerProps, Marker } from 'react-native-maps';
import { useLocation } from '~src/hooks/useLocation';
import { LoadingScreen } from '~src/screens/LoadingScreen';

interface Props {
  markers?: MapMarkerProps[];
}

export const Map: React.FC<Props> = ({ markers }) => {
  const id = useId();

  const { userLocation, hasLocation } = useLocation();

  if (!hasLocation) {
    return <LoadingScreen />;
  }

  return (
    <MapView
      initialRegion={{
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
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
