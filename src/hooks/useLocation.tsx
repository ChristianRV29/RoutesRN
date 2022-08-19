import { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { Location } from '~src/@types/interfaces';

export const useLocation = () => {
  const [hasLocation, setHasLocation] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<Location>({} as Location);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({ coords }) => {
        setUserLocation({ ...coords });
        setHasLocation(true);
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

  return {
    hasLocation,
    userLocation,
  };
};
