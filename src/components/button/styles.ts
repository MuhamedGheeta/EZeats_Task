import Colors from '@common/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 50,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: 20,
  },
  btnTitle: {
    fontSize: 18,
    color: Colors.white,
  },
});

export default styles;
