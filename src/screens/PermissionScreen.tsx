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
