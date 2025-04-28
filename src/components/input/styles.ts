import Colors from '@common/colors';
import {ScaleHeight, ScaleWidth} from '@common/fitSize';
import Fonts from '@common/Fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  underlineStyle: {
    height: 0,
  },
  inputStyle: {
    width: '100%',
    paddingHorizontal: 10,

    borderRadius: ScaleHeight(5),

    fontSize: ScaleWidth(16),
    // fontWeight: '500',
    color: Colors.scondary,

    height: ScaleHeight(44),
    fontFamily: Fonts.TajawalRegular,
  },
  emailErrorTxt: {
    color: Colors.red,
    fontSize: ScaleWidth(12),
    paddingRight: ScaleWidth(14),
    paddingVertical: ScaleHeight(1),
    // fontWeight: '700',
    fontFamily: Fonts.TajawalBold,
  },
});
