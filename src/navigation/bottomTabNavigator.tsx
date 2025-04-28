import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenNames from './screenNames';
import {StyleSheet, View, Text, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ScaleHeight, ScaleWidth} from '@common/fitSize';
import Colors from '@common/colors';

import Home from '@screens/home';
import Language from '@screens/language';
import ChangeLanguageModal from '../components/changeLanguageModal';

const Tab = createBottomTabNavigator();

type ISBottomTabsProps = {
  navigation: StackNavigationProp<ParamListBase>;
};

const BottomTabNavigator: React.FC<ISBottomTabsProps> = ({navigation}) => {
  const [showChangeLanguageModal, setShowChangeLanguageModal] = useState(false);
  const [selectedSort, setSelectedSort] = useState('en'); // <-- ADD THIS LINE

  const openChangeLanguageModal = () => {
    setShowChangeLanguageModal(true);
  };

  const closeChangeLanguageModal = () => {
    setShowChangeLanguageModal(false);
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBarLabel: ({focused}) => (
            <View>
              <Text
                style={[
                  styles.tabBarName,
                  {color: focused ? '#336699' : Colors.black},
                ]}>
                {route.name}
              </Text>
            </View>
          ),
          tabBarIcon: ({focused}) => {
            let IconName: string = '';
            if (route.name === ScreenNames.Home) {
              IconName = focused ? 'home' : 'home-outline';
            } else if (route.name === ScreenNames.Language) {
              IconName = focused ? 'language' : 'language-outline';
            }
            return (
              <Icon
                name={IconName}
                size={22}
                color={focused ? '#336699' : Colors.black}
              />
            );
          },
          headerShown: false,
          tabBarStyle: [
            styles.tapStyles,
            {
              backgroundColor: Colors.white,
              borderTopWidth: 0,
              borderWidth: 0,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            },
          ],
          tabBarLabelStyle: styles.tabBarLabelStyle,
        })}>
        <Tab.Screen name={ScreenNames.Home} component={Home} />
        <Tab.Screen
          name={ScreenNames.Language}
          component={Language}
          listeners={({navigation}) => ({
            tabPress: e => {
              e.preventDefault(); // Stop tab from navigating
              openChangeLanguageModal();
            },
          })}
        />
      </Tab.Navigator>

      {/* Add the modal here */}
      <ChangeLanguageModal
        show={showChangeLanguageModal}
        onClose={closeChangeLanguageModal}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
      />
    </>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tapStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    height: ScaleHeight(80),
    width: ScaleWidth('100%'),
    borderWidth: 1,
  },
  tabBarItemStyle: {
    top: 15,
    height: 45,
  },
  tabBarLabelStyle: {
    bottom: 10,
  },
  tabBarName: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: Platform.OS === 'ios' ? ScaleHeight(2) : 0,
    marginBottom: Platform.OS === 'android' ? ScaleHeight(14) : 0,
  },
});
