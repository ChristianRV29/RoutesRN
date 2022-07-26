import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { loadingScreenStyles } from '~src/styles';

export const LoadingScreen = () => {
  return (
    <View style={loadingScreenStyles.wrapper}>
      <ActivityIndicator size={50} color={'black'} />
    </View>
  );
};
