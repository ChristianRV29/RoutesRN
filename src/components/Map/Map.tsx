import React, { Fragment, useEffect, useId, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { MapMarkerProps, Marker, Polyline } from 'react-native-maps';

import { useLocation } from '~src/hooks/useLocation';
import { LoadingScreen } from '~src/screens/LoadingScreen';
import { FabIcon } from '~src/components/FabIcon/FabIcon';
import { iconsStyles } from '~src/styles';

interface Props {
  markers?: MapMarkerProps[];
}

export const Map: React.FC<Props> = ({ markers }) => {
  const id = useId();

  const isFollowingRef = useRef<boolean>(true);

  const {
    followUserLocation,
    getCurrentLocation,
    hasLocation,
    stopFollowUser,
    userLocation,
    routeLines,
  } = useLocation();
  const mapViewRef = useRef<MapView>();

  useEffect(() => {
    followUserLocation();

    return () => {
      stopFollowUser();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isFollowingRef.current) {
      return;
    }
    const { latitude, longitude } = userLocation;

    mapViewRef.current?.animateCamera({
      center: {
        longitude,
        latitude,
      },
    });
  }, [userLocation]);

  const centerPosition = async () => {
    isFollowingRef.current = true;

    const location = await getCurrentLocation();

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
        <Polyline coordinates={routeLines} strokeColor="blue" strokeWidth={3} />
      </MapView>
      <View style={iconsStyles.container}>
        <FabIcon
          iconName="compass-outline"
          iconSize={45}
          iconColor="white"
          onPress={() => centerPosition()}
        />
        <FabIcon
          iconName="analytics-outline"
          iconSize={45}
          iconColor="white"
          onPress={() => {}}
        />
      </View>
    </Fragment>
  );
};
