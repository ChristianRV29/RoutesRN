import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MapScreen } from '~src/screens/MapScreen';
import { PermissionScreen } from '~src/screens/PermissionScreen';

export type RootStackParamList = {
  MapScreen: undefined;
  PermissionScreen: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Screen name="MapScreen" component={MapScreen} />
      <Screen name="PermissionScreen" component={PermissionScreen} />
    </Navigator>
  );
};
