import React from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  iconName: string;
  onPress: () => void;
  iconColor?: number | string;
  iconSize: number;
  styles?: StyleProp<ViewStyle>;
}

export const FabIcon: React.FC<Props> = ({
  iconName,
  onPress,
  iconSize = 30,
  iconColor = 'white',
  styles,
}) => {
  return (
    <TouchableOpacity
      style={{ ...(styles as any) }}
      activeOpacity={0.8}
      onPress={() => onPress()}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};
