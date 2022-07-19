import React, { useContext } from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { PermissionsContext } from '~src/context/PermissionsContext';

export const PermissionScreen = () => {
  const { permissions, askLocationPermission } = useContext(PermissionsContext);

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.contentWrapper}>
        <Text style={styles.text}>Permissions screen</Text>
      </View>
      <TouchableOpacity
        onPress={() => askLocationPermission()}
        style={styles.button}>
        <Text style={styles.textButton}>Check permissions</Text>
        <Icon name="lock-closed-outline" size={20} color={'white'} />
      </TouchableOpacity>
      <Text style={styles.permissionsText}>{JSON.stringify(permissions)}</Text>
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
  contentWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#6dc6da',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    flexDirection: 'row',
    width: 200,
  },
  textButton: {
    color: 'white',
    fontSize: 15,
    marginRight: 10,
  },
  permissionsText: {
    fontSize: 15,
    marginTop: 10,
  },
});
