import React, {useState} from 'react';
import {
  Text,
  ImageBackground,
  StyleSheet,
  View,
  Alert,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

import Colors from '@common/colors';
import Logo from '@assets/svgs/Logo';
import Button from '@components/button';
import screenNames from '@navigation/screenNames';
import {t} from 'i18next';

const SigninScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();

  const handleLoginPress = () => {
    // Optionally validate the phone number before navigating
    if (phoneNumber.length === 10) {
      // Example validation (10 digits)
      navigation.navigate(screenNames.Otp, {phoneNumber});
    } else {
      // Optionally, show an alert or error message
      Alert.alert(t('Please enter a valid phone number'));
    }
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/BG_EZeats.jpg')}
      style={styles.background}
      resizeMode="cover">
      <LinearGradient colors={['#EA374A', '#d16347']} style={styles.overlay}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>

        <Text style={styles.subText}>
          {t(
            'Login to get started with a seamless restaurant management experience',
          )}
        </Text>

        <View style={styles.whiteSheet}>
          <View>
            <Text style={styles.whiteTitle}>{t('Phone_Number')}</Text>
            {/* Phone number input field */}
            <TextInput
              style={styles.input}
              placeholder={t('Phone_Number_Place')}
              placeholderTextColor={Colors.gray}
              keyboardType="numeric"
              maxLength={10} // Limit to 10 digits for phone number
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title={t('logIn')}
              btnStyle={[
                styles.loginButton,
                {
                  backgroundColor:
                    phoneNumber.length === 10
                      ? Colors.primary
                      : Colors.lightGray,
                },
              ]}
              onPress={handleLoginPress}
              disabled={phoneNumber.length !== 10}
            />
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    paddingTop: 10,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    paddingHorizontal: 20,
  },
  subText: {
    marginTop: 60,
    fontSize: 15,
    color: Colors.white,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  whiteSheet: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: '10%',
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  whiteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    backgroundColor: Colors.lightGray,
    borderColor: Colors.gray,
    borderRadius: 10,
    padding: 15,
    // marginBottom: 20,
    fontSize: 16,
    color: Colors.black,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: Colors.primary,
    width: '100%',
    borderRadius: 30,
  },
});

export default SigninScreen;
