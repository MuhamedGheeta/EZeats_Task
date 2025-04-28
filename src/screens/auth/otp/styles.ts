import {StyleSheet} from 'react-native';
import Colors from '@common/colors';
import Fonts from '@common/Fonts';
import {ScaleHeight} from '@common/fitSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: ScaleHeight('100%'),
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: ScaleHeight('10%'),
  },
  iconContainer: {
    backgroundColor: Colors.lightGray,
    width: 75,
    height: 75,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.primary,
    marginTop: 12,
    fontSize: 24,
    fontFamily: Fonts.TajawalBold,
  },
  subtitle: {
    color: Colors.gray,
    marginTop: 5,
    fontSize: 14,
    fontFamily: Fonts.TajawalLight,
  },
  otpContainer: {
    justifyContent: 'center',
    marginTop: '35%',
  },
  pinCodeTextStyle: {
    color: Colors.black,
    fontSize: 30,
    fontFamily: Fonts.TajawalBold,
    fontWeight: 'bold',
  },
  pinCodeContainerStyle: {
    // width: 45,
    // height: 45,
    borderRadius: 8,
    borderColor: Colors.primary,
  },
  resendContainer: {
    // flexDirection: 'row',
    justifyContent: 'center',
  },
  resendText: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 20,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  timerText: {
    color: Colors.black,
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 26,
    fontFamily: Fonts.TajawalExtraBold,
  },
  button: {
    bottom: ScaleHeight('10%'),
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default styles;
