import React, { Fragment, useEffect, useId, useRef } from 'react';
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

  const {
    followUserLocation,
    getCurrentLocation,
    hasLocation,
    stopFollowUserLocation,
    userLocation,
  } = useLocation();

  const mapViewRef = useRef<MapView>();
  const isFollowingRef = useRef<boolean>(true);

  useEffect(() => {
    followUserLocation();

    return () => {
      stopFollowUserLocation();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const { latitude, longitude } = userLocation;

    if (!isFollowingRef.current) {
      return;
    }

    mapViewRef.current?.animateCamera({
      center: {
        longitude,
        latitude,
      },
    });
  }, [userLocation]);

  const centerPosition = async () => {
    const location = await getCurrentLocation();

    isFollowingRef.current = true;

    mapViewRef.current?.animateCamera({
      center: {
        longitude: location.longitude,
        latitude: location.latitude,
      },
    });
  };

  if (!hasLocation) {
    return <LoadingScreen />;
  }

  return (
    <Fragment>
      <MapView
        onTouchStart={() => (isFollowingRef.current = false)}
        ref={el => (mapViewRef.current = el!)}
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
      <FabIcon
        iconName="compass-outline"
        iconSize={50}
        styles={fabIconStyles.mainWrapper}
        onPress={() => centerPosition()}
      />
    </Fragment>
  );
};
