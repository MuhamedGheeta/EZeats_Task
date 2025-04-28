import {
  Text,
  KeyboardTypeOptions,
  ViewStyle,
  ColorValue,
  TextInput,
  View,
  TouchableOpacity,
  I18nManager,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Colors from '@common/colors';
import Fonts from '@common/Fonts';
import CustomText from '@components/customText';

type InputProps = {
  // label: string;
  value: any;
  onChangeText: (text: string) => void;
  placeholder?: string;
  placeholderTextColor?: ColorValue | string;
  placeholderFontFamily?: string;
  secureTextEntry?: boolean;
  isHaveError?: boolean;
  errorTxt?: string;
  inputStyle?: ViewStyle;
  keyboardType?: KeyboardTypeOptions | undefined;
  editable?: boolean;
  borderRadius?: number;
  onIconPress?: () => void;
  withIcon?: boolean;
  Icon?: JSX.Element;
  onIconPress2?: () => void;
  withIcon2?: boolean;
  Icon2?: JSX.Element;
  textNearIcon?: string;
  withCountryCode?: boolean;

  countryCode?: JSX.Element;
  boxStyle?: ViewStyle;
};

const Input: React.FC<InputProps> = ({
  // label = 'Input',
  value,
  onChangeText = text => {},
  placeholder = '',
  placeholderTextColor = Colors.gray,
  placeholderFontFamily = Fonts.TajawalRegular,
  secureTextEntry = false,
  isHaveError = false,
  errorTxt = '',
  inputStyle,
  keyboardType,
  editable = true,
  borderRadius = 10,
  onIconPress = () => {},
  withIcon = false,
  Icon,
  onIconPress2 = () => {},
  withIcon2 = false,
  Icon2,
  textNearIcon,
  withCountryCode = false,
  countryCode = '',
  boxStyle,
}) => {
  const isRTL = I18nManager.isRTL;
  const [focused, setFocused] = useState(false);

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
  };

  return (
    <View style={{position: 'relative'}}>
      {!focused && !value && (
        <Text
          style={{
            position: 'absolute',
            paddingTop: 15,
            paddingHorizontal: 10,
            color: placeholderTextColor,
            fontFamily: placeholderFontFamily,
            // fontSize: 16,
          }}>
          {placeholder}
        </Text>
      )}

      <View
        style={[
          // styles.inputContainer,
          {
            borderColor: isHaveError
              ? Colors.red
              : focused
              ? Colors.scondary
              : Colors.lightGray,
            borderRadius: borderRadius,
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            paddingHorizontal: 10,
          },
          boxStyle,
        ]}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={[
            styles.inputStyle,
            inputStyle,
            {flex: 1, textAlign: isRTL ? 'right' : 'left'},
          ]}
          placeholderTextColor={placeholderTextColor}
          placeholder=""
          secureTextEntry={secureTextEntry}
          onFocus={onFocus}
          onBlur={onBlur}
          keyboardType={keyboardType}
          editable={editable}
        />

        {withCountryCode && (
          <CustomText
            fontType="TajawalRegular"
            Txt={countryCode}
            style={{color: Colors.teriary}}
          />
        )}

        {withIcon && Icon && (
          <TouchableOpacity onPress={onIconPress} style={{padding: 5}}>
            {Icon}
          </TouchableOpacity>
        )}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {textNearIcon && (
            <Text
              style={{
                color: Colors.scondary,
                fontFamily: Fonts.TajawalRegular,
              }}>
              {textNearIcon}
            </Text>
          )}
          {withIcon2 && Icon2 && (
            <TouchableOpacity onPress={onIconPress2} style={{padding: 5}}>
              {Icon2}
            </TouchableOpacity>
          )}
        </View>
      </View>
      {isHaveError ? (
        <Text style={styles.emailErrorTxt}>{`*${errorTxt}`}</Text>
      ) : null}
    </View>
  );
};

export default Input;
