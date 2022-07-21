import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const MapScreen = () => {
  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.text}>Welcome to Routes app</Text>
      <Icon name="map-outline" size={30} color={'black'} />
      <TouchableOpacity
        onPress={() => console.log('Going back')}
        style={styles.button}>
        <Text style={styles.textButton}>Go back</Text>
        <Icon name="lock-closed-outline" size={20} color={'white'} />
      </TouchableOpacity>
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#6dc6da',
    borderRadius: 20,
    height: 30,
    justifyContent: 'center',
    marginTop: 10,
    width: 200,
  },
  textButton: {
    color: 'white',
    fontSize: 15,
  },
});
