import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
import {TextStyle} from 'react-native';
import Colors from '@common/colors';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  btnStyle?: any;
  titleStyle?: TextStyle | undefined;
  disabled?: boolean;
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({
  title,
  onPress,
  btnStyle = {},
  titleStyle,
  loading,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, btnStyle]}
      onPress={onPress}
      disabled={disabled || loading}>
      {loading ? (
        <ActivityIndicator size={'small'} color={Colors.scondary} />
      ) : (
        <Text style={[styles.btnTitle, titleStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
