import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '~src/screens/HomeScreen';

const { Navigator, Screen } = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Screen name="HomeScreen" component={HomeScreen} />
    </Navigator>
  );
};
