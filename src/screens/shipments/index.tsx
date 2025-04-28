import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const ShipmentsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.headerTxt}>{'ShipmentsScreen'}</Text>
      </View>
    </View>

    // <View className="flex-1 bg-white px-[15px] py-[10px]">
    //   <Text className="text-3xl font-bold text-center text-orange-500 py-[40px]">
    //     Order Management
    //   </Text>
    // </View>
  );
};

export default ShipmentsScreen;
