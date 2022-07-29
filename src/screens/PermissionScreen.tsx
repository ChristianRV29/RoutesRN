import React, { useContext } from 'react';

import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { PermissionsContext } from '~src/context/PermissionsContext';
import { permissionsScreenStyles } from '~src/styles';

export const PermissionScreen = () => {
  const { permissions, askLocationPermission } = useContext(PermissionsContext);

  return (
    <View style={permissionsScreenStyles.mainWrapper}>
      <View style={permissionsScreenStyles.contentWrapper}>
        <Text style={permissionsScreenStyles.text}>
          We need to check the app permissions
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => askLocationPermission()}
        style={permissionsScreenStyles.button}>
        <Text style={permissionsScreenStyles.textButton}>
          Check permissions
        </Text>
        <Icon name="lock-closed-outline" size={20} color={'white'} />
      </TouchableOpacity>
      <Text style={permissionsScreenStyles.permissionsText}>
        {JSON.stringify(permissions)}
      </Text>
    </View>
  );
};
