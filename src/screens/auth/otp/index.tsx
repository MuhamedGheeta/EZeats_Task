import {
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@store/index';
// import {sendOtpAsync, verfiyOtpAsync} from '@store/slices/authSlice';
import {Alert} from 'react-native';

import styles from './styles';
import {OtpInput} from 'react-native-otp-entry';
import Button from '@components/button';
import screenNames from '@navigation/screenNames';
import {t} from 'i18next';
// import Svg_Restore_Icon from '@assets/svgs/Svg_Restore_Icon';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useRoute,
} from '@react-navigation/native';
import Colors from '@common/colors';
import Fonts from '@common/Fonts';
import {ScaleHeight} from '@common/fitSize';

import i18next from 'i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import MainHeader from '@components/mainHeader';

interface NavigationProps {
  navigation: NavigationProp<ParamListBase>;
}

type OtpScreenRouteProp = RouteProp<
  {
    params: {
      comeFromLogin: boolean;
      comeFromSetting: boolean;
      phoneNumber: string | number;
      mobileNumber: string | number;
    };
  },
  'params'
>;

const OtpScreen: FC<NavigationProps> = ({navigation}) => {
  const route = useRoute<OtpScreenRouteProp>();
  const {phoneNumber} = route.params;
  console.log('phoneNumber', phoneNumber);

  const isRTL = i18next.language === 'ar';
  const [numberValue, setNumberValue] = useState<string>('');
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [borderColor, setBorderColor] = useState<string>(Colors.gray);
  const [timer, setTimer] = useState<number>(25);

  const screenWidth = Dimensions.get('window').width;
  const otpDigitWidth = (screenWidth - 30) / 6;

  useEffect(() => {
    setIsButtonDisabled(numberValue.trim().length !== 6);
    setBorderColor(Colors.primary);
  }, [numberValue]);

  useEffect(() => {
    setIsButtonDisabled(numberValue.trim().length !== 4); // ✅ should match numberOfDigits
    setBorderColor(Colors.primary);
  }, [numberValue]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0',
    )}`;
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="height">
      <ScrollView style={{flex: 1}} keyboardShouldPersistTaps="handled">
        <SafeAreaView style={styles.container}>
          <MainHeader
            showEzeats={false}
            showArrow={true}
            navigation={navigation}
            onPressArrow={() => navigation.goBack()}
          />
          <View style={styles.headerContainer}>
            <Text style={styles.subtitle}>
              {t('We have sent a 4 digit code to your phone number')}{' '}
              {phoneNumber} {t(', please add it below to continue')}
            </Text>
          </View>
          <View style={styles.otpContainer}>
            <OtpInput
              numberOfDigits={4}
              blurOnFilled={true}
              disabled={false}
              type="numeric"
              secureTextEntry={false}
              onTextChange={txt => {
                setNumberValue(txt);
              }}
              theme={{
                pinCodeTextStyle: {
                  ...styles.pinCodeTextStyle,
                  textAlign: 'center',
                  color: Colors.black,
                },
                pinCodeContainerStyle: {
                  ...styles.pinCodeContainerStyle,
                  width: otpDigitWidth,
                  height: ScaleHeight(60),
                  flexDirection: isRTL ? 'row-reverse' : 'row',
                  direction: isRTL ? 'rtl' : 'ltr',
                  borderColor,
                },
              }}
            />

            <View style={styles.resendContainer}>
              <Text style={styles.timerText}>{formatTime(timer)}</Text>
              <Text
                style={{
                  color: Colors.gray,
                  alignSelf: 'center',
                  marginTop: 20,
                  fontSize: 20,
                  fontFamily: Fonts.TajawalExtraLight,
                }}>
                {t('Didn’t receive code?')}
              </Text>
              <TouchableOpacity
                onPress={() => {}}
                disabled={timer !== 0} // Disable if timer is not zero
                style={{
                  opacity: timer === 0 ? 1 : 0.5, // Change opacity to indicate disabled state
                }}>
                <Text
                  style={{
                    ...styles.resendText,
                    color: timer === 0 ? Colors.primary : Colors.primary,
                    fontFamily:
                      timer === 0
                        ? Fonts.TajawalExtraBold
                        : Fonts.TajawalExtraBold,
                  }}>
                  {t('resend')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex: 1}} />
          <Button
            onPress={() => {
              navigation.replace(screenNames.Main);
            }}
            title={t('confirm')}
            titleStyle={{
              color: isButtonDisabled ? Colors.gray : Colors.white,
              fontFamily: Fonts.TajawalBold,
              fontSize: 20,
            }}
            btnStyle={{
              backgroundColor: isButtonDisabled
                ? Colors.lightGray
                : Colors.primary,
              ...styles.button,
            }}
            disabled={isButtonDisabled}
            // loading={isLoading}
          />
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default OtpScreen;
