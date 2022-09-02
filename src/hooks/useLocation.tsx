/* eslint-disable curly */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { Location } from '~src/@types/interfaces';

export const useLocation = () => {
  const [hasLocation, setHasLocation] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<Location>({} as Location);
  const [routeLines, setRouteLines] = useState<Location[]>([]);

  const watchIdRef = useRef<number>();
  const isMountedRef = useRef<boolean>(true);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    getCurrentLocation().then(location => {
      if (!isMountedRef) return;

      setUserLocation({ ...location });
      setRouteLines(lines => [...lines, location]);
      setHasLocation(true);
    });
  }, []);

  const followUserLocation = () => {
    watchIdRef.current = Geolocation.watchPosition(
      ({ coords }) => {
        if (!isMountedRef) return;

        setUserLocation({ ...coords });
        setRouteLines(lines => [...lines, coords]);
      },
      err => console.log('🐞 FollowUserLocation error: ', err),
      {
        enableHighAccuracy: true,
        distanceFilter: 10,
      },
    );
  };

  const stopFollowUser = () => {
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

  return {
    followUserLocation,
    getCurrentLocation,
    hasLocation,
    routeLines,
    stopFollowUser,
    userLocation,
  };
};
