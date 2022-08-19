import React, { Fragment, useId } from 'react';
import { StyleSheet, Platform } from 'react-native';
import MapView, { MapMarkerProps, Marker } from 'react-native-maps';

import { useLocation } from '~src/hooks/useLocation';
import { LoadingScreen } from '~src/screens/LoadingScreen';
import { FabIcon } from '~src/components/FabIcon/FabIcon';
import { fabIconStyles } from '~src/styles/index';

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
    <Fragment>
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
      {Platform.OS === 'ios' && (
        <FabIcon
          iconName="compass-outline"
          iconSize={50}
          styles={fabIconStyles.mainWrapper}
          onPress={() => console.log('Centring')}
        />
      )}
    </Fragment>
  );
};
