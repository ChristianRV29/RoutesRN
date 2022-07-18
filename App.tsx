import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export const App = () => {
  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.text}>Welcome to Routes app</Text>
      <Icon name="home-outline" size={30} color={'black'} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    marginBottom: 20,
  },
});
