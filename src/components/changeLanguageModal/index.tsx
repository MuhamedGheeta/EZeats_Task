import React, {Dispatch, ReactElement, SetStateAction, useEffect} from 'react';
import {
  Pressable,
  Text,
  View,
  TouchableOpacity,
  I18nManager,
} from 'react-native';

import Modal from 'react-native-modal';

import styles from './styles';

import Svg_language from '@assets/svgs/Svg_language';
import Svg_Tick from '@assets/svgs/Svg_Tick';
// import Svg_Close from '@assets/svgs/Svg_Close';
import {useTranslation} from 'react-i18next';
// import {getLanguage} from '@utils/globalConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import Svg_Close_icon from '@assets/svgs/Svg_Close_icon';

type Props = {
  show: boolean;
  onClose: () => void;
  selectedSort: string;
  setSelectedSort: Dispatch<SetStateAction<string>>;
};

type TOption = {
  id: number;
  name: string;
  value: string;
  icon: ReactElement;
};

const ChangeLanguageModal = (props: Props) => {
  const {t, i18n} = useTranslation();
  const {onClose, show, selectedSort, setSelectedSort} = props;

  const changeSort = async (lang: string) => {
    console.log('----lang-----', lang);
    setSelectedSort(lang);

    await AsyncStorage.setItem('USER_LANG', lang);
    await i18n.changeLanguage(lang);
    I18nManager.forceRTL(lang == 'ar'); // Force RTL layout for Arabic
    console.log('====================================');
    console.log('Stored language:', await AsyncStorage.getItem('USER_LANG'));
    console.log('====================================');
    setTimeout(() => RNRestart.Restart(), 500); // Restart the app after a short delay
    onClose(); // Close the modal
  };

  useEffect(() => {
    const loadSelectedLanguage = async () => {
      const savedLang = await AsyncStorage.getItem('USER_LANG');
      console.log('Loaded saved language:', savedLang);
      if (savedLang) {
        setSelectedSort(savedLang);
        i18n.changeLanguage(savedLang);
      }
    };

    if (show) {
      loadSelectedLanguage();
    }
  }, [show, setSelectedSort, i18n]);

  const sortList: TOption[] = [
    {
      id: 1,
      name: 'en',
      value: t('english'),
      icon: <Svg_language />,
    },
    {
      id: 2,
      name: 'ar',
      value: t('arabic'),
      icon: <Svg_language />,
    },
  ];

  return (
    <Modal
      style={styles.modal}
      isVisible={show}
      hideModalContentWhileAnimating
      onBackdropPress={onClose}
      animationInTiming={200}
      animationIn="slideInUp"
      propagateSwipe>
      <View style={styles.container}>
        <View style={styles.rowHeader}>
          <Text style={styles.title}>{t('language')}</Text>
          <TouchableOpacity onPress={onClose}>
            <Svg_Close_icon />
          </TouchableOpacity>
        </View>

        {sortList.map((option: TOption, index: number) => {
          console.log('option.name===>', option.name);
          console.log('selectedSort===>', selectedSort);

          const isSelected = option.name === selectedSort;
          const isLast = index === sortList.length - 1;
          return (
            <React.Fragment key={option.id}>
              <Pressable
                onPress={() => changeSort(option.name)} // Call changeSort when an option is pressed
                style={styles.rowBetween}>
                <View style={styles.rowStart}>
                  {option.icon}
                  <Text style={styles.optionTxt}>{option.value}</Text>
                </View>

                {isSelected && <Svg_Tick />}
              </Pressable>
              {!isLast && <View style={styles.sperateLine} />}
            </React.Fragment>
          );
        })}
      </View>
    </Modal>
  );
};

export default ChangeLanguageModal;
