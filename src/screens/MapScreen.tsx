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
            title: 'Sogamoso',
            description: 'Sogamoso - Boyaca',
            coordinate: {
              latitude: 5.716118333333333,
              longitude: -72.93119666666666,
            },
          },
        ]}
      />
    </View>
  );
};
