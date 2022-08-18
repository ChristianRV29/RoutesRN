import React from 'react';
import { View } from 'react-native';

import { Map } from '~src/components/Map/Map';
import { mapScreenStyles } from '~src/styles';

export const MapScreen = () => {
  return (
    <View style={mapScreenStyles.mainWrapper}>
      <Map
        markers={[
          {
            title: 'Test',
            description: 'This is a marker',
            coordinate: {
              latitude: 37.78825,
              longitude: -122.4324,
            },
          },
        ]}
      />
    </View>
  );
};
