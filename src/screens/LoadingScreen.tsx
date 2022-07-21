import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

export const LoadingScreen = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size={50} color={'black'} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
