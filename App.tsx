import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableLatestRenderer } from 'react-native-maps';

import { StackNavigator } from '~src/navigation/StackNavigator';
import { PermissionsProvider } from '~src/context/PermissionsContext';

enableLatestRenderer();

const AppState = ({ children }: any): JSX.Element => {
  return <PermissionsProvider>{children}</PermissionsProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavigator />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
