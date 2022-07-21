import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MapScreen } from '~src/screens/MapScreen';
import { PermissionScreen } from '~src/screens/PermissionScreen';
import { PermissionsContext } from '~src/context/PermissionsContext';
import { LoadingScreen } from '~src/screens/LoadingScreen';

export type RootStackParamList = {
  MapScreen: undefined;
  PermissionScreen: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  const { permissions } = useContext(PermissionsContext);

  if (permissions.locationStatus === 'unavailable') {
    return <LoadingScreen />;
  }

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      {permissions.locationStatus !== 'granted' && (
        <Screen name="PermissionScreen" component={PermissionScreen} />
      )}
      <Screen name="MapScreen" component={MapScreen} />
    </Navigator>
  );
};
