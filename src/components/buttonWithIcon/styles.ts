import Colors from '@common/Colors';
import Fonts from '@common/Fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  btnTitle: {
    fontSize: 18,
    // fontWeight: 'bold',
    fontFamily: Fonts.TajawalBold,
    // color: Colors.MediumGray,
    paddingLeft: 10,
  },
  icon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
  },
});

export default styles;
