import { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { Location } from '~src/@types/interfaces';

export const useLocation = () => {
  const [hasLocation, setHasLocation] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<Location>({} as Location);

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
    hasLocation,
    userLocation,
    getCurrentLocation,
  };
};
