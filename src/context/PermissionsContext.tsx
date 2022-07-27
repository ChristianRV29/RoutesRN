/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from 'react';
import { AppState, Platform } from 'react-native';
import {
  check,
  PERMISSIONS,
  PermissionStatus,
  request,
  openSettings,
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

    if (permissionStatus === 'blocked') {
      openSettings();
    }
    setPermissions({ ...permissions, locationStatus: permissionStatus });
  };
  const checkLocationPermissions = async () => {
    let permissionStatus: PermissionStatus;
    if (Platform.OS === 'ios') {
      permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }
    setPermissions({ ...permissions, locationStatus: permissionStatus });
  };

  useEffect(() => {
    AppState.addEventListener('change', state => {
      if (state !== 'active') {
        return;
      }

      checkLocationPermissions();
    });
  }, []);

  return (
    <PermissionsContext.Provider
      value={{ permissions, askLocationPermission, checkLocationPermissions }}>
      {children}
    </PermissionsContext.Provider>
  );
};
