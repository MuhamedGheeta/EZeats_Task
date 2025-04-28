import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const WalletScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.headerTxt}>{'WalletScreen'}</Text>
      </View>
    </View>
  );
};

export default WalletScreen;
