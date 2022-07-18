import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '~src/navigation/StackNavigator';

export const MapScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'MapScreen'>>();

  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.text}>Welcome to Routes app</Text>
      <Icon name="map-outline" size={30} color={'black'} />
      <TouchableOpacity
        onPress={() => navigation.navigate('PermissionScreen')}
        style={styles.button}>
        <Text style={styles.textButton}>Get permissions</Text>
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
