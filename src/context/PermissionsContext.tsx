import React, { createContext, useState } from 'react';
import { Platform } from 'react-native';
import {
  PERMISSIONS,
  PermissionStatus,
  request,
} from 'react-native-permissions';

export interface PermissionsState {
  locationStatus: PermissionStatus;
}

export const permissionsInitState: PermissionsState = {
  locationStatus: 'unavailable',
};

type PermissionsContextProps = {
  permissions: PermissionsState;
  askLocationPermission: () => void;
  checkLocationPermissions: () => void;
};

export const PermissionsContext = createContext({} as PermissionsContextProps); // TODO: What does it export?

export const PermissionsProvider = ({ children }: any) => {
  const [permissions, setPermissions] = useState(permissionsInitState);

  const askLocationPermission = async () => {
    let permissionStatus: PermissionStatus;
    if (Platform.OS === 'ios') {
      permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      permissionStatus = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
    }
    setPermissions({ ...permissions, locationStatus: permissionStatus });
  };
  const checkLocationPermissions = () => {};

  return (
    <PermissionsContext.Provider
      value={{ permissions, askLocationPermission, checkLocationPermissions }}>
      {children}
    </PermissionsContext.Provider>
  );
};
