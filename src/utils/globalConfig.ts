import AsyncStorage from '@react-native-async-storage/async-storage';

export const getLanguage = async () => {
  let lang = await AsyncStorage.getItem('USER_LANG');
  if (!lang) {
    await AsyncStorage.setItem('USER_LANG', 'en');
  }
  return lang;
};
