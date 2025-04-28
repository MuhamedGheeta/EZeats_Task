import {I18nManager, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useState} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {t} from 'i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import screenNames from '@navigation/screenNames';
import Colors from '@common/colors';
import {ScaleHeight} from '@common/fitSize';
import Svg_leftArrow from '@assets/svgs/Svg_leftArrow';
import Svg_RightArrow from '@assets/svgs/Svg_RightArrow';
import Svg_language from '@assets/svgs/Svg_language';
import CustomText from '@components/customText';

import {EZeats, EZeats_Circle_Logo} from '@assets/svgs';
import styles from './styles';

interface MainHeaderProps {
  navigation?: NavigationProp<ParamListBase>;
  showEzeats?: boolean;
  showEzeatsCircle?: boolean;
  showArrow?: boolean;
  onPressArrow?: () => void;
  text?: string;
  showLanguage?: boolean;
}

const MainHeader: FC<MainHeaderProps> = ({
  navigation,
  showEzeats = true,
  showEzeatsCircle = false,
  showArrow = false,
  onPressArrow,
  text = '',
  showLanguage = false,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSort, setSelectedSort] = useState('En');

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <>
      <SafeAreaView
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          // paddingHorizontal: 16,
          // paddingVertical: ScaleHeight(10),
          marginTop: ScaleHeight(20),
          // backgroundColor: Colors.white,
        }}>
        {showLanguage && (
          <TouchableOpacity
            style={{flexDirection: 'row', gap: 5}}
            onPress={openModal}>
            <Svg_language />
            <Text style={{color: Colors.gray}}>{selectedSort}</Text>
          </TouchableOpacity>
        )}

        {showArrow && (
          <TouchableOpacity
            onPress={onPressArrow}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            {I18nManager.isRTL ? <Svg_RightArrow /> : <Svg_leftArrow />}
            {text && <Text style={styles.headerTitle}>{text}</Text>}
          </TouchableOpacity>
        )}

        {showEzeatsCircle && (
          <TouchableOpacity
            onPress={() => navigation?.navigate(screenNames.Home)}
            style={{flexDirection: 'row', gap: 5}}>
            <EZeats_Circle_Logo />
            <CustomText
              Txt={'Restaurant'}
              fontType="TajawalMedium"
              style={{
                fontSize: 22,
                color: Colors.black,
                paddingTop: 5,
                fontWeight: 'bold',
              }}
            />
          </TouchableOpacity>
        )}
        {showEzeats && (
          <TouchableOpacity
            onPress={() => navigation?.navigate(screenNames.Home)}>
            {/* <CustomText
              Txt={t('skip')}
              fontType="TajawalMedium"
              style={{fontSize: 18, color: Colors.primary}}
            /> */}
            <EZeats />
          </TouchableOpacity>
        )}
      </SafeAreaView>
    </>
  );
};

export default MainHeader;
