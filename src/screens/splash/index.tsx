import {Text, View} from 'react-native';
import React from 'react';

import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';
import screenNames from '@navigation/screenNames';

import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '@i18n/index';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {EZeats, Logo} from '@assets/svgs';

type ISplashScreenProps = {
  navigation: StackNavigationProp<ParamListBase>;
};

const SplashScreen: React.FC<ISplashScreenProps> = ({navigation}) => {
  const checkSelectedLang = async () => {
    const lang = await AsyncStorage.getItem('USER_LANG');
    await i18n.changeLanguage(lang || undefined);
  };

  React.useEffect(() => {
    checkSelectedLang();
    const timeout = setTimeout(() => {
      navigation.replace(screenNames.Auth);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <LinearGradient colors={['#EA374A', '#d16347']} style={styles.overlay}>
      <View style={styles.logoContainer}>
               <Logo />
             </View>
    </LinearGradient>
  );
};

export default SplashScreen;
