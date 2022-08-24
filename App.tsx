import 'react-native-gesture-handler';
import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { enableLatestRenderer } from 'react-native-maps';

import { StackNavigator } from '~src/navigation/StackNavigator';
import { PermissionsProvider } from '~src/context/PermissionsContext';

LogBox.ignoreLogs(['NativeEventEmitter']);

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
