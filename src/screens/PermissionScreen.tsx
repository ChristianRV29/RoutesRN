import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  PERMISSIONS,
  PermissionStatus,
  request,
} from 'react-native-permissions';
import Icon from 'react-native-vector-icons/Ionicons';

import { RootStackParamList } from '~src/navigation/StackNavigator';

export const PermissionScreen = () => {
  const { navigate } =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'PermissionScreen'>
    >();
  const checkLocationPermission = async () => {
    let permissionStatus: PermissionStatus;
    if (Platform.OS === 'ios') {
      permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      permissionStatus = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
    }
    if (permissionStatus === 'granted') {
      navigate('MapScreen');
    } else {
      console.log('🗺 ~ Permissions denied');
    }
  };

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.contentWrapper}>
        <Text style={styles.text}>Permissions screen</Text>
      </View>
      <TouchableOpacity
        onPress={() => checkLocationPermission()}
        style={styles.button}>
        <Text style={styles.textButton}>Check permissions</Text>
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
  contentWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
  },
  text: {
    color: '#000000',
    fontSize: 20,
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
});
