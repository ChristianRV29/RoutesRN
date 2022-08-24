import { useEffect, useState, useRef } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { Location } from '~src/@types/interfaces';

export const useLocation = () => {
  const [hasLocation, setHasLocation] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<Location>({} as Location);

  const watchIdRef = useRef<number>();

  const followUserLocation = () => {
    watchIdRef.current = Geolocation.watchPosition(
      ({ coords }) => {
        setUserLocation({ ...coords });
      },
      err => console.log('🐞 FollowUserLocation error: ', err),
      {
        enableHighAccuracy: true,
        distanceFilter: 10,
      },
    );
  };

  const stopFollowUserLocation = () => {
    if (watchIdRef.current) {
      Geolocation.clearWatch(watchIdRef.current);
    }
  };

  const getCurrentLocation = (): Promise<Location> => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        ({ coords }) => {
          resolve({
            ...coords,
          });
        },
        err => {
          reject({ err });
        },
        { enableHighAccuracy: true },
      );
    });
  };

  useEffect(() => {
    getCurrentLocation().then(location => {
      setUserLocation({ ...location });
      setHasLocation(true);
    });
  }, []);

  return {
    followUserLocation,
    getCurrentLocation,
    hasLocation,
    stopFollowUserLocation,
    userLocation,
  };
};
