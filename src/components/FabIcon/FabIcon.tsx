import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { fabIconStyles } from '../../styles/index';

interface Props {
  iconName: string;
  onPress: () => void;
  iconColor?: number | string;
  iconSize: number;
}

export const FabIcon: React.FC<Props> = ({
  iconName,
  onPress,
  iconSize = 30,
  iconColor = 'white',
}) => {
  return (
    <View style={fabIconStyles.mainWrapper}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => onPress()}>
        <Icon name={iconName} size={iconSize} color={iconColor} />
      </TouchableOpacity>
    </View>
  );
};
