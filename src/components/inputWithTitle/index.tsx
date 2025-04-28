import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC, useState} from 'react';
import Colors from '@common/Colors';
import Input from '@components/input';
import {t} from 'i18next';
import Fonts from '@common/Fonts';
import Svg_Eye_Icon from '@assets/svgs/Svg_Eye_Icon';
import Svg_ShowPassword from '@assets/svgs/Svg_ShowPassword';

interface InputProps {
  title?: string;
  required?: string;
  Value: any;
  onChangeText: (newText: any) => void;
  inputStyle?: any;
  placeholder?: string;
  placeholderTextColor?: string;
  showIcon?: boolean;
  showIcon2?: boolean;
  editable?: boolean;
  isHaveError?: boolean;
  errorTxt?: string;
  isPasswordVisible?: boolean;
  onPasswordVisibilityChange?: () => void;
  onChangeArrow?: () => void;
  textNearIcon?: string | undefined;
  keyboardType?: KeyboardTypeOptions;
}

const InputWithTitle: FC<InputProps> = ({
  title,
  required,
  Value,
  onChangeText,
  inputStyle,
  placeholder,
  showIcon = false,
  showIcon2 = false,
  editable = true,
  isHaveError = false,
  errorTxt,
  isPasswordVisible,
  onPasswordVisibilityChange,
  onChangeArrow,
  textNearIcon,
  keyboardType,
}) => {
  return (
    <View style={{marginBottom: 15}}>
      <View style={{flexDirection: 'row', gap: 4}}>
        {title && (
          <Text
            style={[
              {
                color: Colors.primary,
                marginBottom: 3,
                fontSize: 16,
                fontFamily: Fonts.TajawalBold,
              },
            ]}>
            {title}
          </Text>
        )}
        <Text
          style={{
            color: Colors.red,
            fontSize: 20,
            fontFamily: Fonts.TajawalBold,
          }}>
          {required}
        </Text>
      </View>
      <Input
        value={Value}
        onChangeText={onChangeText}
        // label="number check"
        inputStyle={[{borderColor: Colors.lightGray}, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={Colors.ExtralightGray}
        secureTextEntry={isPasswordVisible}
        keyboardType={keyboardType}
        withIcon={showIcon}
        // onIconPress={}
        Icon={
          <TouchableOpacity onPress={onPasswordVisibilityChange}>
            {isPasswordVisible ? <Svg_Eye_Icon /> : <Svg_ShowPassword />}
          </TouchableOpacity>
        }
        withIcon2={showIcon2}
        Icon2={<Svg_arrow_drop_down />}
        textNearIcon={textNearIcon}
        onIconPress2={onChangeArrow}
        editable={editable}
        isHaveError={isHaveError}
        errorTxt={errorTxt}
      />
    </View>
  );
};

export default InputWithTitle;
