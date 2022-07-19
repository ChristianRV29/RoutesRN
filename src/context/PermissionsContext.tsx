import React, { createContext, useState } from 'react';
import { PermissionStatus } from 'react-native-permissions';

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

  const askLocationPermission = () => {};
  const checkLocationPermissions = () => {};

  return (
    <PermissionsContext.Provider
      value={{ permissions, askLocationPermission, checkLocationPermissions }}>
      {children}
    </PermissionsContext.Provider>
  );
};
